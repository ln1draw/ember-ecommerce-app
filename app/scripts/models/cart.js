App.Cart = DS.Model.extend({
  items: DS.hasMany('item')
});