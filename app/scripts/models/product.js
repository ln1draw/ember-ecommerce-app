App.Product = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("number"),
  image: DS.attr("string"),
  avatar: DS.attr("string"),
  description: DS.attr("string"),
  item: DS.hasMany('item', {async: true})
});