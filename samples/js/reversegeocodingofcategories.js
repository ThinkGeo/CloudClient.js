var rgc = new tg.ReverseGeocodingClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

document.getElementById("search").addEventListener("click", function () {
    rgc.searchPlaceByCatergories(function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
        document.getElementById('response').appendChild(resultElement);
    });
})