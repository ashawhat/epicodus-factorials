var bottlesOfBeer = function(number) {
  console.log(number + " bottle of beer on the wall...");
  if(number > 0) {
    bottlesOfBeer(number - 1);

  }
};
var factorialFinder = function(number) {
  if(number == 0) {
      return 1;
  } else if (number < 1 && number > 0) {
      return "NO Way!";
  }  else if (number < 0) {
      return "Are you Kidding me?!";
  } else if (number > 0){
      return number * factorialFinder(number - 1);

  }
};



// var factorialFinder = function(number) {
//   if (number < 0) {
//     return "Are you Kidding me?!";
//   }
//   else if (number === 0) {
//     return 1;
//   }
//   else if (number < 1 && number > 0) {
//     return "NO Way!";
//   }

//   var tempNumber = number;
//   while (number-- > 2) {
//     tempNumber = tempNumber * number;
//     console.log(tempNumber);
//   }
//   return tempNumber;
// }

$(document).ready(function() {

  $("form#number").submit(function(event) {

    var userInput = $("input#number").val();
    var result = factorialFinder(userInput);
    if (isNaN(result)){
      $("p#showNumber").text("That is not a whole number!");
    }else{

    $("p#showNumber").text(result);
  }
    event.preventDefault();
  })
})

  // for (var i=1; i<=number; i++) {
  //   var newNumber = number * i;

  //   console.log(newNumber);

    // ((((var nextNewNumber = newNumber * i;))))

    // nextNewNumber


  //   console.log(nextNewNumber);






