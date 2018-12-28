var cc = new tg.ColorClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

// cc.getToken();
// inputColor:
document.getElementById("analogous_generate").addEventListener("click", function () {
    var InputColor = document.getElementById('analogous_color').value;
    var numberOfColors = document.getElementById('analogous_number').value;
    var inFormat = document.getElementById('analogous_input').value;
    var outFormat = document.getElementById('analogous_output').value;
    cc.getColorSchemeAnalogousByInputColorByNumberOfColor(InputColor, numberOfColors, function (status, response) {
        document.getElementById('res_analogous').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    }, {
        inFormat: inFormat,
        outFormat: outFormat
    });
})
document.getElementById("complementary_generate").addEventListener("click", function () {
    var InputColor = document.getElementById('complementary_color').value;
    var numberOfColors = document.getElementById('complementary_number').value;
    var inFormat = document.getElementById('complementary_input').value;
    var outFormat = document.getElementById('complementary_output').value;
    cc.getColorSchemeComplementaryByInputColorByNumberOfColor(InputColor, numberOfColors, function (status, response) {
        document.getElementById('res_complementary').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    }, {
        inFormat: inFormat,
        outFormat: outFormat
    });
})
document.getElementById("contrasting_generate").addEventListener("click", function () {
    var InputColor = document.getElementById('contrasting_color').value;
    var numberOfColors = document.getElementById('contrasting_number').value;
    var inFormat = document.getElementById('contrasting_input').value;
    var outFormat = document.getElementById('contrasting_output').value;
    cc.getColorSchemeContrastingByInputColorByNumberOfColor(InputColor, numberOfColors, function (status, response) {
        document.getElementById('res_contrasting').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    }, {
        inFormat: inFormat,
        outFormat: outFormat
    });
})
document.getElementById("sequential_generate").addEventListener("click", function () {
    var InputColor = document.getElementById('sequential_color').value;
    var numberOfColors = document.getElementById('sequential_number').value;
    var inFormat = document.getElementById('sequential_input').value;
    var outFormat = document.getElementById('sequential_output').value;
    cc.getColorSchemeSequentialByInputColorByNumberOfColor(InputColor, numberOfColors, function (status, response) {
        document.getElementById('res_sequential').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    }, {
        inFormat: inFormat,
        outFormat: outFormat
    });
})

document.getElementById("qualitative_generate").addEventListener("click", function () {
    var InputColor = document.getElementById('qualitative_color').value;
    var numberOfColors = document.getElementById('qualitative_number').value;
    var inFormat = document.getElementById('qualitative_input').value;
    var outFormat = document.getElementById('qualitative_output').value;
    cc.getColorSchemeQualitativeByInputColorByNumberOfColor(InputColor, numberOfColors, function (status, response) {
        document.getElementById('res_qualitative').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    }, {
        inFormat: inFormat,
        outFormat: outFormat
    });
})

document.getElementById("tetrad_generate").addEventListener("click", function () {
    var InputColor = document.getElementById('tetrad_color').value;
    var numberOfColors = document.getElementById('tetrad_number').value;
    var inFormat = document.getElementById('tetrad_input').value;
    var outFormat = document.getElementById('tetrad_output').value;
    cc.getColorSchemeTetradByInputColorByNumberOfColor(InputColor, numberOfColors, function (status, response) {
        document.getElementById('res_tetrad').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    }, {
        inFormat: inFormat,
        outFormat: outFormat
    });
})

document.getElementById("triad_generate").addEventListener("click", function () {
    var InputColor = document.getElementById('triad_color').value;
    var numberOfColors = document.getElementById('triad_number').value;
    var inFormat = document.getElementById('triad_input').value;
    var outFormat = document.getElementById('triad_output').value;
    cc.getColorSchemeTriadByInputColorByNumberOfColor(InputColor, numberOfColors, function (status, response) {
        document.getElementById('res_triad').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    }, {
        inFormat: inFormat,
        outFormat: outFormat
    });
})

// random:
document.getElementById("search_triad").addEventListener("click", function () {
    var numberOfColors = document.getElementById('triad').value;
    cc.getColorSchemeTriadRandomByNumberOfColor(numberOfColors, function (status, response) {
        document.getElementById('response_triad').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    });
})

document.getElementById("search_tetrad").addEventListener("click", function () {
    var numberOfColors = document.getElementById('tetrad').value;
    cc.getColorSchemeTriadRandomByNumberOfColor(numberOfColors, function (status, response) {
        document.getElementById('response_tetrad').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    });
})

document.getElementById("search_qualitative").addEventListener("click", function () {
    var numberOfColors = document.getElementById('qualitative').value;
    cc.getColorSchemeQualitativeRandomByNumberOfColor(numberOfColors, function (status, response) {
        document.getElementById('response_qualitative').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    });
})

document.getElementById("search_sequential").addEventListener("click", function () {
    var numberOfColors = document.getElementById('sequential').value;
    cc.getColorSchemeSequentialRandomByNumberOfColor(numberOfColors, function (status, response) {
        document.getElementById('response_sequential').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    });
})

document.getElementById("search_contrasting").addEventListener("click", function () {
    var numberOfColors = document.getElementById('contrasting').value;
    cc.getColorSchemeContrastingRandomByNumberOfColor(numberOfColors, function (status, response) {
        document.getElementById('response_contrasting').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    });
})


document.getElementById("search_complementary").addEventListener("click", function () {
    var numberOfColors = document.getElementById('complementary').value;
    cc.getColorSchemeComplementaryRandomByNumberOfColor(numberOfColors, function (status, response) {
        document.getElementById('response_complementary').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    });
})

document.getElementById("search_analogous").addEventListener("click", function () {
    var numberOfColors = document.getElementById('analogous').value;
    cc.getColorSchemeAnalogousRandomByNumberOfColor(numberOfColors, function (status, response) {
        document.getElementById('response_analogous').innerHTML = "<br/>" + JSON.stringify(response, null, 4);
    });
})