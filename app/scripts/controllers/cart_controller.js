App.CartController = Ember.ObjectController.extend({
  return this.store.find('items').property();
});