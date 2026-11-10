// Center the map on Manolo Fortich
const map = L.map("map").setView([8.37, 124.86], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

const marker = L.marker([8.37, 124.86]).addTo(map);

marker.bindPopup(
  "<b>Manolo Fortich</b><br>Welcome to the beautiful municipality of Bukidnon!",
);

// Draw one 500-meter-radius circle
L.circle([8.37, 124.86], {
  color: "blue",
  fillColor: "#f3e4a3",
  fillOpacity: 0.3,
  radius: 500,
})
  .addTo(map)
  .bindPopup(
    "<b>500-Meter Radius</b><br>This circle covers an area within 500 meters of the center.",
  );

// Local landmarks
const locations = [
  {
    name: "Loulens Bake Shop",
    lat: 8.3541,
    lng: 124.8147,
    description: "A local bakery in the Manolo Fortich area.",
  },
  {
    name: "Damilag Public Market",
    lat: 8.3498,
    lng: 124.8119,
    description:
      "A local public market where residents can buy fresh goods and daily necessities.",
  },
  {
    name: "DearM Cafe",
    lat: 8.3542,
    lng: 124.8146,
    description: "A local cafe in the Manolo Fortich area.",
  },
];

locations.forEach(function (place) {
  L.marker([place.lat, place.lng])
    .addTo(map)
    .bindPopup(
      "<b>" +
        place.name +
        "</b><br>" +
        place.description +
        "<br><br>Latitude: " +
        place.lat +
        "<br>Longitude: " +
        place.lng,
    );
});

map.on("click", function (event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  L.popup()
    .setLatLng(event.latlng)
    .setContent(
      "<b>Clicked Location</b><br>" +
        "Latitude: " +
        lat.toFixed(5) +
        "<br>Longitude: " +
        lng.toFixed(5),
    )
    .openOn(map);
});
