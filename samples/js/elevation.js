/**
 *         
    apiKey = Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~;
    username = tgadmin;
    password = H3QW9-ippVqnv75e2saW;
    clientId = HG1tYAsAFcRjHUw2B8qrOtx9e5eLZVeNc6J6rxPUjo4~;
    clientSecret = oeRQZNUiUIbDVU4iirL6Q1gUQpFTqo_-8OQjiunrQ9ArNbvSf9325w~~;
    tokenUrl = https://cloud.thinkgeo.com/identity/connect/token;
 */

// let grade = new tg.GradeSegment(5.46806568893481, 'LINESTRING(-10713289.6742793 3865821.81477986,-10713292.2405644 3865824.38106417)', 534.120729045114, 534.667535695114);


var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-96.222, 32.777]),
        zoom: 14
    })
});

var source = new ol.source.Vector();
var vector = new ol.layer.Vector({
    source: source,
})
map.addLayer(vector);

var ec = new tg.ElevationClient({
    urls: [
        'https://cloud1.thinkgeo.com',
        'https://cloud2.thinkgeo.com',
        'https://cloud3.thinkgeo.com',
        'https://cloud4.thinkgeo.com',
        'https://cloud5.thinkgeo.com',
        'https://cloud6.thinkgeo.com'
    ],
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

ec.on("sendingWebRequest", function (e) {
    console.log('sendingWebRequest--', e);
});

ec.on("GettingAccessToken", function (e) {
    console.log('GettingAccessToken--', e);
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
    ec.getElevationOfPoint(point[1], point[0], function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
        wktElement.appendChild(resultElement);
        scrollToTop()
    }, {
        Srid: "3857",
        elevationUnit: "meter"
    })

    // API 2: getElevationOfPointInDecimalDegree
    // ec.getElevationOfPointInDecimalDegree(-90, 3.0, 'meter', function (status, response) {
    //     let resultElement = document.createElement("code");
    //     resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    //     wktElement.appendChild(resultElement);
    //     scrollToTop()
    // })
}
var queryLine = function (wkt) {
    var method = document.getElementById('method').value;
    if (method === 'getElevationOfLine') {
        ec.getElevationOfLine(wkt, function (status, response) {
            let resultElement = document.createElement("code");
            resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
            wktElement.appendChild(resultElement);
            scrollToTop()
        }, {
            IntervalDistance: 10,
            Srid: 3857
        });
    } else {
        ec.getGradeOfLine(wkt, function (status, response) {
            let resultElement = document.createElement("code");
            resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
            wktElement.appendChild(resultElement);
            scrollToTop()
        }, {
            IntervalDistance: 10,
            Srid: 3857
        })
    }
}
var queryArea = function (wkt) {
    ec.getElevationOfArea(wkt, function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
        wktElement.appendChild(resultElement);
        scrollToTop()
    }, {
        Srid: 3857
    });
}

addInteraction();

var scrollToTop = function () {
    let elevationResult = document.getElementById("elevationResult");
    elevationResult.scrollTop = elevationResult.scrollHeight;
}

var selectChangeHandle = function () {
    var typeValue = document.getElementById('type').value;
    if (typeValue === 'LineString') {
        document.getElementById('method').style.display = 'inline-block';
        document.getElementById('pointMethod').style.display = 'none';
    } else if (typeValue === 'Point') {
        document.getElementById('pointMethod').style.display = 'inline-block';
        document.getElementById('method').style.display = 'none';
    } else {
        document.getElementById('method').style.display = 'none';
        document.getElementById('pointMethod').style.display = 'none';
    }
}

document.getElementById("clearBtn").addEventListener("click", function () {
    source.clear();
    document.getElementById("response").innerHTML = "";
})

document.getElementById('type').addEventListener("change", selectChangeHandle);