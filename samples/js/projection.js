var projection = new tg.ProjectionClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

var requestKwt = function (e) {
    let wkt = new ol.format.WKT().writeFeature(e.feature);

}

var requestProjectionOfPoint = function (point, fromProj, toProj) {
    projection.getProjectionOfPoint(point[1], point[0], fromProj, toProj, function (status, data) {
        document.getElementById('projectionResponse_callback').innerText = JSON.stringify(data, null, 4);
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

var scrollToTop = function () {
    let projectionResult = document.getElementById("projectionResult");
    projectionResult.scrollTop = projectionResult.scrollHeight;
}

map.addLayer(vector);

var typeSelect = document.getElementById('type');

typeSelect.onchange = function () {
    map.removeInteraction(draw);
    addInteraction();
};

var wktArr = [];
var count = 0;

function addInteraction() {
    var value = typeSelect.value;
    if (value !== 'None') {
        draw = new ol.interaction.Draw({
            source: source,
            type: typeSelect.value
        });
        map.addInteraction(draw);
        draw.on("drawend", function (e) {
            var wkt = new ol.format.WKT().writeFeature(e.feature);
            var wktElement = document.createElement("code");
            if (document.getElementById('method').value === 'getProjectionOfGeometry') {
                wktElement.innerHTML = "<hr/>" + wkt;
                document.getElementById("response").insertBefore(wktElement, null);
                projection.getProjectionOfGeometry(wkt, 3857, 4326, function (status, response) {
                    let resultElement = document.createElement("code");
                    resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
                    wktElement.appendChild(resultElement);
                    scrollToTop()
                })
            } else {
                count++;
                wktElement.innerHTML = "<hr/>" + wkt;
                document.getElementById("response").insertBefore(wktElement, null);
                wktArr.push(wkt);
                var inputCount = parseInt(document.getElementById('count').value)
                if (inputCount === count) {
                    count = 0;
                    projection.getProjectionOfGeometries({
                        body: {
                            "wkt": wktArr,
                            "fromProj": "3857",
                            "toProj": "4326"
                        }
                    }, function (status, response) {
                        let resultElement = document.createElement("code");
                        resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
                        wktElement.appendChild(resultElement);
                        scrollToTop()
                        wktArr = [];
                    })
                }
            }

        })
    }
}

addInteraction();

var selectChangeHandle = function () {
    var typeValue = document.getElementById('method').value;
    if (typeValue === 'getProjectionOfGeometry') {
        document.getElementById('count-wrap').style.display = 'none';
    } else {
        document.getElementById('count-wrap').style.display = 'inline-block';
    }
}

document.getElementById("clearBtn").addEventListener("click", function () {
    source.clear();
    document.getElementById("response").innerHTML = "";
})

document.getElementById('transform').addEventListener('click', function () {
    let point = document.getElementById('input').value.split(',')
    let fromProj = document.getElementById('fromProj').value;
    let toProj = document.getElementById('toProj').value;
    requestProjectionOfPoint(point, fromProj, toProj);
})

document.getElementById('method').addEventListener("change", selectChangeHandle);