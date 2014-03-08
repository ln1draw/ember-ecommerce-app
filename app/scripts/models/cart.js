App.Cart = DS.Model.extend({
  items: DS.hasMany("product")
})
// var CartAdapter = DS.LSAdapter.extend({});

App.Cart.FIXTURES = [{id: 1}]