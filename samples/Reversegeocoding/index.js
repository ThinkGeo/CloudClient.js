var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-96.792873, 32.772348]),
        zoom: 4
    })
});

var source = new ol.source.Vector();
var vector = new ol.layer.Vector({
    source: source,
})
map.addLayer(vector);

var rgc = new tg.ReverseGeocodingClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
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
            var wkt = new ol.format.WKT().writeFeature(e.feature);
            if (value === "Point") {
                wktElement = document.createElement("code");
                wktElement.innerHTML = "<hr/>" + wkt;
                document.getElementById("response").appendChild(wktElement);
                var point = e.feature.getGeometry().getCoordinates();
                queryPoint(point);
            } else if (value === "LineString") {
                wktElement = document.createElement("code");
                wktElement.innerHTML = "<hr/>" + wkt;
                document.getElementById("response").appendChild(wktElement)
                queryLine(wkt);
            } else if (value === "Polygon") {
                wktElement = document.createElement("code");
                wktElement.innerHTML = "<hr/>" + wkt;
                document.getElementById("response").appendChild(wktElement)
                queryArea(wkt);
            }
        })
    }
}

typeSelect.onchange = function () {
    map.removeInteraction(draw);
    addInteraction();
};

var queryPoint = function (point) {
    var ProjectionInSrid = document.getElementById('ProjectionInSrid').value;
    var ProjectionInProj4String = document.getElementById('ProjectionInProj4String').value;
    var Lang = document.getElementById('Lang').value;
    var SearchRadius = document.getElementById('SearchRadius').value;
    var SearchRadiusUnit = document.getElementById('SearchRadiusUnit').value;
    var MaxResults = document.getElementById('MaxResults').value;
    var LocationCategories = document.getElementById('LocationCategories').value;
    var LocationTypes = document.getElementById('LocationTypes').value;
    var VerboseResults = document.getElementById('VerboseResults').value;
    var DistanceFromQueryFeatureUnit = document.getElementById('DistanceFromQueryFeatureUnit').value;

    //API 1: getReverseGeocodeOfPoint 
    rgc.getReverseGeocodeOfPoint(point[1], point[0], {
        ProjectionInSrid: ProjectionInSrid,
        ProjectionInProj4String: ProjectionInProj4String,
        Lang: Lang,
        SearchRadius: SearchRadius,
        SearchRadiusUnit: SearchRadiusUnit,
        MaxResults: MaxResults,
        LocationCategories: LocationCategories,
        LocationTypes: LocationTypes,
        VerboseResults: VerboseResults,
        DistanceFromQueryFeatureUnit: DistanceFromQueryFeatureUnit
    }, function (status, responseText) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(responseText), null, 4);
        wktElement.appendChild(resultElement);
        scrollToTop()
    });
}
var queryLine = function (wkt) {
    var ProjectionInSrid = document.getElementById('ProjectionInSrid').value;
    var ProjectionInProj4String = document.getElementById('ProjectionInProj4String').value;
    var Lang = document.getElementById('Lang').value;
    var SearchRadius = document.getElementById('SearchRadius').value;
    var SearchRadiusUnit = document.getElementById('SearchRadiusUnit').value;
    var MaxResults = document.getElementById('MaxResults').value;
    var LocationCategories = document.getElementById('LocationCategories').value;
    var LocationTypes = document.getElementById('LocationTypes').value;
    var VerboseResults = document.getElementById('VerboseResults').value;
    var DistanceFromQueryFeatureUnit = document.getElementById('DistanceFromQueryFeatureUnit').value;

    // API 1: getReverseGeocodeOfLine
    rgc.getReverseGeocodeOfLine(wkt, {
        ProjectionInSrid: ProjectionInSrid,
        ProjectionInProj4String: ProjectionInProj4String,
        Lang: Lang,
        SearchRadius: SearchRadius,
        SearchRadiusUnit: SearchRadiusUnit,
        MaxResults: MaxResults,
        LocationCategories: LocationCategories,
        LocationTypes: LocationTypes,
        VerboseResults: VerboseResults,
        DistanceFromQueryFeatureUnit: DistanceFromQueryFeatureUnit
    }, function (status, responseText) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(responseText), null, 4);
        wktElement.appendChild(resultElement);
        scrollToTop()
    })
}
var queryArea = function (wkt) {
    // API 1: getElevationOfArea
    // ec.getElevationOfArea(wkt, {
    //     projectionInSrid: "3857"
    // }, function (status, elevationResponseText) {
    //     var resultElement = document.createElement("code");
    //     resultElement.innerHTML = "<br/>" + JSON.stringify(JSON.parse(elevationResponseText), null, 4);
    //     wktElement.appendChild(resultElement);
    //     scrollToTop();
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