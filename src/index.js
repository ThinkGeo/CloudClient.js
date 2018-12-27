import $Elevation$Client from "./Elevation/ElevationClient";
import $Projection$Client from "./Projection/ProjectionClient";
import $Geocoding$Client from "./Geocoding/GeocodingClient";
import $Maps$Client from "./MapsClient/MapsClient";
import $ReverseGeocoding$Client from "./ReverseGeocoding/ReverseGeocodingClient";
import $Color$Client from "./ColorUtilities/ColorClient";

let tg = {};

tg.ElevationClient = $Elevation$Client;
tg.ProjectionClient = $Projection$Client;
tg.GeocodingClient = $Geocoding$Client;
tg.MapsClient = $Maps$Client;
tg.ReverseGeocodingClient = $ReverseGeocoding$Client;
tg.ColorClient = $Color$Client;

export default tg;