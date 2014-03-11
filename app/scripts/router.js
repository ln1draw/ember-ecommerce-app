App.Router.map(function(){
  this.route("items", { path: "/" });
  this.resource("items", function () {
    this.resource("item", { path: ":item_id" });
  });
  this.route('cart');
});