var gc = new tg.GeocodingClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});
var inputEle = document.getElementById('inputText');
var resEle = document.getElementById('response');
var queryGeocoding = function () {
    // API 1: getGeocodingResult 
    var inputText = inputEle.value;
    var locationType = document.getElementById('locationType').value;
    var fuzzyMatch = document.getElementById('fuzzyMatch').value;
    var maxResults = document.getElementById('maxResults').value;
    var verboseResults = document.getElementById('verboseResults').value;
    var projectionInSrid = document.getElementById('projectionInSrid').value;
    var projectionInProj4String = document.getElementById('projectionInProj4String').value;
    gc.getGeocodingResult(inputText, {
        locationType: locationType,
        fuzzyMatch: fuzzyMatch,
        maxResults: maxResults,
        verboseResults: verboseResults,
        projectionInSrid: projectionInSrid,
        projectionInProj4String: projectionInProj4String,
    }, function (status, elevationResponseText) {
        resEle.innerHTML = JSON.stringify(JSON.parse(elevationResponseText), null, 4);
    });
};
var keyDownHandler = function (e) {
    if (e.keyCode === 13) {
        queryGeocoding();
    }
}

function clear() {
    document.getElementById('response').innerText = '';
}

document.getElementById("search").addEventListener("click", queryGeocoding);
document.getElementById("clearBtn").addEventListener("click", clear);
document.addEventListener('keydown', keyDownHandler);