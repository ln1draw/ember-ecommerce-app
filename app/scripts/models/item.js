App.Item = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("integer"),
  image: DS.attr("string"),
  avatar: DS.attr("string"),
  description: DS.attr("string"),
  cart: DS.belongsTo('cart')
});

App.Item.FIXTURES = [
  {
    id: 1,
    name: "Tweet from Kathy",
    image: "http://placekitten.com/800/600",
    avatar: "http://placekitten.com/50/50",
    description: "A tweet from real live robot Kathy!",
    price: 100
  }, {
    id: 2,
    name: "Tweet from Noah",
    image: "http://www.placecage.com/800/600",
    avatar: "http://www.placecage.com/50/50",
    description: "A tweet from real live robot Noah!",
    price: 105
  }
]