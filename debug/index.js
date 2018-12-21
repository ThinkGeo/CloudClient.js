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

var ec = new tg.ElevationClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

ec.on("sendingWebRequest", function (e) {
    console.log(e);
});

var typeSelect = document.getElementById('type');

var draw, wktElement;
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
            if (value === "Point") {
                let wkt = new ol.format.WKT().writeFeature(e.feature);

                wktElement = document.createElement("code");
                wktElement.innerHTML = "<hr/>" + wkt;
                document.getElementById("response").appendChild(wktElement)
                var point = e.feature.getGeometry().getCoordinates();

                queryPoint(point);
            }
            else if (value === "LineString") {
                let wkt = new ol.format.WKT().writeFeature(e.feature);

                wktElement = document.createElement("code");
                wktElement.innerHTML = "<hr/>" + wkt;
                document.getElementById("response").appendChild(wktElement)

                queryLine(wkt);
            }
        })
    }
}

typeSelect.onchange = function () {
    map.removeInteraction(draw);
    addInteraction();
};

var queryPoint = function (point) {

    // API 1:
    // ec.getElevationOfPoint(point[1], point[0], { projectionInSrid: "3857" }, function (status, elevationResponseText) {
    //     let resultElement = document.createElement("code");
    //     resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(elevationResponseText), null, 4);
    //     wktElement.appendChild(resultElement);
    //     scrollToTop()
    // })

    // API 2:
    ec.getElevationOfPointPromise(point[0], point[1], {projectionInSrid: "3857"}).then(function (elevationResponseText) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(elevationResponseText), null, 4);
        wktElement.appendChild(resultElement);
        scrollToTop()
    }, function (errorText) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(errorText), null, 4);
        wktElement.appendChild(resultElement);
        scrollToTop()
    })
}
var queryLine = function (wkt) {
    // API 3:
    // ec.getElevationOfLine(wkt, { projectionInSrid: "3857", numberOfSegments: "2" }, function (status, elevationResponseText) {
    //     let resultElement = document.createElement("code");
    //     resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(elevationResponseText), null, 4);
    //     wktElement.appendChild(resultElement);
    //     scrollToTop()
    // });

    // API 4:
    // ec.getElevationOfLinePromise(wkt, { projectionInSrid: "3857", numberOfSegments: "2" }).then(function (elevationResponseText) {
    //     let resultElement = document.createElement("code");
    //     resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(elevationResponseText), null, 4);
    //     wktElement.appendChild(resultElement);
    //     scrollToTop()
    // }).catch(function (elevationResponseText) {
    //     let resultElement = document.createElement("code");
    //     resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(elevationResponseText), null, 4);
    //     wktElement.appendChild(resultElement);
    //     scrollToTop()
    // });

    // API 5:
    // ec.getGradeOfLine(wkt, { projectionInSrid: "3857", numberOfSegments: "2" }, function (status, elevationResponseText) {
    //     let resultElement = document.createElement("code");
    //     resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(elevationResponseText), null, 4);
    //     wktElement.appendChild(resultElement);
    //     scrollToTop()
    // });

    // API 6:
    // ec.getGradeOfLinePromise(wkt, { projectionInSrid: "3857", numberOfSegments: "2" }, function (elevationResponseText) {
    //     let resultElement = document.createElement("code");
    //     resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(elevationResponseText), null, 4);
    //     wktElement.appendChild(resultElement);
    //     scrollToTop()
    // }).catch(function (elevationResponseText) {
    //     let resultElement = document.createElement("code");
    //     resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(elevationResponseText), null, 4);
    //     wktElement.appendChild(resultElement);
    //     scrollToTop()
    // });
}

addInteraction();

var scrollToTop = function () {
    let elevationResult = document.getElementById("elevationResult");
    elevationResult.scrollTop = elevationResult.scrollHeight;
}

document.getElementById("clearBtn").addEventListener("click", function () {
    source.clear();
    document.getElementById("response").innerHTML = "";
})

