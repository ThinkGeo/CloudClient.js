var ec = new tg.ElevationClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

var projection = new tg.ProjectionClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

var request = function () {
    var inputValue = document.getElementById('input').value;
    var point = inputValue.split(',');
    // API 1:
    ec.getElevationOfPoint(point[0], point[1], {}, function (status, elevationResponse) {
        document.getElementById('response1').innerText = elevationResponse;
    })

    // API 2:
    ec.getElevationOfPointPromise(point[0], point[1], {}).then(function (elevationResponse) {
        document.getElementById('response2').innerText = elevationResponse;
    }, function (errorText) {
        document.getElementById('response2').innerText = errorText;
    })

    // projection
    requestProjection();
}

var requestKwt = function (ee) {
    let wkt = new ol.format.WKT().writeFeature(ee.feature);
    requestLine(wkt);
    requestProjectionOfWkt(wkt);
    // requestProjectOfMulti();//POST,body parameters

}

var requestLine = function (wkt) {
    let hrElement = document.createElement("hr");
    document.getElementById("response4").appendChild(hrElement)
    let wktElement = document.createElement("code");
    wktElement.innerHTML = wkt;
    document.getElementById("response4").appendChild(wktElement)

    // API 3:
    ec.getElevationOfLine(wkt, {
        projectionInSrid: "3857",
        numberOfSegments: "2"
    }, function (status, elevationResponseText) {
        let brElement = document.createElement("br");
        wktElement.appendChild(brElement);

        let resultElement = document.createElement("code");
        resultElement.innerHTML = JSON.stringify(JSON.parse(elevationResponseText), null, 4);
        wktElement.appendChild(resultElement);
        scrollToTop()
    });

    // API 4:
    // ec.getElevationOfLinePromise(wkt, { projectionInSrid: "3857", numberOfSegments: "2" }).then(function (elevationResponseText) {
    //     let brElement = document.createElement("br");
    //     wktElement.appendChild(brElement);

    //     let resultElement = document.createElement("code");
    //     resultElement.innerHTML = JSON.stringify(JSON.parse(elevationResponseText), null, 4);
    //     wktElement.appendChild(resultElement);

    //     scrollToTop()
    // });
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

var requestProjection = function (e) {
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

var requestProjectOfMulti = function (wkt) {
    projection.getProjectOfMultiPromise(wkt, {
        fromProjectionInSrid: 3857,
        toProjectionInSrid: 3857
    }).then(function (data) {
        document.getElementById('projectionOfMultiResponse').innerText = data;
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
// draw.on("drawend", requestLine);

draw.on("drawend", requestKwt);

document.getElementById('search').addEventListener('click', request);
document.getElementById('search_projection').addEventListener('click', requestProjection);

var scrollToTop = function () {
    let lineElevationElement = document.getElementById("lineElevation");
    lineElevationElement.scrollTop = lineElevationElement.scrollHeight;
}