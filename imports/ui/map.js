import { Template } from 'meteor/templating';

import './map.html';

Template.map.onCreated(function () {

  GoogleMaps.ready('exampleMap', function (map) {

    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });

  });

});
 
Template.map.helpers({
  exampleMapOptions: function () {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      }
    }
  }
});