import $Base$Client from "./Advanced/BaseClient";
import $Elevation$Client from "./Elevation/ElevationClient";
import $Projection$Client from "./Projection/ProjectionClient";
import $Geocoding$Client from "./Geocoding/GeocodingClient";

import $ReverseGeocoding$Client from "./ReverseGeocoding/ReverseGeocodingClient";
import $Location$Categories from "./ReverseGeocoding/LocationCategories";

import $Color$Client from "./ColorUtilities/ColorClient";

import $Maps$Client from "./MapsTile/MapsClient";
import $Raster$Map$Type from "./MapsTile/RasterMapType";
import $Map$Projection from "./MapsTile/MapProjection";
import $Tile$Resolution from "./MapsTile/TileResolution";
import $Tile$Size from "./MapsTile/TileSize";


let tg = {};
tg.BaseClient = $Base$Client;
tg.ElevationClient = $Elevation$Client;
tg.ProjectionClient = $Projection$Client;
tg.GeocodingClient = $Geocoding$Client;

tg.MapsClient = $Maps$Client;
tg.MapProjection = $Map$Projection;
tg.RasterMapType = $Raster$Map$Type
tg.TileResolution = $Tile$Resolution;
tg.TileSize = $Tile$Size;

tg.ReverseGeocodingClient = $ReverseGeocoding$Client;
tg.ColorClient = $Color$Client;

tg.LocationCategories = $Location$Categories;

export default tg;