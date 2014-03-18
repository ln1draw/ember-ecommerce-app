App.Router.map(function(){
  this.route("products", { path: "/" });
  this.resource("products", function () {
    this.resource("product", { path: ":product_id" });
  });
  this.route('cart');
  this.route('item');
  this.route('checkout');
  this.resource('purchase', {path: ":purchase_id"});
  this.resource('admin', function(){
    this.resource('productNew');
    this.resource('productEdit', {path: ":product_id"});
  });
});