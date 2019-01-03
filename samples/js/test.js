// console.log('tg.LocationCategories----:',tg.LocationCategories)

var cc = new tg.ColorClient({
    urls: [
        'https://cloud1.thinkgeo.com',
        'https://cloud2.thinkgeo.com',
        'https://cloud3.thinkgeo.com',
        'https://cloud4.thinkgeo.com',
        'https://cloud5.thinkgeo.com',
        'https://cloud6.thinkgeo.com'
    ],
    // apiKey: "Yy6h5V0QY4ua3VjqdkJl7KTXpxbKgGlFJWjMTGLc_8s~"
    clientId : '',
    clientSecret : ''
});

cc.setCookie('accessToken', 'accessToken', 3600);
cc.setCookie('sdf s', 'accessT sdfasoken', 3600);
cc.setCookie('sdf asdfasfs', 'asdfsf ', 3600);
// cc.setCookie('cname','cvalue',5)
console.log(cc.getCookie('sdf s'));

// cc.getToken();