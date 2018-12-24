import $Elevation$Client from "./Elevation/ElevationClient";
import $Projection$Client from "./Projection/ProjectionClient";
import $Geocoding$Client from "./Geocoding/GeocodingClient";
import $MapsRaster$Client from "./MapsRaster/MapsRasterClient";

let tg = {};

tg.ElevationClient = $Elevation$Client;
tg.ProjectionClient = $Projection$Client;
tg.GeocodingClient = $Geocoding$Client;
tg.MapsRasterClient = $MapsRaster$Client;

export default tg;