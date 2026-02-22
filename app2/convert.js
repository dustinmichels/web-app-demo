const fs = require("fs");
const path = require("path");

// Input and output paths
const inputPath = path.join(__dirname, "data", "stations.json");
const outputPath = path.join(__dirname, "data", "stations.geojson");

function convertToGeoJSON() {
  // Read stations.json
  const raw = fs.readFileSync(inputPath, "utf8");
  const json = JSON.parse(raw);

  const stations = json?.data?.supply?.stations || [];

  const geojson = {
    type: "FeatureCollection",
    features: stations
      .filter(
        (station) =>
          station.location &&
          typeof station.location.lng === "number" &&
          typeof station.location.lat === "number",
      )
      .map((station) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [station.location.lng, station.location.lat],
        },
        properties: {
          stationId: station.stationId,
          stationName: station.stationName,
          siteId: station.siteId,
          // bikesAvailable: station.bikesAvailable,
          // bikeDocksAvailable: station.bikeDocksAvailable,
          // ebikesAvailable: station.ebikesAvailable,
          // scootersAvailable: station.scootersAvailable,
          // totalBikesAvailable: station.totalBikesAvailable,
          // totalRideablesAvailable: station.totalRideablesAvailable,
          // isValet: station.isValet,
          // isOffline: station.isOffline,
          // isLightweight: station.isLightweight,
          // lastUpdatedMs: station.lastUpdatedMs,
          // notices: station.notices,
        },
      })),
  };

  // Write GeoJSON file
  fs.writeFileSync(outputPath, JSON.stringify(geojson, null, 2));

  console.log(`Converted ${stations.length} stations to GeoJSON.`);
  console.log(`Output written to ${outputPath}`);
}

convertToGeoJSON();
