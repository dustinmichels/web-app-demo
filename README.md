# Web App Demo

## Usage

Run docsify

```sh
# install
# npm i docsify-cli -g

docsify serve docs
```

## Links

Blue bikes:

<https://account.bluebikes.com/map>

Download MassGIS:

<https://www.mass.gov/info-details/massgis-data-2020-us-census-towns>

<https://www.mass.gov/info-details/massgis-data-municipalities>

Leaflet tiles:
<https://leaflet-extras.github.io/leaflet-providers/preview/>

## Backup

```sh
cp index.html "index_backup$(ls index_backup*.html 2>/dev/null | wc -l | tr -d ' ').html"
```
