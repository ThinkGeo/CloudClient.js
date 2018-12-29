var gc = new tg.GeocodingClient({
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
var resEle = document.getElementById('response');
var queryGeocoding = function () {
    // API 1: getGeocodingResult 
    var locationType = document.getElementById('locationType').value;
    var fuzzyMatch = document.getElementById('fuzzyMatch').value;
    var maxResults = document.getElementById('maxResults').value;
    var verboseResults = document.getElementById('verboseResults').value;
    var Srid = document.getElementById('Srid').value;
    var Proj4String = document.getElementById('Proj4String').value;
    locationType = firstUpperCase(locationType);
    var inputTextArr = [];
    if (!document.getElementById('inputText2')) {
        var inputEle = document.getElementById('inputText1');
        var inputText = inputEle.value;
        gc.getGeocodingAdress(inputText, function (status, response) {
            resEle.innerHTML = JSON.stringify(response, null, 4);
        }, {
            LocationType: locationType,
            FuzzyMatch: fuzzyMatch,
            MaxResults: maxResults,
            VerboseResults: verboseResults,
            Srid: Srid,
            Proj4String: Proj4String,
        });
    } else {
        var inputEles = document.getElementsByClassName('inputText');
        Array.from(inputEles).forEach(element => {
            inputTextArr.push({
                "searchText": element.value
            })
        });
        inputTextArr = JSON.stringify(inputTextArr);
        gc.getGeocodingAdressBatch({
            body: inputTextArr,
            LocationType: locationType,
            FuzzyMatch: fuzzyMatch,
            MaxResults: maxResults,
            VerboseResults: verboseResults,
            Srid: Srid,
            Proj4String: Proj4String,
        }, function (status, response) {
            resEle.innerHTML = JSON.stringify(response, null, 4);
        });
    }
};
var keyDownHandler = function (e) {
    if (e.keyCode === 13) {
        queryGeocoding();
    }
}

function clear() {
    document.getElementById('response').innerText = '';
}

function firstUpperCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

var flag = 1;

function addNode() {
    var node = document.createElement('input');
    node.id = `inputText${flag+1}`;
    node.className = 'inputText';
    flag += flag;
    document.getElementById("inputBox").appendChild(node);
}

document.getElementById("search").addEventListener("click", queryGeocoding);
document.getElementById("clearBtn").addEventListener("click", clear);
document.addEventListener('keydown', keyDownHandler);
document.getElementById('add').addEventListener('click', addNode);