var mrc = new tg.MapsClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});
var inputEle = document.getElementById('inputText');
var resEle = document.getElementById('response');

var queryMapsTile = function () {
    // API 1: getGeocodingResult 
    var style = document.getElementById('style').value;
    var resolution = document.getElementById('resolution').value;
    var srid = document.getElementById('srid').value;
    var tileSize = document.getElementById('tileSize').value;
    var tileZ = document.getElementById('tileZ').value;
    var tileX = document.getElementById('tileX').value;
    var tileY = document.getElementById('tileY').value;
    var fileExtension = document.getElementById('fileExtension').value;
    mrc.getRasterTile(style, resolution, srid, tileSize, tileZ, tileX, tileY, fileExtension, function (status, response) {
        let blob = response;
        let imgTag = document.querySelector("img");
        let url = URL.createObjectURL(blob);
        imgTag.src = url;
    });

    // API 2: getVectorTile
    document.getElementById('result2').style.display = 'inline';
    var srid = document.getElementById('srid2').value;
    var tileZ = document.getElementById('tileZ2').value;
    var tileX = document.getElementById('tileX2').value;
    var tileY = document.getElementById('tileY2').value;
    mrc.getVectorTile(srid, tileZ, tileX, tileY, function (status, response) {
        var blob = new Blob([response], {
            type: "application/pbf"
        });
        var objectUrl = URL.createObjectURL(blob);
        window.open(objectUrl);
        let a = document.querySelector("a");
        a.href = objectUrl;
        a.download = `${objectUrl}.pbf`;
    })
};
var keyDownHandler = function (e) {
    if (e.keyCode === 13) {
        queryMapsTile();
    }
}

document.getElementById("search").addEventListener("click", queryMapsTile);
document.addEventListener('keydown', keyDownHandler);