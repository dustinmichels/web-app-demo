// ----- TOWNS -----

/* 
GEOJSON structure for "towns":
- type: "FeatureCollection" (string)
- name: "towns" (string)
- crs: object with 
    - type: "name" (string)
    - properties: { name: string }
- features: array of Feature objects
  - Feature object:
    - type: "Feature" (string)
    - properties: object with keys:
        - TOWN: string
        - TOWN_ID: number
        - TYPE: string
        - COUNTY: string
    - geometry: object with
        - type: "MultiPolygon" (string)
        - coordinates: array of polygons
          - polygon: array of linear rings
            - linear ring: array of positions
              - position: [longitude (number), latitude (number)]
*/

// ----- STATIONS -----

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
