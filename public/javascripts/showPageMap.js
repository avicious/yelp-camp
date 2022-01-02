const parsedCamp = JSON.parse(campground)
mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/light-v10',
  center: parsedCamp.geometry.coordinates, 
  zoom: 10
  });
  map.addControl(new mapboxgl.NavigationControl());

const el = document.createElement('div');
el.className = 'marker';
  
new mapboxgl.Marker(el)
    .setLngLat(parsedCamp.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset: 25})
        .setHTML(
            `<h4>${parsedCamp.title}</h4><p>${parsedCamp.location}</p>`
        )
    )
    .addTo(map)    