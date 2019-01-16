
let ColorClient = new tg.ColorClient("Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~");

//Render data
const renderData = (data) => {
    let outputData = []
    if (data) {
        if (data.data.colors) {
            outputData = data.data.colors;
        } else {
            data.data.forEach(function (val) {
                outputData = outputData.concat(val.colors)
            });
        }
    }
    updateStyle(outputData)
}

//Use cloudclient to get data
const getResponse = () => {
    const categoryColor = document.getElementById('category');
    let options = {
        category: categoryColor.options[categoryColor.selectedIndex].value,
        isRandom: document.getElementById('random').checked,
        color: document.getElementById('color').value,
        number: 20,
    }

    let opts = {
        numberOfColors: options.number
    }
    if (!options.isRandom) {
        opts.color = options.color;
    }

    switch (options.category) {
        case 'analogous':
            ColorClient.getColorsInAnalogousFamily(opts, function (status, response) {
                renderData(response)
            });
            break;
        case 'complementary':
            ColorClient.getColorsInComplementaryFamily(opts, function (status, response) {
                renderData(response)
            });
            break;
        case 'qualitative':
            ColorClient.getColorsInQualityFamily(opts, function (status, response) {
                renderData(response)
            });
            break;
        case 'sequential':
            ColorClient.getColorsInHueFamily(opts, function (status, response) {
                renderData(response)
            });
            break;
        case 'tetrad':
            ColorClient.getColorsInTetradFamily(opts, function (status, response) {
                renderData(response)
            });
            break;
        case 'contrasting':
            ColorClient.getColorsInContrastingFamily(opts, function (status, response) {
                renderData(response)
            });
            break;
        case 'triad':
            ColorClient.getColorsInTriadFamily(opts, function (status, response) {
                renderData(response)
            });
            break;
        default:
            ColorClient.getColorsInAnalogousFamily(opts, function (status, response) {
                renderData(response)
            });
    }
}

//render base map
const baseMapStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'rgba(256, 256, 256, 1)',
        width: 1
    }),
    text: new ol.style.Text({
        font: '16px Calibri,sans-serif',
        fill: new ol.style.Fill({
            color: '#990100'
        }),
        stroke: new ol.style.Stroke({
            color: '#fff',
            width: 3
        }),
    })
})

let baseMapLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: '../data/world-population.geo.json',
        format: new ol.format.GeoJSON()
    }),
    style: function (feature) {
        baseMapStyle.getText().setText(feature.get('NAME'));

        return baseMapStyle;
    }
});

let colorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: '../data/world-population.geo.json',
        format: new ol.format.GeoJSON(),
    })
})


let map = new ol.Map({
    loadTilesWhileAnimating: true,
    loadTilesWhileInteracting: true,
    layers: [colorLayer, baseMapLayer],
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([18.79620, 50.55423]),
        maxZoom: 19,
        maxResolution: 40075016.68557849 / 512,
        zoom: 4,
    }),
});

const updateStyle = (outputData) => {
    let styles = {
        'XXXS': new ol.style.Style({
            fill: new ol.style.Fill({
                color: `#${outputData[19]}`
            })
        }),
        'XXS': new ol.style.Style({
            fill: new ol.style.Fill({
                color: `#${outputData[17]}`
            })
        }),
        'XS': new ol.style.Style({
            fill: new ol.style.Fill({
                color: `#${outputData[15]}`
            })
        }),
        'S': new ol.style.Style({
            fill: new ol.style.Fill({
                color: `#${outputData[13]}`
            })
        }),
        'M': new ol.style.Style({
            fill: new ol.style.Fill({
                color: `#${outputData[11]}`
            }),
        }),
        'L': new ol.style.Style({
            fill: new ol.style.Fill({
                color: `#${outputData[9]}`
            }),
        }),
        'XL': new ol.style.Style({
            fill: new ol.style.Fill({
                color: `#${outputData[7]}`
            })
        }),
        'XXL': new ol.style.Style({
            fill: new ol.style.Fill({
                color: `#${outputData[5]}`
            })
        }),
        'XXXL': new ol.style.Style({
            fill: new ol.style.Fill({
                color: `#${outputData[3]}`
            })
        }),
        'XXXXL': new ol.style.Style({
            fill: new ol.style.Fill({
                color: `#${outputData[0]}`
            })
        }),

    }
    const layerStyle = function (feature) {
        let population = Number(feature.get('POP2005'))
        if (population < 10000) {
            return styles.XXXS
        } else if (population > 10000 && population < 50000) {
            return styles.XXS
        } else if (population > 50000 && population < 100000) {
            return styles.XS
        } else if (population > 100000 && population < 500000) {
            return styles.S
        } else if (population > 500000 && population < 1000000) {
            return styles.M
        } else if (population > 1000000 && population < 5000000) {
            return styles.L
        } else if (population > 5000000 && population < 10000000) {
            return styles.XL
        } else if (population > 10000000 && population < 50000000) {
            return styles.XXL
        } else if (population > 50000000 && population < 100000000) {
            return styles.XXXL
        } else if (population > 100000000) {
            return styles.XXXXL
        } else {
            return styles.XXL
        }
    }
    colorLayer.setStyle(layerStyle)
}


window.onload = function a() {
    let defaultData = ["641615", "7C1B1A", "93201F", "AB2624", "C22B28", "D43533", "D94D4A", "65153C", "7C1A4A", "931F58", "AB2567", "C22A75", "D33583", "D84C91", "641563", "7C1A7A", "931F91", "AB24A9", "C228C0", "D433D1"]
    updateStyle(defaultData)
    document.getElementById('generate').addEventListener('click', (e) => {
        getResponse()
    })
}


