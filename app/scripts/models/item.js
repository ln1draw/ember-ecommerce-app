App.Item = DS.Model.extend({
  quantity: DS.attr("number"),
  item_price: DS.attr("number"),
  product: DS.belongsTo('product', {async: true}),
  cart: DS.belongsTo('cart', {async: true}),
  subtotal: function(){
    return this.get('quantity') * this.get('item_price');
  }.property('quantity', 'item_price')
});