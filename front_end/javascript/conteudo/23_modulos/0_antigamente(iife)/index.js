//(IIFE)

var myGradesCalculate = (function () {
  // variable private inside this closure scope
  var myGrades = [93, 95, 88, 0, 55, 91];

  var average = function () {
    var total = myGrades.reduce((accumulator, valor) => {
      return accumulator + valor;
    }, 0);

    return `your average grade is ${total / myGrades.length}.`;
  };

  var failing = function() {
    var failingGrades = myGrades.filter((valor) => {
      return valor <70;
    });

    return `You failed ${failingGrades.length} times.`
  };

  return {
    average: average,
    failing: failing
  }
})();
