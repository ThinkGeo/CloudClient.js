const apiKey = 'Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~'; // please go to https://cloud.thinkgeo.com to create

let timeZoneClient = new tg.TimeZoneClient(apiKey);

//render base map
let baseMap = new ol.mapsuite.VectorTileLayer('https://cdn.thinkgeo.com/worldstreets-styles/1.0.0-beta009/light.json', {
    apiKey: apiKey,
});

let view = new ol.View({
    center: [843600.1261291262, 5933131.38691444],
    maxZoom: 10,
    maxResolution: 40075016.68557849 / 512,
    zoom: 1.5,
    minZoom: 1,
});

let map = new ol.Map({
    layers: [baseMap],
    target: 'map',
    loadTilesWhileAnimating: true,
    loadTilesWhileInteracting: true,
    view: view
});

let popupDom = document.getElementById('popup');

let overlay = new ol.Overlay({
    element: popupDom,
    autoPan: false,
});
overlay.setMap(map);

let TimeZoneRenderer = (function(){
    let module = {};

    let watch = {
        utcTimeDom: document.getElementById('tz-utcTime'),
        localTimeDom: document.getElementById('tz-localTime'),
    };
    watch._render = function(utcTime, localTime){
        this.utcTimeDom.textContent = utcTime.getUTCFullYear() + '-' +
                                      (utcTime.getUTCMonth() + 1) + '-' +
                                      utcTime.getUTCDate() + ' ' +
                                      utcTime.getUTCHours() + ':' +
                                      utcTime.getUTCMinutes() + ':' +
                                      utcTime.getUTCSeconds();
        this.localTimeDom.textContent = localTime.getUTCFullYear() + '-' +
                                        (localTime.getUTCMonth() + 1) + '-' +
                                        localTime.getUTCDate() + ' ' +
                                        localTime.getUTCHours() + ':' +
                                        localTime.getUTCMinutes() + ':' +
                                        localTime.getUTCSeconds();
    };
    watch.start = function(offsetSeconds){
        this.stop();
        let updateTime = function(){
            let utcTime = new Date();
            let localTime = new Date(utcTime.getTime() + offsetSeconds * 1000);
            this._render(utcTime, localTime);
            this._timeOutId = window.setTimeout(updateTime.bind(this), 1000);
        };
        updateTime.apply(this);
    };
    watch.stop = function(){
        let timeOutId = this._timeOutId;
        if(typeof(timeOutId) === 'number'){
            window.clearTimeout(timeOutId);
        }
    };

    module.show = function(coordinate, timeZoneResult){
        document.getElementById('tz-timeZone').textContent = timeZoneResult.timezone;
        document.getElementById('tz-countryName').textContent = timeZoneResult.countryName;
        watch.start(timeZoneResult.offsetSeconds);
        overlay.setPosition(coordinate);
    };
    module.hide = function(){
        overlay.setPosition();
        watch.stop();
    };
    return module;
})();

let showAlert = (function(){
    let transitionEndCallback = function(e){
        if (e.target.classList.contains('hidden')){
            document.body.removeChild(e.target);
        }
    };

    let hiddenAlertPanel = function(dom){
        dom.classList.add('hidden');
    };

    let result = function(message){
        let alertPanelDom = document.createElement('div');
        alertPanelDom.textContent = message;
        alertPanelDom.classList.add('alert-panel');
        alertPanelDom.addEventListener('transitionend', transitionEndCallback);
        document.body.appendChild(alertPanelDom);
        window.setTimeout(hiddenAlertPanel.bind(undefined, alertPanelDom), 1000);
    };

    return result;
})();

let getTimeZoneCallback = function(coordinate, statusCode, response){
    if (response.status !== 'success'){
        showAlert('StatusCode: ' + statusCode + ' ' + response.error.message);
        return;
    }
    TimeZoneRenderer.show(coordinate, response.data);
};

map.addEventListener('click', function(e){
    let coordinate = e.coordinate;
    TimeZoneRenderer.hide();
    timeZoneClient.getTimeZoneByCoordinate(coordinate[1], coordinate[0], function(statusCode, response){
        getTimeZoneCallback(coordinate, statusCode, response);
    }, {
        srid: 3857
    });
});