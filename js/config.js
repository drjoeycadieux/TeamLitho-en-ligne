mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2wxd204MXBnMDB4ODNwcXE2dGp3Y3U2bCJ9.HIKg5ahnyydbXMlrWH1f7Q";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/navigation-day-v1",
  center: [-73.567256, 45.5016889],
  zoom: 9.0
});

// disable map zoom when using scroll
map.scrollZoom.disable();
