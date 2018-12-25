var gc = new tg.GeocodingClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});
var inputEle = document.getElementById('inputText');
var resEle = document.getElementById('response');
var queryGeocoding = function () {
    // API 1: getGeocodingResult 
    let inputText = inputEle.value;
    gc.getGeocodingResult(inputText, {}, function (status, elevationResponseText) {
        resEle.innerHTML = JSON.stringify(JSON.parse(elevationResponseText), null, 4);
    });
};
var keyDownHandler = function(e){
    if(e.keyCode === 13){
        queryGeocoding();
    }
}

document.getElementById("search").addEventListener("click", queryGeocoding);
document.addEventListener('keydown', keyDownHandler);