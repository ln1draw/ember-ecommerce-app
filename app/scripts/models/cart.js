App.Cart = DS.Model.extend({
  // async true will do the request to get the items automatically every time
  // you load the object
  items: DS.hasMany('item', {async: true})
});

App.Cart.FIXTURES = [
  {
    id: 1
  }
]