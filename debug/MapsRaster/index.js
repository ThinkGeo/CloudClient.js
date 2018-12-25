var mrc = new tg.MapsRasterClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});
var inputEle = document.getElementById('inputText');
var resEle = document.getElementById('response');

var queryMapsRaster = function () {
    // API 1: getGeocodingResult 
    var style = document.getElementById('style').value;
    var resolution = document.getElementById('resolution').value;
    var srid = document.getElementById('srid').value;
    var tileSize = document.getElementById('tileSize').value;
    var tileZ = document.getElementById('tileZ').value;
    var tileX = document.getElementById('tileX').value;
    var tileY = document.getElementById('tileY').value;
    var fileExtension = document.getElementById('fileExtension').value;
    mrc.GetRasterTile(style, resolution, srid, tileSize, tileZ, tileX, tileY, fileExtension, function (status, response) {

        let blob = response;
        let imgTag = document.querySelector("img");
        let url = URL.createObjectURL(blob);
        imgTag.src = url;
    });
};
var keyDownHandler = function (e) {
    if (e.keyCode === 13) {
        queryMapsRaster();
    }
}

document.getElementById("search").addEventListener("click", queryMapsRaster);
document.addEventListener('keydown', keyDownHandler);