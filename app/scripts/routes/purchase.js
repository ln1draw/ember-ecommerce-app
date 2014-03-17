App.PurchaseRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("purchase", params.purchase_id);
  }
})