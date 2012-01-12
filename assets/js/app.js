// ***************************************************************
// Main application
// ***************************************************************

var StationStatus = Backbone.Model.extend({
  defaults: {
    "nombre" : "",
    "estado" : "closed",
    "cant_bicis" : 0
  }
});

var StationStatusList = Backbone.Collection.extend({
  model: StationStatus,
  url: 'https://api.scraperwiki.com/api/1.0/datastore/sqlite?format=jsondict&name=estado_bicicletas_ciudad_de_buenos_aires&query=select%20*%20from%20%60swdata%60%20limit%2030'
});



var App = {
  stationStatus :  new StationStatusList(),

  init : function() {
    // fetch stations with API
    this.stationStatus.fetch();
  }
};

// vim: se ts=2 sw=2 si expandtab:
