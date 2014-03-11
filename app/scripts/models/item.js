App.Item = DS.Model.extend({
  quantity: DS.attr("integer"),
  product: DS.belongsTo('product', {async: true})
});

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    quantity: 2
  }
]