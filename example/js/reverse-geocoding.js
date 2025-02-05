WebFont.load({
    custom: {
        families: ['vectormap-icons'],
        urls: ['https://cdn.thinkgeo.com/vectormap-icons/1.0.0/vectormap-icons.css']
    }
});


const styleJson = {
    light: 'https://cdn.thinkgeo.com/worldstreets-styles/1.0.0-beta009/light.json',
}
const apiKey = 'Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~';

let reverseGeocodingClient = new tg.ReverseGeocodingClient("Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~");



//style 
let _styles = {
    bestMatchLocation: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: '../image/point.png',
        })
    }),
    searchRadius: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: [0, 0, 255, 0.5],
            width: 1
        }),
        fill: new ol.style.Fill({ color: [0, 0, 255, 0.1] })
    }),
}

//base map
let light = new ol.mapsuite.VectorTileLayer(styleJson.light, {
    apiKey: apiKey,
    layerName: 'light'
});

//creat resultLayer
const createGeocodingLayer = function () {
    let vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({ features: [] }),
        style: function (feature) {
            let key = feature.get('type');
            let style = _styles[key];
            if (!style) {
                style = new ol.style.Style({
                    image: new ol.style.Icon({
                        anchor: [0.5, 1],
                        src: 'https://maps.thinkgeo.com/image/map-icon/' + key + '.png',
                        scale: 0.25
                    }),
                    text: new ol.style.Text({
                        font: '14px Arial',
                        text: '',
                        fill: new ol.style.Fill({ color: 'black' }),
                        stroke: new ol.style.Stroke({ color: 'white', width: 1 })
                    })
                });
                _styles[key] = style;
            }
            let textStyle = style.getText();
            if (textStyle) {
                textStyle.setText(feature.get('text'));
            }

            return style;
        }
    });
    vectorLayer.set('name', 'geocodingLayer');
    return vectorLayer;
};


//   Elements that make up the popup.

const container = document.getElementById('popup');
container.classList.remove('hidden');
const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');

let overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 2000
    }
});

closer.onclick = function () {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
};

const popUp = function (address, centerCoordinate) {

    let addressArr = address.split(",");
    overlay.setPosition(centerCoordinate);
    map.addOverlay(overlay);
    let length = addressArr.length;
    content.innerHTML = '<p style="font-size:1.3rem" >' + (addressArr[0] || '') + '</p><p style="margin-left:2px">' + (addressArr[1] || '') + ',' + (addressArr[length - 2] || '') + '</p>' + '<p>' + (addressArr[4] || '') + ',' + (addressArr[length - 1] || '') + '</p>'
}

//creat view
let view = new ol.View({
    center: ol.proj.fromLonLat([-96.804616, 33.120202]),
    maxZoom: 19,
    maxResolution: 40075016.68557849 / 512,
    zoom: 16,
})

//creat map
let map = new ol.Map({
    loadTilesWhileAnimating: true,
    loadTilesWhileInteracting: true,
    layers: [light, geocodingLayer = createGeocodingLayer()],
    target: 'map',
    view: view
});

map.addControl(new ol.control.FullScreen());


//creat feature
const createFeature = function (wkt) {
    let wktReader = new ol.format.WKT();
    let feature = wktReader.readFeature(wkt);
    if (feature.getGeometry().getType() !== 'Point') {
        feature = new ol.Feature({
            geometry: new ol.geom.Point(ol.extent.getCenter(feature.getGeometry().getExtent()))
        });
    }
    return feature;
};

//render Circle

const renderSearchCircle = function (radius, coordinate) {
    let projection = view.getProjection();
    let resolutionAtEquator = view.getResolution();
    let center = coordinate;
    let pointResolution = ol.proj.getPointResolution(projection, resolutionAtEquator, center);
    let resolutionFactor = resolutionAtEquator / pointResolution;
    let radiusInMeter = (radius) * resolutionFactor;

    let feature = new ol.Feature({
        geometry: new ol.geom.Circle(center, radiusInMeter),
        type: 'searchRadius'
    });
    geocodingLayer.getSource().addFeature(feature);
};


//render best Match
const renderBestMatchLoaction = function (place, coordinate, address) {
    if (place.data) {
        let wktReader = new ol.format.WKT();
        let feature = wktReader.readFeature(place.data.locationFeatureWellKnownText);
        if (feature.getGeometry().getType() !== 'Point') {
            feature = new ol.Feature({
                geometry: new ol.geom.Point([coordinate[1], coordinate[0]])
            });
        }
        feature.set('type', 'bestMatchLocation');
        feature.set('text', '');
        geocodingLayer.getSource().addFeature(feature);
        let addressArr = address.split(",");
        let length = addressArr.length;
        let coordinateTrans = ol.proj.transform([coordinate[1], coordinate[0]], 'EPSG:3857', 'EPSG:4326');
        document.getElementById('floating-panel').innerHTML = '<p style="font-size:1.2rem;font-weight: bold;" >' + (addressArr[0] || '') + '</p>' + '<p>' + (addressArr[1] || '') + ',' + (addressArr[length - 2] || '') + '</p>' + '<p>' + coordinateTrans[1].toFixed(4) + ' , ' + coordinateTrans[0].toFixed(4) + '</p>'
    }
}

const _supportedMarkers = ["aeroway", "amenity", "barrier", "building", "education", "entertainment", "financial", "healthcare", "historic", "intersection", "leisure", "manmade", "natural", "others", "power", "road", "shop", "sports", "sustenance", "tourism", "transportation", "waterway"];

//render Nearby Result
const renderNearbyResult = function (response) {
    for (let i = 0; i < response.length; i++) {
        let item = response[i].data;
        let feature;
        if (item.locationCategory === 'Intersection') {
            feature = createFeature(item.location);
            feature.set('type', 'intersection');
        } else {
            var marker = item.locationCategory.toLowerCase();
            if (!_supportedMarkers.includes(item.locationCategory.toLowerCase())) {
                marker = 'others';
            }
            feature = createFeature(item.locationFeatureWellKnownText);
            feature.set('type', marker);
        }
        feature.set('name', 'nearbyFeature');
        geocodingLayer.getSource().addFeature(feature);
    }

}

//search nearby
const reverseGeocode = function (coordinate, flag) {
    reverseGeocodingClient.searchPlaceByPoint(coordinate[0], coordinate[1], function (status, data) {
        if (data.data.bestMatchLocation) {
            let address = data.data.bestMatchLocation.data.address;
            if (flag) {
                renderBestMatchLoaction(data.data.bestMatchLocation, coordinate, address);
                renderNearbyResult(data.data.nearbyLocations);
                renderSearchCircle(500, [coordinate[1], coordinate[0]])
                view.animate({
                    center: [coordinate[1], coordinate[0]],
                    duration: 2000
                });
            } else {
                popUp(address, [coordinate[1], coordinate[0]])
            }

        } else {
            window.alert('No results found');
        }

    }, {
            srid: 3857,
            searchRadius: 500,
            maxResults: 20,
            verboseResults: true,
        });
}

map.addEventListener('click', function (evt) {
    let source = geocodingLayer.getSource();
    let coordinate = evt.coordinate;
    overlay.setPosition(undefined);
    source.clear();
    reverseGeocode([coordinate[1], coordinate[0]], true)
});



let timer = null;
map.addEventListener('pointermove', function (evt) {
    clearTimeout(timer);
    timer = setTimeout(() => {
        let coordinate = evt.coordinate;
        let pixel = map.getPixelFromCoordinate(coordinate);
        map.forEachFeatureAtPixel(pixel, feature => {
            if (feature.get('name') === 'nearbyFeature') {
                reverseGeocode([coordinate[1], coordinate[0]], false)
            }
        }, {
                layerFilter: layer => {
                    let name = layer.get('name');
                    if (name === 'geocodingLayer') {
                        return true
                    }
                    return false;
                }
            })
    }, 500);

})
