var rgc = new tg.ReverseGeocodingClient({
    apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("response").innerHTML = "";
})

document.getElementById('search').addEventListener("click", function () {
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
    var bodyParam = document.getElementById('body').value;
    bodyParam = bodyParam.replace(/[\r\n]/g,"");
    bodyParam = bodyParam.replace(/ /ig,'');
    bodyParamString = bodyParam.replace(/\[/g,'');
    bodyParamString = bodyParamString.replace(/\]/g,'');
    console.log(bodyParamString);

    var bodyArr = [];
    bodyArr.push(bodyParamString);

    rgc.searchPlaceByPoints({
        body: bodyArr,
        Srid: Srid,
        Proj4String: Proj4String,
        Lang: Lang,
        SearchRadius: SearchRadius,
        SearchRadiusUnit: SearchRadiusUnit,
        MaxResults: MaxResults,
        LocationCategories: LocationCategories,
        LocationTypes: LocationTypes,
        VerboseResults: VerboseResults,
        DistanceFromQueryFeatureUnit: DistanceFromQueryFeatureUnit
    }, function (status, response) {
        let resultElement = document.createElement("code");
        resultElement.innerHTML = "<br/>" + JSON.stringify(response, null, 4);
        document.getElementById('response').appendChild(resultElement);
    })
});