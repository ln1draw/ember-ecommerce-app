Ember.Handlebars.helper('price_quantity', function(array) {
  return array[0] * array[1] / 100;
});