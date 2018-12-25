var projection = new tg.ProjectionClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

var requestKwt = function (e) {
    let wkt = new ol.format.WKT().writeFeature(e.feature);
    requestProjectionOfWkt(wkt);
    requestProjectOfMulti(wkt); //POST,body parameters
}

var requestProjectionOfPoint = function (point) {
    projection.getProjectOfPoint(point[0], point[1], {
        fromProjectionInSrid: 3857,
        toProjectionInSrid: 4326
    }, function (status, data) {
        document.getElementById('projectionResponse_callback').innerText = JSON.stringify(JSON.parse(data), null, 4);
    })
}

var requestProjectionOfWkt = function (wkt) {
    projection.getProjectOfWkt(wkt, {
        fromProjectionInSrid: 3857,
        toProjectionInSrid: 4326
    }, function (status, data) {
        document.getElementById('projectionOfWktResponse_callback').innerText = JSON.stringify(JSON.parse(data), null, 4);
    })
}

var requestProjectOfMulti = function (wkt) {
    // projection.getProjectOfMulti(wkt, {
    //     fromProjectionInSrid: 3857,
    //     toProjectionInSrid: 4326
    // }, function (status, data) {
    //     document.getElementById('projectionOfMultiResponse_callback').innerText = JSON.stringify(JSON.parse(data), null, 4);
    // })
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
        draw.on("drawend", function (e) {
            var value = typeSelect.value;
            var wkt = new ol.format.WKT().writeFeature(e.feature);
            requestKwt(e);
            if (value === "Point") {
                var point = e.feature.getGeometry().getCoordinates();

                requestProjectionOfPoint(point);
            }
        })
    }
}
typeSelect.onchange = function () {
    map.removeInteraction(draw);
    addInteraction();
};

addInteraction();

document.getElementById("clearBtn").addEventListener("click", function () {
    source.clear();
    document.getElementById("projectionResponse_callback").innerHTML = "";
    document.getElementById("projectionOfWktResponse_callback").innerHTML = "";
    // document.getElementById("projectionOfMultiResponse_callback").innerHTML = "";
})