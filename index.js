var readlineSync = require('readline-sync');
const chalk = require('chalk');
var name = readlineSync.question("Enter your name : ");
console.log("Welcome "+name+" to HERA PHERI QUIZ?");
console.log("Hera Pheri is a 2000 Bollywood comedy film.This is a quiz based on the same.\nType the option name (a,b,c,d) and press Enter to play this quiz game.\n------Lets Begin------\n")
var score = 0;
// play function

function play(quest, ans) {
  var userAnswer = readlineSync.question(quest);

  if(userAnswer.toUpperCase() === ans.toUpperCase()) {
    console.log(chalk.greenBright("Right!"));
    score = score + 10;
  } else {
    console.log(chalk.redBright("Wrong!"));
  }
  console.log("Current score: ", score);
  console.log("---------------");
}

// array of objects
var qna = [
  {
  question: "What was the Full Form of Raju's Degree ITUS according to Shyam \n a.International Talent of Ultimate Student \n b.International Talent of Unique Student \n c.Iski Toopi Uske Sar \n",
  answer: 'c'
  }
,{
  question:"What is Kabira's opening line on Phone?  \n a. Kabira's here \n b. Kabira Speaking \n c. Hello Kaun \n d. Hum bol rhe \n",
  answer: 'b'
  },
  {
  question: "What was the name of Om Puri's character in Hera Pheri?\n a.Karam Singh\n b.Dilip Singh\n c.Kharak Singh\n d.Charak Singh\n",
  answer: 'c'
},{
  question: "What did Devi Prasad own?\n a.Star Hotels\n b.Star Garage\n c.Star Fisheries\n d.Star Computers\n",
  answer: 'c'
},{
  question: "What is the second installment of Hera Pheri titled?\n a. Hera Pheri 2\n b.Phir Hera Pheri\n c.Hera Pheri Again\n d.Hera Pheri Dobara\n",
  answer: 'b'
},{
  question: "Which song does Shyam hear when he is about the sign a blank paper?\n a.O beta ji O babu ji\n b.Hum the woh thi aur sama rangin\n c.Golmal hai bhai sab golmal hai\n d.Jab koi baat bigad jaye\n",
  answer: "c"
}]

// loop
for (var i=0; i<qna.length; i++) {
  var currentQuestion = qna[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.bgBlue("Final Score = "+ score));
console.log(chalk.greenBright("Zor Zor se bolke sabko score bata do"))
