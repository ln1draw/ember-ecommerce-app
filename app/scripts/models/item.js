App.Item = DS.Model.extend({
  product: DS.belongsTo("product", {async: true}),
  cart: DS.belongsTo("cart", {async: true})
})
// var CartAdapter = DS.LSAdapter.extend({});