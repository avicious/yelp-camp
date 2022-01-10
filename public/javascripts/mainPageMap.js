mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-95.71, 37.09], 
  zoom: 3
  });
  map.addControl(new mapboxgl.NavigationControl());

  for(let camp of campground){
    const el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker(el)
    .setLngLat(camp.geometry.coordinates)
    .setPopup(
            new mapboxgl.Popup({offset: 25})
            .setHTML(
                `<a href='/campgrounds/${camp.properties.id}'>${camp.title}</a>`
            )
        )
    .addTo(map)
  }