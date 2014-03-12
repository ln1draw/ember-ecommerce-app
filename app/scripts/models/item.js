App.Item = DS.Model.extend({
  quantity: DS.attr("number"),
  item_price: DS.attr("number"),
  product: DS.belongsTo('product', {async: true}),
  subtotal: function(){
    return this.get('quantity') * this.get('item_price');
  }.property('quantity', 'item_price')
});

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    quantity: 2,
    item_price: 100
  }, {
    id: 2,
    product: 2,
    quantity: 1,
    item_price: 105
  }
]