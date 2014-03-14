App.CheckoutRoute = Ember.Route.extend({
  actions:{
    purchase: function(purchase) {
      purchase.save();
      console.log(this.store.findAll('purchase'));
    }
  },

  model: function(){
    window.elistupidstore = this.store
    var purchase = this.store.createRecord('purchase', {});
    return purchase;
  }
})