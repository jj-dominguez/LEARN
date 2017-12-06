const answers= [
  "Yup!",
  "Fuhgeddaboudit",
  "Maybe",
  "Ask yourself, what would your mother do?",
  "Ask yourself, what would an Australian do, then do the opposite",
  "Your answer here."
  ];

document.getElementById("answerButton").onclick=function(){
    var answer =  answers[Math.floor(Math.random()*answers.length)];
    document.getElementById("answerContainer").innerHTML= answer;
}
