# Part 3: Building an interactive web app with AI (Vibe Coding)

Create a new directory, just called app.

```sh
mkdir app
cd app
touch index.html
```

## [Optional] Document data types

We need a way to describe the data types to the chatbot. This is one way to do it. The step is optional because the output is already included in subsequent prompts.

Run each of these prompts and save the outputs in a new file, `types.js`. These types can be copy/pasted into prompts to give context.

`data/towns.geojson`

````markdown
Compactly describe the structure and data types of this GEOJSON file as a JS comment.

```json
// PUT THE FIRST LINES OF TOWNS.GEOJSON HERE
// head -n 6 data/towns.geojson | pbcopy
```
````

## Create the map

````markdown
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
````

## Set the basemap

```sh
# backup index.html
cp index.html "index_backup$(ls index_backup*.html 2>/dev/null | wc -l | tr -d ' ').html"
```

Check out [OpenFreeMap](https://openfreemap.org/quick_start/) for examples.

For more options, check out [Leaflet Providers](https://leaflet-extras.github.io/leaflet-providers/preview/)

**Prompt**

````markdown
Add a basemap to the map using Open Free Map tiles:
https://tiles.openfreemap.org/styles/liberty

Make the polygons mostly transparent.

OUTPUT: The complete, minimal, working index.html.

CODE:

```html
<!-- ADD CODE HERE -->
```
````

## Add a dropdown to select a town

```sh
# backup index.html
cp index.html "index_backup$(ls index_backup*.html 2>/dev/null | wc -l | tr -d ' ').html"
```

**Prompt**

````markdown
Add a dropdown to the page that allows the user to select a town, two-way synced with the map:

- Selecting a town from the dropdown highlights the corresponding polygon with a red border.
- Clicking a polygon highlights it and updates the dropdown to match.

Use Alpine.js to manage state and sync interactions.

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

OUTPUT: The complete, minimal, working index.html.

CONTEXT:

Here is what the data file (`data/towns.geojson`) looks like:

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
````
