
// Module
function myModule() {
  this.hello = function() {
    return 'hello';
  }

  this.goodbye = function() {
    return 'goodbye';
  }
}

export default myModule

// app.js
import myModule from 'myModule'

const myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodbye();