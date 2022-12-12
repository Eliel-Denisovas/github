function f1(callback) {
  setTimeout(function() {
    console.log('Primeira função');
    if (callback) {callback()}
  }, 4000)
  
}
function f2(callback) {
  setTimeout(function() {
    console.log('Segunda função');
    if (callback) {callback()}
  }, 3000)
  
}
function f3(callback) {
  setTimeout(function() {
    console.log('terceira função');
    if (callback) {callback()}
  }, 2000)
  
}
function f4(callback) {
  setTimeout(function() {
    console.log('quarta função');
    if (callback) {callback()}
  }, 1000)
  
}

/* f1(function() {
  f2(function() {
    f3(function() {
      f4();
    });
  });
});  */

f1(f1callback);

function f1callback() {
  f2(f2callback);
}

function f2callback() {
  f3(f3callback);
}

function f3callback(){
  f4()
}