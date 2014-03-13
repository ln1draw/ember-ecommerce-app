App.Router.map(function(){
  this.route("products", { path: "/" });
  this.resource("products", function () {
    this.resource("product", { path: ":product_id" });
  });
  this.route('cart');
  this.route('item');
  this.route('checkout');
});