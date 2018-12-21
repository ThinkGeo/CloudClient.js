var projection = new tg.ProjectionClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

var requestKwt = function (e) {
    let wkt = new ol.format.WKT().writeFeature(e.feature);
    requestProjectionOfWkt(wkt);
    // requestProjectOfMulti();//POST,body parameters
}

var requestProjectionOfPoint = function () {
    var inputValue = document.getElementById('input').value;
    var point = inputValue.split(',');
    projection.getProjectOfPointPromise(point[0], point[1], {
        fromProjectionInSrid: 4326,
        toProjectionInSrid: 4326
    }).then(function (data) {
        document.getElementById('projectionResponse').innerText = data;
    }, function (error) {
        document.getElementById('projectionResponse').innerText = error;
    });
}

var requestProjectionOfWkt = function (wkt) {
    projection.getProjectOfWktPromise(wkt, {
        fromProjectionInSrid: 3857,
        toProjectionInSrid: 3857
    }).then(function (data) {
        document.getElementById('projectionOfWktResponse').innerText = data;
    }, function (error) {
        document.getElementById('projectionOfWktResponse').innerText = error;
    });
}

var requestProjectOfMulti = function (wkt) {
    projection.getProjectOfMultiPromise(wkt, {
        fromProjectionInSrid: 3857,
        toProjectionInSrid: 3857
    }).then(function (data) {
        document.getElementById('projectionOfMultiResponse').innerText = JSON.stringify(JSON.parse(data), null, 4);
    }, function (error) {
        document.getElementById('projectionOfMultiResponse').innerText = error;
    });
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

var draw = new ol.interaction.Draw({
    source: source,
    type: "LineString"
})

map.addInteraction(draw);

draw.on("drawend", requestKwt);

document.getElementById('search_projection').addEventListener('click', requestProjectionOfPoint);