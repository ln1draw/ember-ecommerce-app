App.CheckoutRoute = Ember.Route.extend({
  actions:{
    purchase: function(purchase) {
      purchase.save().then(function(purchase){
        console.log(purchase);
      })
    }
  },

  model: function(){
    window.elistupidstore = this.store
    var purchase = this.store.createRecord('purchase', {});
    return purchase;
  }
})