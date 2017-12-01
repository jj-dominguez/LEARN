// Magic 8 Ball Challenge
// Authors: Jordan Dominguez && scott h farris
// November 30, 2017

const answers= [
  "Yup!",
  "Fuhgeddaboudit",
  "Maybe",
  "Ask: what would your mother do?",
  "Ask: what would an Australian do, then do the opposite",
  "Your answer here."
  ];

function magic8Ball() {
  let userQuestion = prompt("Ask your question...");
  let userAnswer = answers[Math.floor(Math.random()*5)];
  alert(userQuestion+" "+userAnswer);
}
