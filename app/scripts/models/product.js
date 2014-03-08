App.Product = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  image: DS.attr("string"),
  avatar: DS.attr("string"),
  cents: DS.attr("number")
});

App.Product.FIXTURES = [
  {
    id: 1,
    name: "Gum",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "http://placekitten.com/g/800/600",
    avatar: "http://placekitten.com/g/100/100",
    cents: 199
  },
  {
    id: 2,
    name: "Shoe",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "http://placekitten.com/800/600",
    avatar: "http://placekitten.com/100/100",
    cents: 7999
  }
]