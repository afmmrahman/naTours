/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidGFyZXFyYWhtYW4iLCJhIjoiY2szOWIzbzR4MDBxZjNtcXRjb21mcm5tNyJ9.yk-PWNICsP_EhhOU3Q1unw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/tareqrahman/ck39bc6m3023g1cp0dxkhuegg',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 10,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
