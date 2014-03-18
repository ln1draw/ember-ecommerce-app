App.Item = DS.Model.extend({
  quantity: DS.attr("number"),
  item_price: DS.attr("number"),
  product_id: DS.belongsTo('product', {async: true}),
  subtotal: function(){
    return this.get('quantity') * this.get('item_price');
  }.property('quantity', 'item_price')
});