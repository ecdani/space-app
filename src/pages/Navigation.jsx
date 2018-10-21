import React, { Component } from 'react';
import L from 'leaflet';

export default class extends Component {
  componentDidMount() {
      const map = L.map('map', {
          center: [22, -100],
          zoom: 1,
          maxZoom: 11,
          minZoom: 1,
        });
      const imageUrl = '../src/assets/img/map4.jpg',
          imageBounds = [[-176, -400], [176, 400]];
      L.imageOverlay(imageUrl, imageBounds).addTo(map);
      const marker = L.marker([50.5, 30.5], { title: 'Curiosity' });
      marker.bindPopup('Curiosity').openPopup();
      marker.addTo(map);
      const marker2 = L.marker([40.5, 20.5], { title: 'Spirit' });
      marker2.bindPopup('Spirit').openPopup();
      marker2.addTo(map);
      const marker3 = L.marker([40.5, -20.5], { title: 'Viking 1' });
      marker3.bindPopup('Vikign 1').openPopup();
      marker3.addTo(map);
      const marker4 = L.marker([-40.5, -20.5], { title: 'Viking 2' });
      marker4.bindPopup('Viking 2').openPopup();
      marker4.addTo(map);

        /* var map = L.map('photo').setView(new L.LatLng(0,0), 0); */
        /* L.tileLayer.zoomify('../src/assets/img/map2', {
            width: 23059,
            height: 11530,
            tolerance: 0.8,
            attribution: 'Photo: Bjørn Sandvik',
          }).addTo(map); */

      const img = [
          23059, // original width of image
          11530, // original height of image
        ];
        // create the map
        // const map = L.map('map', { minZoom: 0 });

        // assign map and image dimensions
        // const rc = new L.RasterCoords(map, img);
        // set max zoom Level (might be `x` if gdal2tiles was called with `-z 0-x` option)
        // map.setMaxZoom(rc.zoomLevel());
        // set the view in the middle of the image
        // map.setView(rc.unproject([img[0] / 2, img[1] / 2]), 2);

        // set marker at the image bound edges
        /* const layerBounds = L.layerGroup([
            L.marker(rc.unproject([0, 0])).bindPopup('[0,0]'),
            L.marker(rc.unproject(img)).bindPopup(JSON.stringify(img)),
          ]);
        map.addLayer(layerBounds); */

        // set markers on click events in the map
        /* map.on('click', (event) => {
            const coords = rc.project(event.latlng);
            const marker = L.marker(rc.unproject(coords))
                  .addTo(layerBounds);
            marker.bindPopup(`[${Math.floor(coords.x)},${Math.floor(coords.y)}]`)
                  .openPopup();
          }); */

        // add layer control object
        /* L.control.layers({}, {
            Bounds: layerBounds,
          }).addTo(map); */


        /* L.tileLayer('./assets/img/img23/{z}/{x}/{y}.png', {
            noWrap: true,
          }).addTo(map); */
    }
  render() {
      return <div className="navigation-main" id="map" />;
    }
}
