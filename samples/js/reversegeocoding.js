var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-96.792873, 32.772348]),
        zoom: 14
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

            var Srid = document.getElementById('Srid').value;
            var Proj4String = document.getElementById('Proj4String').value;
            var Lang = document.getElementById('Lang').value;
            var SearchRadius = document.getElementById('SearchRadius').value;
            var SearchRadiusUnit = document.getElementById('SearchRadiusUnit').value;
            var MaxResults = document.getElementById('MaxResults').value;
            var LocationCategories = document.getElementById('LocationCategories').value;
            var LocationTypes = document.getElementById('LocationTypes').value;
            var VerboseResults = document.getElementById('VerboseResults').value;
            var DistanceFromQueryFeatureUnit = document.getElementById('DistanceFromQueryFeatureUnit').value;

            if (value === "Point") {
                var point = e.feature.getGeometry().getCoordinates();
                document.getElementById('method').style.display = 'inline-block';
                wktElement = document.createElement("code");
                wktElement.innerHTML = "<hr/>" + wkt;
                document.getElementById("response").appendChild(wktElement);
                rgc.searchPlaceByPoint(point[1], point[0], function (status, response) {
                    let resultElement = document.createElement("code");
                    resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
                    wktElement.appendChild(resultElement);
                    scrollToTop()
                }, {
                    Srid: Srid,
                    Proj4String: Proj4String,
                    Lang: Lang,
                    SearchRadius: SearchRadius,
                    SearchRadiusUnit: SearchRadiusUnit,
                    MaxResults: MaxResults,
                    LocationCategories: LocationCategories,
                    LocationTypes: LocationTypes,
                    VerboseResults: VerboseResults,
                    DistanceFromQueryFeatureUnit: DistanceFromQueryFeatureUnit
                });
            } else if (value === "LineString") {
                wktElement = document.createElement("code");
                wktElement.innerHTML = "<hr/>" + wkt;
                document.getElementById("response").appendChild(wktElement)
                rgc.searchPlaceByLine(wkt, function (status, response) {
                    let resultElement = document.createElement("code");
                    resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
                    wktElement.appendChild(resultElement);
                    scrollToTop();
                }, {
                    Srid: Srid,
                    Proj4String: Proj4String,
                    Lang: Lang,
                    SearchRadius: SearchRadius,
                    SearchRadiusUnit: SearchRadiusUnit,
                    MaxResults: MaxResults,
                    LocationCategories: LocationCategories,
                    LocationTypes: LocationTypes,
                    VerboseResults: VerboseResults,
                    DistanceFromQueryFeatureUnit: DistanceFromQueryFeatureUnit
                });
            } else if (value === "Polygon") {
                wktElement = document.createElement("code");
                wktElement.innerHTML = "<hr/>" + wkt;
                document.getElementById("response").appendChild(wktElement)
                rgc.searchPlaceByArea(wkt, function (status, response) {
                    let resultElement = document.createElement("code");
                    resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
                    wktElement.appendChild(resultElement);
                    scrollToTop()
                }, {
                    Srid: Srid,
                    Proj4String: Proj4String,
                    Lang: Lang,
                    SearchRadius: SearchRadius,
                    SearchRadiusUnit: SearchRadiusUnit,
                    MaxResults: MaxResults,
                    LocationCategories: LocationCategories,
                    LocationTypes: LocationTypes,
                    VerboseResults: VerboseResults,
                    DistanceFromQueryFeatureUnit: DistanceFromQueryFeatureUnit
                });
            }
        })
    }
}

typeSelect.onchange = function () {
    map.removeInteraction(draw);
    addInteraction();
};

addInteraction();

var scrollToTop = function () {
    let result = document.getElementById("result");
    result.scrollTop = result.scrollHeight;
}

document.getElementById("clearBtn").addEventListener("click", function () {
    source.clear();
    document.getElementById("response").innerHTML = "";
})