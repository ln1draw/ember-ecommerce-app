App.ProductNewRoute = Ember.Route.extend({
  model: function () {
    return {};
  },
  
  actions: {
    createProduct: function (proxy){
      var product = this.store.createRecord("product", proxy);
      var self = this;

      product.save().then(
        function(){
          alert("Product successfully created.");
          self.transitionTo("admin");
        },
        function (error) {
          alert(error.responseText);
          product.deleteRecord();
        }
      );
    }
  }
});