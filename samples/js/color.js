var cc = new tg.ColorClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

document.getElementById("search_triad").addEventListener("click", function () {
    var numberOfColors = document.getElementById('triad').value;
    cc.getColorSchemeTriadRandomByNumberOfColor(numberOfColors, function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + response;
        document.getElementById('response_triad').appendChild(resultElement);
    });
})

document.getElementById("search_tetrad").addEventListener("click", function () {
    var numberOfColors = document.getElementById('tetrad').value;
    cc.getColorSchemeTriadRandomByNumberOfColor(numberOfColors, function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + response;
        document.getElementById('response_tetrad').appendChild(resultElement);
    });
})

document.getElementById("search_qualitative").addEventListener("click", function () {
    var numberOfColors = document.getElementById('qualitative').value;
    cc.getColorSchemeQualitativeRandomByNumberOfColor(numberOfColors, function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + response;
        document.getElementById('response_qualitative').appendChild(resultElement);
    });
})

document.getElementById("search_sequential").addEventListener("click", function () {
    var numberOfColors = document.getElementById('sequential').value;
    cc.getColorSchemeSequentialRandomByNumberOfColor(numberOfColors, function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + response;
        document.getElementById('response_sequential').appendChild(resultElement);
    });
})

document.getElementById("search_contrasting").addEventListener("click", function () {
    var numberOfColors = document.getElementById('contrasting').value;
    cc.getColorSchemeContrastingRandomByNumberOfColor(numberOfColors, function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + response;
        document.getElementById('response_contrasting').appendChild(resultElement);
    });
})


document.getElementById("search_complementary").addEventListener("click", function () {
    var numberOfColors = document.getElementById('complementary').value;
    cc.getColorSchemeComplementaryRandomByNumberOfColor(numberOfColors, function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + response;
        document.getElementById('response_complementary').appendChild(resultElement);
    });
})

document.getElementById("search_analogous").addEventListener("click", function () {
    var numberOfColors = document.getElementById('analogous').value;
    cc.getColorSchemeAnalogousRandomByNumberOfColor(numberOfColors, function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + response;
        document.getElementById('response_analogous').appendChild(resultElement);
    });
})