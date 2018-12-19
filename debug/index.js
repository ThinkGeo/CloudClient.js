var ec = new tg.ElevationClient({
    apiKey: "v8pUXjjVgVSaUOhJCZENyNpdtN7_QnOooGkG0JxEdcI~"
});

var request = function () {
    let inputValue = document.getElementById('input').value;

    let point = inputValue.split(',');

    // API 1:
    ec.getElevationOfPoint(point[0], point[1], null, null, "Feet", function (status, elevationResponse) {
        document.getElementById('response1').innerText = elevationResponse;
    })

    // API 2:
    ec.getElevationOfPointPromise(point[0], point[1], null, null, "Feet").then(function (elevationResponse) {
        document.getElementById('response2').innerText = elevationResponse;
    }, function (errorText) {
        document.getElementById('response2').innerText = errorText;
    })
}

document.getElementById('search').addEventListener('click', request);