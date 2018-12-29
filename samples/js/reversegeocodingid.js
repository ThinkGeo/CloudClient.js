var rgc = new tg.ReverseGeocodingClient({
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

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("response").innerHTML = "";
})

document.getElementById("search").addEventListener("click", function () {
    var inputId = document.getElementById('inputId').value;
    rgc.searchPlaceById(inputId, function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
        document.getElementById('response').appendChild(resultElement);
    });
})