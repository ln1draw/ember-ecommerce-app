App.Router.map(function(){
  this.resource("products", function () {
    this.resource("product", { path: ":product_id" });
  });
});