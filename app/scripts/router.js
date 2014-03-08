App.Router.map(function(){
  this.resource("cart");
  this.resource("products", function () {
    this.resource("product", { path: ":product_id" });
  });
});