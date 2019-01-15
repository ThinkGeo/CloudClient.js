# ThinkGeoCloudClient.js

ThinkGeoCloudClient.js is an open-source JavaScript SDK for making request to ThinkGeo Cloud Service. It simplifies the process of the code of request.


## Demos

* [Vector Tile](https://cloudclientsamples.thinkgeo.com/#)
* [Elevation](https://cloudclientsamples.thinkgeo.com/#Elevation)
* [Reverse Geocoding](https://cloudclientsamples.thinkgeo.com/#Reverse-Geocoding)
* [Geocoding](https://cloudclientsamples.thinkgeo.com/#Geocoding)
* [Colors](https://cloudclientsamples.thinkgeo.com/#Colors)


## Create a basic web application with CloudClient.js

In this walkthrough, you will learn how to create a basic web application with CloudClient.js. You should have some familiarity with HTML/CSS and JavaScript, but the source code is provided. Any operating system or text editor will work, but you will need an internet connection while you are working (Take GeoCoding Service as example). 

**Step 1:** Create an API Key

CloudClient.js requires an API key for access to ThinkGeo Cloud services, it can be created following the guide of "[Create a Client Key](http://wiki.thinkgeo.com/wiki/thinkgeo_cloud_quick_start_guide)". For help, see the [API Reference](https://cloud.thinkgeo.com/help) or [Quick Start Guide](http://wiki.thinkgeo.com/wiki/thinkgeo_cloud_quick_start_guide).

**Step 2:** Create an index page

To get started making your application with Cloud Service, you need to use a text editor to update the HTML.

1. Start your text editor with a blank document "index.html" and copy and paste the following HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
  </body>
</html>
```

2. In the `<head>` tag, add a title, such as `<title>My Cloud Service Sample</title>`.

3. In the `<body>` tag, add a `DIV` to show the response from Cloud Services.

After all the above, the HTML document should look as below:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Cloud Service Sample</title>
  </head>
  <body>
    <div id="response"></div>
  </body>
</html>
```

**Step 3:** Add references JavaScript files

To get started using CloudClient.js, you need to link to the JS files in the '<head>' section. Both NPM or CDN provides the minified version, which is a compressed file that improves performance. 
  
##### CDN
Load from CDN in your project:

```html
<!-- latest minified version of thinkgeocloudclient.js -->
<script src="https://cdn.thinkgeo.com/cloudclient-js/1.0.0/thinkgeocloudclient.js"></script>
```

##### NPM

- Install the package:
```
npm i thinkgeocloudclient-js
``` 

- Include it to your page:
```html
<!-- latest minified version of thinkgeocloudclient.js -->
<script src="path/to/dist/thinkgeocloudclient.js"></script>
```

**Step 4:** At the bottom of your page, add a JavaScript section to consume the services. 
 
 
