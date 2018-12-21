var projection = new tg.ProjectionClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

var requestKwt = function (e) {
    let wkt = new ol.format.WKT().writeFeature(e.feature);
    requestProjectionOfWkt(wkt);
    requestProjectOfMulti(wkt); //POST,body parameters
}

var requestProjectionOfPoint = function () {
    var inputValue = document.getElementById('input').value;
    var point = inputValue.split(',');
    projection.getProjectOfPointPromise(point[0], point[1], {
        fromProjectionInSrid: 4326,
        toProjectionInSrid: 3857
    }).then(function (data) {
        document.getElementById('projectionResponse_promise').innerText = JSON.stringify(JSON.parse(data), null, 4);
    }, function (error) {
        document.getElementById('projectionResponse_promise').innerText = error;
    });

    projection.getProjectOfPoint(point[0], point[1], {
        fromProjectionInSrid: 3857,
        toProjectionInSrid: 4326
    }, function (status, data) {
        document.getElementById('projectionResponse_callback').innerText = JSON.stringify(JSON.parse(data), null, 4);
    })
}

var requestProjectionOfWkt = function (wkt) {
    projection.getProjectOfWktPromise(wkt, {
        fromProjectionInSrid: 3857,
        toProjectionInSrid: 4326
    }).then(function (data) {
        document.getElementById('projectionOfWktResponse_promise').innerText = JSON.stringify(JSON.parse(data), null, 4);
    }, function (error) {
        document.getElementById('projectionOfWktResponse_promise').innerText = error;
    });

    projection.getProjectOfWkt(wkt, {
        fromProjectionInSrid: 3857,
        toProjectionInSrid: 4326
    }, function (status, data) {
        document.getElementById('projectionOfWktResponse_callback').innerText = JSON.stringify(JSON.parse(data), null, 4);
    })
}

var requestProjectOfMulti = function (wkt) {
    projection.getProjectOfMultiPromise(wkt, {
        fromProjectionInSrid: 3857,
        toProjectionInSrid: 4326
    }).then(function (data) {
        document.getElementById('projectionOfMultiResponse').innerText = JSON.stringify(JSON.parse(data), null, 4);
    }, function (error) {
        document.getElementById('projectionOfMultiResponse').innerText = error;
    });

    projection.getProjectOfMulti(wkt, {
        fromProjectionInSrid: 3857,
        toProjectionInSrid: 4326
    }, function (status, data) {
        document.getElementById('projectionOfMultiResponse').innerText = JSON.stringify(JSON.parse(data), null, 4);
    })
}

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4
    })
});

var source = new ol.source.Vector();
var vector = new ol.layer.Vector({
    source: source,
})
map.addLayer(vector);

var typeSelect = document.getElementById('type');

function addInteraction() {
    var value = typeSelect.value;
    if (value !== 'None') {
        draw = new ol.interaction.Draw({
            source: source,
            type: typeSelect.value
        });
        map.addInteraction(draw);
        draw.on("drawend", requestKwt)
    }
}
typeSelect.onchange = function () {
    map.removeInteraction(draw);
    addInteraction();
};

addInteraction();

document.getElementById('search_projection').addEventListener('click', requestProjectionOfPoint);
document.getElementById("clearBtn").addEventListener("click", function () {
    source.clear();
    document.getElementById("projectionResponse_promise").innerHTML = "";
    document.getElementById("projectionResponse_callback").innerHTML = "";
    document.getElementById("projectionOfWktResponse_promise").innerHTML = "";
    document.getElementById("projectionOfWktResponse_callback").innerHTML = "";
})