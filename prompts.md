# Prompts

## Document data types

Run each of these prompts and save the outputs in types.js

### Document towns.geojson

Compactly describe the structure and data types of this GEOJSON file as a JS comment.

```json
// PUT THE FIRST LINES OF TOWNS.GEOJSON HERE
// head -n 6 data/towns.geojson | pbcopy
```

### Document stations.geojson

Compactly describe the structure and data types of this GEOJSON file as a JS comment.

```json
// PUT THE FIRST LINES OF STATIONS.GEOJSON HERE
// head -n 33 data/stations.geojson | pbcopy
```

## Create the map

Create a minimal index.html that displays the polygons for the towns of MA on a map.

Use Maplibre, loaded via script:

```html
<script src="https://unpkg.com/maplibre-gl@5.18.0/dist/maplibre-gl.js"></script>
```

OUTPUT: The complete, minimal, working index.html.

CONTEXT:

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

### Update index.html

Add the stations from `data/stations.geojson` to the map as points. When a station is clicked, display a popup with the station name, number of bikes available, and number of ebikes available, and number of docks available.

Add a toggle: "Bikes available" vs. "Docks available".

When bikes available is selected, color the points based on the number of bikes available.

- If more than one bike is available, color the point green. If only one bike is available, color the point yellow. If no bikes are available, color the point red.

When docks available is selected, color the points based on the number of docks available.

- If more than one dock is available, color the point green. If only one dock is available, color the point yellow. If no docks are available, color the point red.

If a station isOffline is true, mark with a grey X instead of a circle, and show "Station is offline" in the popup.

Add a legend showing what the colors mean.

OUTPUT: The complete, minimal, working index.html. Retain all existing functionality.

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

## Add some stats

Create a new section on the page to show some stats about the stations.

When no town is selected, show stats for all stations. When a town is selected, show stats for the stations in that town.

- Title: "Stats for [town name] | all stations"
- number of stations
- number of bikes available
- number of e-bikes available
- number of docks available

To determine which stations fall in which towns, use Turf.js. Load via script:

<script src="https://cdn.jsdelivr.net/npm/@turf/turf@7/turf.min.js"></script>

Also change the border from black to white for all the stations within the selected town to highlight them. When a town is selected, zoom to that town.

OUTPUT: The complete, minimal, working index.html. Refactor existing code as needed to remain organized, but retain all existing functionality.

CODE:

```html
<!-- ADD CODE HERE -->
```

## Get the right area

Update the app to only draw polygons for towns that have at least one station in them. Also update the dropdown to only show those towns. Also zoom map to that area on load.

OUTPUT: The complete, minimal, working index.html. Refactor existing code as needed to remain organized, but retain all existing functionality.

CODE:

```html
<!-- ADD CODE HERE -->
```

## Live data

Add a button "Refresh data" that reloads the stations data by calling the blue bike API.

OUTPUT: The complete, minimal, working index.html. Refactor existing code as needed to remain organized, but retain all existing functionality.

FETCH REQUEST TO INCLUDE:

```js
const url = "https://account.bluebikes.com/bikesharefe-gql";

const query = `
  query GetSystemSupply($input: SupplyInput) {
    supply(input: $input) {
      stations {
        stationId
        stationName
        valetName
        location {
          lat
          lng
        }
        bikesAvailable
        bikeDocksAvailable
        ebikesAvailable
        scootersAvailable
        totalBikesAvailable
        totalRideablesAvailable
        isValet
        isOffline
        isLightweight
        siteId
        lastUpdatedMs
      }
    }
  }
`;

const body = {
  operationName: "GetSystemSupply",
  variables: {
    input: {
      regionCode: "BOS",
      rideablePageLimit: 1000,
    },
  },
  query,
};

const options = {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(body),
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);

  // log data.supply.stations[0]
  console.log(data.data.supply.stations[0]);
} catch (error) {
  console.error(error);
}
```

CODE:

```html
<!-- ADD CODE HERE -->
```

## Beautify

Pick one:

Theme ideas: Robotic, futuristic, cyberpunk, neon, synthwave, vaporwave, 80s retro, Tron, Blade Runner, etc.
Theme ideas: Fun, fluffy, gentle, pastel
Theme ideas: Clean, modern, minimalist, Scandinavian, Japanese, etc.

---

Turn this basic app into a beautiful data dashboard using tailwind and daisy UI.

Add a header with the title "Blue Bikes Dashboard" and a subtitle "Real-time data for Blue Bikes stations in Massachusetts". Add some padding and margins to the elements on the page.

Theme ideas: Clean, modern, minimalist

Load via cdn:

```html
<!-- tailwind -->
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<!-- daisy UI -->
<link
  href="https://cdn.jsdelivr.net/npm/daisyui@5"
  rel="stylesheet"
  type="text/css"
/>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

OUTPUT: The complete index.html. Refactor existing code as needed to remain organized, but retain all existing functionality.

CODE:

```html
<!-- ADD CODE HERE -->
```
