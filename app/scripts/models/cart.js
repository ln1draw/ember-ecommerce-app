App.Cart = DS.Model.extend({
  items: DS.hasMany("item", {async: true})
})
// var CartAdapter = DS.LSAdapter.extend({});