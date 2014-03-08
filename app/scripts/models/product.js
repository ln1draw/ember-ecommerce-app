App.Product = DS.Model.extend({
  name: DS.attr("string")
});

App.Product.FIXTURES = [
  {
    id: 1,
    name: "Gum"
  },
  {
    id: 2,
    name: "Shoe"
  }
]