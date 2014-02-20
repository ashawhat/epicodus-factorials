var factorialFinder = function(number) {
  if(number <0) {
    return false;
  }
  else if(number == 0) {
    return 1;
  }

  var tempNumber = number;
  while (number-- > 2) {
    tempNumber = tempNumber * number;
    console.log(tempNumber);
  }
  return tempNumber
}

  // for (var i=1; i<=number; i++) {
  //   var newNumber = number * i;

  //   console.log(newNumber);

    // ((((var nextNewNumber = newNumber * i;))))

    // nextNewNumber


  //   console.log(nextNewNumber);






