var App = Ember.Application.create({});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Product = DS.Model.extend({
  name: DS.attr("string")
})

App.Product.FIXTURES = [
  {
    id: 1,
    name: "Gum"
  }
]

App.ProductsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("product");
  }
})