var App = Ember.Application.create({});

App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.extend({
    host: "http://localhost:3000"
  })
});
