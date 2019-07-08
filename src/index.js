import $DistanceUnit from './constants/DistanceUnit';
import $Base$Client from './Advanced/BaseClient';

import $Elevation$Client from './Elevation/ElevationClient';

import $Projection$Client from './Projection/ProjectionClient';

import $Geocoding$Client from './Geocoding/GeocodingClient';

import $ReverseGeocoding$Client from './ReverseGeocoding/ReverseGeocodingClient';
import $Location$Categories from './ReverseGeocoding/LocationCategories';

import $Color$Client from './ColorUtilities/ColorClient';

import $Maps$Client from './MapsTile/MapsClient';
import $Raster$Map$Type from './MapsTile/RasterMapType';
import $Map$Projection from './MapsTile/MapProjection';
import $Tile$Resolution from './MapsTile/TileResolution';
import $Tile$Size from './MapsTile/TileSize';

import $Routing$Client from './Routing/RoutingClient';

import $Time$Zone$Client from './TimeZone/TimeZoneClient';

import $Maps$Query$Client from './MapsQuery/MapsQueryClient';


let tg = {};
tg.DistanceUnit = $DistanceUnit;
tg.BaseClient = $Base$Client;

tg.ElevationClient = $Elevation$Client;

tg.ProjectionClient = $Projection$Client;

tg.GeocodingClient = $Geocoding$Client;

tg.ReverseGeocodingClient = $ReverseGeocoding$Client;
tg.LocationCategories = $Location$Categories;

tg.ColorClient = $Color$Client;

tg.MapsClient = $Maps$Client;
tg.RasterMapType = $Raster$Map$Type;
tg.MapProjection = $Map$Projection;
tg.TileResolution = $Tile$Resolution;
tg.TileSize = $Tile$Size;

tg.RoutingClient = $Routing$Client;

tg.TimeZoneClient = $Time$Zone$Client;

tg.MapsQueryClient = $Maps$Query$Client;

export default tg;