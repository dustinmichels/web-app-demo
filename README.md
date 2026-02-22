# Web App Demo

Blue bikes:

<https://account.bluebikes.com/map>

Download MassGIS:

<https://www.mass.gov/info-details/massgis-data-2020-us-census-towns>

<https://www.mass.gov/info-details/massgis-data-municipalities>

## Backup

```sh
cp index.html "index_backup$(ls index_backup*.html 2>/dev/null | wc -l | tr -d ' ').html"
```

## Prompts

### Layout

Create a single index.html file, that provides layout for a web page. Use Tailwind CSS with Vue.js.

There is a header that says "Blue Bike Explorer"

On the left, there is a card with a map in it. Just use a placeholder for now.

On the right, there is a dropdown to select a city (placeholders for now).

Beneath that are some stats:

- Bikes available: XX
- EBikes available: XX
- Racks full: XX

### Replace the map

Replace the map placeholder with a Maplibre map. Center it on Boston, MA. Use the OpenStreetMap tiles. Overlay the polygons for the cities of Massachusetts. Locally, these will be found at: data/towns.geojson

Populate the dropdown with the names of the cities from the geojson file. When a city is selected, highlight it on the map with a red border. This also works in the opposite direction: if a city is clicked on the map, updated the dropdown.

Do not change the stats, leave them as placeholders for now.

Return the complete index.html file.

## Tools

- Node
- Bruno

Web app:

- Tailwind CSS
- Vue
- Maplibre
