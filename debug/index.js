


var ec = new T.ElevationClient({
    apiKey: "v8pUXjjVgVSaUOhJCZENyNpdtN7_QnOooGkG0JxEdcI~"
});

var request = function () {
    let inputValue = document.getElementById('input').value;

    let point = inputValue.split(',');
    
    ec.getElevationOfPoint(point[0],point[1], null, null, "Feet", function (s, f) {
        document.getElementById('response').innerText = f;
    })

}
document.getElementById('search').addEventListener('click', request);