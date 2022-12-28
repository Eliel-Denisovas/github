// Module
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    //amd
    define(['myModule', 'myOtherModule'], factory);
  } else if (typeof exports === 'object') {
    //CommonsJS
    module.exports = factory(require('myModule'), require('myOtherModule'));
  } else {
    // Browser globals (note: root is windows)
    root.returnExports = factory(root.myModule, root.myOtherModule);
  }
}(this, function (myModule, myOtherModule) {
  // Methods
  function notHelloOrGoodbye() {}; // A private method
  function hello(){}; // A public method because it's returned (see below)
  function goodbye(){}; // A public method because it's returned (see below)

  // Exposed public methods
  return {
    hello: hello,
    goodbye: goodbye
  }

}));