App.Product = DS.Model.extend({
  name: DS.attr("string")
})

Product.FIXTURES = [
  {
    id: 1,
    name: "Gum"
  }
]