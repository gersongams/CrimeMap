mapboxgl.accessToken =
	"pk.eyJ1IjoiZ2Vyc29uMjMxMjk0IiwiYSI6ImNqYXNycjEzYzFrc3czM3FrbnZobTNsYXIifQ.Z9xZ5zDVRYervZFNTPuiUw";

fetch("../data/peru_distrital_simple.geojson")
	.then(response => response.json())
	.then(json => console.log("Hi",json));

var map = new mapboxgl.Map({
	container: "map",

	style: "mapbox://styles/gerson231294/cj8bv3fyz7mb92sla7ggkt43q",
	center: [-77.039735, -12.0491484],
	zoom: 11
});
