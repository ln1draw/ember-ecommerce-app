App.Router.map(function(){
  this.route("home", { path: "/" });
  this.resource("items", function () {
    this.resource("item", { path: ":item_id" });
  });
  this.resource('cart');
});