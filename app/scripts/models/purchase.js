App.Purchase = DS.Model.extend({
  name: DS.attr("string"),
  item: DS.hasMany('item', {async: true})
});
App.Purchase.FIXTURES = []