# Prompts

## Document towns.geojson

Compactly describe the structure and data types of this GEOJSON file as a JS comment.

```json
// PUT THE FIRST LINES OF TOWNS.GEOJSON HERE
// head -n 6 data/towns.geojson | pbcopy
```

## Create the map

Create a minimal index.html that displays the polygons for the towns of MA on a map. Do NOT display a basemap.

Use Maplibre, loaded via script:

<script src='https://unpkg.com/maplibre-gl@5.18.0/dist/maplibre-gl.js'></script>

The data will be loaded from `data/towns.geojson`

Here is what the data file looks like:

```js
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
```

## Add a dropdown

```sh
# backup previous version of index.html
cp index.html index1-basic_map.html
```

Add a dropdown to the page that allows the user to select a town. Populate with the names of the towns.

The dropdown is two-way synced with the map:

- If the user selects a town from the dropdown, the corresponding polygon on the map should be highlighted with a red border.
- If the user clicks on a polygon on the map, the dropdown should update to show the selected town, and the polygon should be highlighted with a red border.

OUTPUT: The complete, minimal, working index.html.

CONTEXT:

Here is what the data file looks like:

```js
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
```

CODE:

```html
<!-- ADD CODE HERE -->
```

## Add basemap

Check out:
<https://leaflet-extras.github.io/leaflet-providers/preview/>

Add a basemap to the map using OpenStreetMap tiles. Make the polygons mostly transparent.

OUTPUT: The complete, minimal, working index.html.

CODE:

```html
<!-- ADD CODE HERE -->
```

## Add the bike stations

```sh
# backup previous version of index.html
cp index.html index2-basemap.html
```

### Document stations.geojson

Compactly describe the structure and data types of this GEOJSON file as a JS comment.

```json
// PUT THE FIRST LINES OF STATIONS.GEOJSON HERE
// head -n 33 data/stations.geojson | pbcopy
```

### Update index.html

Add the stations from `data/stations.geojson` to the map as points. When a station is clicked, display a popup with the station name, number of bikes available, and number of ebikes available, and number of docks available.

If more than one dock is available, color the point green. If only one dock is available, color the point yellow. If no docks are available, color the point red.

OUTPUT: The complete, minimal, working index.html.

CONTEXT:

Here is what the stations data file looks like:

```js
/*
GEOJSON structure:

- type: "FeatureCollection" (string)
- features: Array of Feature objects
  - Each Feature:
    - type: "Feature" (string)
    - geometry: object
      - type: "Point" (string)
      - coordinates: [longitude (number), latitude (number)]
    - properties: object
      - stationId: string
      - stationName: string
      - siteId: string
      - bikesAvailable: number
      - bikeDocksAvailable: number
      - ebikesAvailable: number
      - scootersAvailable: number
      - totalBikesAvailable: number
      - totalRideablesAvailable: number
      - isValet: boolean
      - isOffline: boolean
      - isLightweight: boolean
      - lastUpdatedMs: number (timestamp in ms)
      - notices: array of notice objects
        - localizedTitle: string
        - localizedDescription: string
        - url: string | null
        - __typename: string
*/
```

CODE:

```html
<!-- ADD CODE HERE -->
```
