App.ProductNewRoute = Ember.Route.extend({
  model: function () {
    return proxy = Ember.ObjectProxy.create({
      name: 'In Progress',
      description: null,
      price: null,
      avatar: null,
      image: null
    });
    // return this.store.createRecord("product")
  },
  actions: {
    createProduct: function (proxy) {
      newProduct = proxy.set('content', {
        name: proxy.name,
        description: proxy.description,
        price: proxy.price
      });
      newProduct.save;
    }
  }
})