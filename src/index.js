import $Elevation$Client from "./Elevation/ElevationClient";
import $Projection$Client from "./Projection/ProjectionClient";
import $Geocoding$Client from "./Geocoding/GeocodingClient";

let tg = {};

tg.ElevationClient = $Elevation$Client;
tg.ProjectionClient = $Projection$Client;
tg.GeocodingClient = $Geocoding$Client;

export default tg;