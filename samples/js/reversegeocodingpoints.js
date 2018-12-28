var rgc = new tg.ReverseGeocodingClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("response").innerHTML = "";
})

document.getElementById('search').addEventListener("click", function () {
    var coord = document.getElementById('coord').value;
    var Srid = document.getElementById('Srid').value;
    var Proj4String = document.getElementById('Proj4String').value;
    var Lang = document.getElementById('Lang').value;
    var SearchRadius = document.getElementById('SearchRadius').value;
    var SearchRadiusUnit = document.getElementById('SearchRadiusUnit').value;
    var MaxResults = document.getElementById('MaxResults').value;
    var LocationCategories = document.getElementById('LocationCategories').value;
    var LocationTypes = document.getElementById('LocationTypes').value;
    var VerboseResults = document.getElementById('VerboseResults').value;
    var DistanceFromQueryFeatureUnit = document.getElementById('DistanceFromQueryFeatureUnit').value;

    var bodyArr = [];

    rgc.searchPlaceByPoints({
        body: [{
            "coord": coord,
            "srid": Srid,
            MaxResults: MaxResults,
        }],
    }, function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
        document.getElementById('response').appendChild(resultElement);
    })
});

// Srid: Srid,
//     Proj4String: Proj4String,
//     Lang: Lang,
//     SearchRadius: SearchRadius,
//     SearchRadiusUnit: SearchRadiusUnit,
//     MaxResults: MaxResults,
//     LocationCategories: LocationCategories,
//     LocationTypes: LocationTypes,
//     VerboseResults: VerboseResults,
//     DistanceFromQueryFeatureUnit: DistanceFromQueryFeatureUnit