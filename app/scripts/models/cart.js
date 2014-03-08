App.Cart = DS.Model.extend({
  items: DS.hasMany("item", {async: true}),
  cents: function () {
    return this.get("items").reduce(function (value, item, index) {
      return value += item.get("cents")
    }, 0)
  }.property("items.@each.cents")
})
// var CartAdapter = DS.LSAdapter.extend({});

App.Cart.FIXTURES = [{id: 1, items: [1]}]