// myModule.js

function myModule() {

  this.hello = function() {return 'hello'}
  this.goodbye = function() {return 'goodbye'}
}

myModule.exports = myModule;

//app.js
var myModule = require('myModule');

var myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodbye();