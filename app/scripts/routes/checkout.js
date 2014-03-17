App.CheckoutRoute = Ember.Route.extend({
  actions:{
    purchase: function(proxy){
      // this should eventually be a real method that taps the rails API
      var sendPurchase = true;

      // the if statement should actually check the content returned
      if (sendPurchase){

        var purchase = this.store.createRecord("purchase", proxy);
        var self = this;

        purchase.save().then(function (purchase) {
          self.transitionTo('purchase', purchase.get("id"));
        }, function (error) {
          purchase.deleteRecord();
          alert(error.responseText)
        });

      } else {
        // this should pull out the actual error returned from the rails API
        alert('There was an error processing your order.');
      }
    }

    // commenting out to test something
    // purchase: function(purchase) {
    //   purchase.save().then(function(purchase){
    //     console.log(purchase);
    //   })
    // }
  },

  model: function(){
    // eli added this to allow himself to access the store in the console
    // window.elistupidstore = this.store

    // commenting the rest of this out to make sure that everything works!
    // var purchase = this.store.createRecord('purchase', {});
    // return purchase;
    return {};
  }
})