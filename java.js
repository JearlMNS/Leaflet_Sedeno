const map = L.map("map").setView([8.37, 124.86], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <ahref="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);
const marker = L.marker([8.37, 124.86]).addTo(map);

marker.bindPopup("<b>Manolo Fortich</b><p>Welcome to Bukidnon!</p>");
L.circle([8.37, 124.86], {
  color: "blue",
  fillColor: "#30a3ec",
  fillOpacity: 0.3,
  radius: 500,
}).addTo(map);

map.on("click", function (event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  L.popup()
    .setLatLng(event.latlng)
    .setContent(
      "Latitude: " + lat.toFixed(5) + "<br>Longitude: " + lng.toFixed(5),
    )
    .openOn(map);
});
const locations = [
  { name: "Loulens Bake Shop", lat: 8.3541, lng: 124.8147 },
  { name: "Damilag Public Market", lat: 8.3498, lng: 124.8119 },
  { name: "DearM Cafe", lat: 8.3542, lng: 124.8146 },
];

locations.forEach(function (place) {
  L.marker([place.lat, place.lng]).addTo(map).bindPopup(place.name);
});
