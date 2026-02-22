# Prompts

## 0 - Document data

Compactly describe the structure and data types of this GEOJSON file as a JS comment.

```json
// PUT THE FIRST LINES OF TOWNS.GEOJSON HERE
// head -n 6 data/towns.geojson | pbcopy
```

## 1 - Create map

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

## 2 - Add dropdown

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
