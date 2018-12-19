var ec = new tg.ElevationClient({
    apiKey: "v8pUXjjVgVSaUOhJCZENyNpdtN7_QnOooGkG0JxEdcI~"
});

var request = function () {
    let inputValue = document.getElementById('input').value;

    let point = inputValue.split(',');

    //// API 1:
    // ec.getElevationOfPoint(point[0], point[1], null, null, "Feet", function (s, f) {
    //     document.getElementById('response').innerText = f;
    // })

    // API 2:
    ec.getElevationOfPointPromise(point[0], point[1], null, null, "Feet").then(function (elevationResponse) {
        document.getElementById('response').innerText = elevationResponse;
    }, function (errorText) {
        document.getElementById('response').innerText = errorText;
    })
}
document.getElementById('search').addEventListener('click', request);