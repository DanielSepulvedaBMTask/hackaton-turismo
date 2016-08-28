import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

 
import './body.html';
import './map.js';

Meteor.startup(() => {
  GoogleMaps.load();
})


Template.body.events({
  
});