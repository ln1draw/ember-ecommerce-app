App.Cart = DS.Model.extend({
  items: DS.hasMany("product", {async: true})
})
// var CartAdapter = DS.LSAdapter.extend({});

App.Cart.FIXTURES = [{id: 1, items: [1]}]