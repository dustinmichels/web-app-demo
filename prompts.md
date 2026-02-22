# Prompts

## 1

Create a minimal index.html that displays the polygons for the towns of MA on a map. Do NOT display a basemap.

Use Maplibre, loaded via script:

<script src='https://unpkg.com/maplibre-gl@5.18.0/dist/maplibre-gl.js'></script>

The data will be loaded from `data/towns.geojson`

Here is what the data file looks like:

```js
// GeoJSON FeatureCollection of stations
// {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: { type: "Point", coordinates: [lng, lat] },
//       properties: {
//         stationId, stationName, siteId,
//         bikesAvailable, bikeDocksAvailable, ebikesAvailable, scootersAvailable,
//         totalBikesAvailable, totalRideablesAvailable,
//         isValet, isOffline, isLightweight,
//         lastUpdatedMs,
//         notices: [{ localizedTitle, localizedDescription, url, __typename }]
//       }
//     },
//     ...
//   ]
// }
```
