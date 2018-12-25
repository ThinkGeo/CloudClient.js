import $Elevation$Client from "./Elevation/ElevationClient";
import $Projection$Client from "./Projection/ProjectionClient";
import $Geocoding$Client from "./Geocoding/GeocodingClient";
import $Maps$Client from "./MapsClient/MapsClient";
import $ReverseGeocoding$Client from "./ReverseGeocoding/ReverseGeocodingClient";

let tg = {};

tg.ElevationClient = $Elevation$Client;
tg.ProjectionClient = $Projection$Client;
tg.GeocodingClient = $Geocoding$Client;
tg.MapsClient = $Maps$Client;
tg.ReverseGeocodingClient = $ReverseGeocoding$Client;

export default tg;