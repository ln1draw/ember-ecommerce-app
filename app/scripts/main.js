var App = Ember.Application.create({});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.ProductsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("product");
  }
})