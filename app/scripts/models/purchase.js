App.Purchase = DS.Model.extend({
  name: DS.attr("string"),
  email: DS.attr("string"),
  credit_card_number: DS.attr("number"),
  cvv: DS.attr("number"),
  expiration: DS.attr("date"),
  address: DS.attr("string"),
  zip: DS.attr("number"),
  cart: DS.belongsTo('cart', {async: true})
});
