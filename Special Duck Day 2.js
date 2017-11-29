// What number's bigger?
function greaterNum(a,b) {
  if (a > b){
    return a;
  } else if (a == b){
    return "they are the same";
  } else {
    return b;
  }
}

console.log(greaterNum(3,5));

// The World Translator
function helloWorld (lang) {
  if (lang == "es") {
    return "hola, world";
  } else if (lang=="dutch") {
    return "dutch, world";
  } else {
    return ("Hello, World");
  }
}

console.log(helloWorld("es"));
console.log(helloWorld("dutch"));
console.log(helloWorld("en"));

// The Grade Assigner
function assignGrade(score) {
  if (score > 100) {
    return "error";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(assignGrade(110));
console.log(assignGrade(100));
console.log(assignGrade(91));
console.log(assignGrade(85));
console.log(assignGrade(70));
console.log(assignGrade(20));


// The Pluralizer
function pluralize(noun,number){
  if (number === 1){
    return number + " " + noun;
  } else{
    return number + " " + noun + "s";
  }
}

console.log(pluralize("dog",4));
console.log(pluralize("duck",3));
console.log(pluralize("cat",1));

//Odd and Even
function oddAndEven(a){
  if (a%2 == 0){
    return a+" is an even number";
  } else {
    return a+" is an odd number";
  }
}

var number = 0;
while (number < 16) {
  console.log(oddAndEven(number));
  number ++
}


//The Fizz Buzz
function fizzBuzz(num){
  if ((num % 3 == 0) && (num % 5 == 0)) {
    return ("FizzBuzz");
  } else if (num % 3==0) {
    return ("Fizz");
  } else if (num % 5==0) {
    return ("Buzz");
  } else {
    return num;
  }
}

var number = 0;

while (number < 101) {
  console.log(fizzBuzz(number));
  number ++;
}


// hi/lo game w/ do while loop
function numGame() {
  var number = Math.floor(Math.random() * 100);
  var guesses = 0;
  console.log(number);
  do{
    var ask = parseInt(prompt("GUESS A NUMBER"));
    if (ask === number) {
      alert("winner winner--ducky dinner");
      //end game
    } else if (ask < number) {
      alert("too low");
    } else {
      alert("too high");
      }
    }
  while (ask != number);
}

// hi/lo game w/ if/else and recursive function
function numGame() {
  var number = Math.floor(Math.random() * 100);
  var guesses = 0;
  console.log(number);
  console.log(guesses);
  function guessNum() {
    do{
      var ask = parseInt(prompt("GUESS A NUMBER"));
      console.log(guesses);
      if (ask === number) {
      alert("winner winner--ducky dinner");
      //end game
    } else if (ask < number) {
      alert("too low");
      guesses ++;
      guessNum();
    } else {
      alert("too high");
      guesses ++;
      guessNum();
      }
    }
  while (guesses < 8);
  }
  guessNum();
}


// hi/lo game w/ do while loop (if prompt not a number)
function numGame() {
  var number = Math.floor(Math.random() * 100);
  var guesses = 7;
  var name = prompt("What is your name?");
  console.log(number);
    do {
      do{
          var ask = parseInt(prompt("GUESS A NUMBER"));
          if (ask === number) {
            alert("winner winner--ducky dinner for " + name);

            guesses = 0;
            //end game
          } else if (ask < number) {
            alert("too low");
            guesses --;
            alert("Guesses Left: " + guesses);
          } else {
            alert("too high");
            guesses --;
            alert("Guesses Left: " + guesses);
            }
            if (guesses === 0) {
              alert ("Gameover " + name);
              break;
            }
          }
      while (ask != number);
    }
    while (guesses != 0);  7
}
