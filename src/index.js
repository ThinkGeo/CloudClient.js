import BaseClient from "./Advanced/BaseClient";
import $Elevation$Client from "./Elevation/ElevationClient";
import $Projection$Client from "./Projection/ProjectionClient";
import $Geocoding$Client from "./Geocoding/GeocodingClient";
import $Maps$Client from "./MapsClient/MapsClient";
import $ReverseGeocoding$Client from "./ReverseGeocoding/ReverseGeocodingClient";
import $Color$Client from "./ColorUtilities/ColorClient";

import ElevationPointResult from "./Elevation/ElevationPointResult";
import ElevationResult from "./Elevation/ElevationResult";
import GradeResult from "./Elevation/GradeResult";
import GradeSegment from "./Elevation/GradeSegment";
import ReverseGeocodingLocation from "./ReverseGeocoding/ReverseGeocodingLocation";
import ReverseGeocodingOptions from "./ReverseGeocoding/ReverseGeocodingOptions";
import ReverseGeocodingResult from "./ReverseGeocoding/ReverseGeocodingResult";
import ReverseGeocodingResultDetail from "./ReverseGeocoding/ReverseGeocodingResultDetail";

import LocationCategories from "./shared/LocationCategories";
import TileResolution from "./shared/TileResolution";
import TileSize from "./shared/TileSize";

let tg = {};

tg.BaseClient = BaseClient;
tg.ElevationClient = $Elevation$Client;
tg.ProjectionClient = $Projection$Client;
tg.GeocodingClient = $Geocoding$Client;
tg.MapsClient = $Maps$Client;
tg.ReverseGeocodingClient = $ReverseGeocoding$Client;
tg.ColorClient = $Color$Client;

tg.GradeResult = GradeResult;
tg.GradeSegment = GradeSegment;
tg.ElevationPointResult = ElevationPointResult;
tg.ElevationResult = ElevationResult;
tg.ReverseGeocodingLocation = ReverseGeocodingLocation;
tg.ReverseGeocodingOptions = ReverseGeocodingOptions;
tg.ReverseGeocodingResult = ReverseGeocodingResult;
tg.ReverseGeocodingResultDetail = ReverseGeocodingResultDetail;

tg.LocationCategories = LocationCategories;
tg.TileResolution = TileResolution;
tg.TileSize = TileSize;

export default tg;