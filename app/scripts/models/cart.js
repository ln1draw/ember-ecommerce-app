App.Cart = DS.Model.extend({
  // async true will do the request to get the items automatically every time
  // you load the object
  items: DS.hasMany('item', {async: true}),
  total: function(){
    var items = this.get('items');
    var subtotals = items.map(function(item) {
      return item.get('subtotal');
    });
    var total = subtotals.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
    return total;
  }.property('items.@each.subtotal')
});

App.Cart.FIXTURES = [
  {
    id: "fixture-0"
  }
]