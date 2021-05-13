const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName;
//let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
//should correct answer require capital S R?
let correctAnswer = "Sally Ride";
let candidateAnswer = ""; 
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5000 meters === 5 kilometer. ", "3) (5+3)/2 * 10 = ? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function runProgram() {
  // TODO 1.1c: write a message to the console greeting the user using the name they just provided.
  //askForName();
  console.log(`\nWelcome to your Initial Evaluation ${askForName()}\n`);
  askQuestion();
  console.log(`\nCandidate Name: ${candidateName}`);
  gradeQuiz(this.candidateAnswers);
}

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
return candidateName = input.question("What is your first and last name?: ");
}

// TODO 2: modify your quiz app to ask 5 questions //
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
  //2.	Replace your code from TODO 1.2b with a loop that programmatically asks each question in the array and stores the user's responses. Use unshift or push 
//Question 1:
//return candidateAnswer = input.question(question);
//Question 1-5:
for (i = 0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i])
  //candidateAnswers = candidateAnswers[i]  
  //candidateAnswers += input.question(question[i]);
  //return candidateAnswers = input.question(questions);
}
  return candidateAnswers[i];
}

function gradeQuiz(candidateAnswers) {
  let grade;
  let numberOfQuizQuestions = Number(questions.length);
  let numberOfCorrectAnswers = 0;
  let status = "";
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly /

// if (correctAnswer && candidateAnswer === "Sally Ride"){
// //if correctAnswers[i] same as candidateAnswers[i] 
// if (correctAnswers[i] === candidateAnswers[i]){
//   console.log("Correct!")
// }else{
//   console.log("Incorrect. Please try again.")
// }

// Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate's responses in addition to the corresponding correct answers.
for (i = 0; i < questions.length; i++) {
gradedReport = console.log(`${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`)
  if (correctAnswers[i].toUpperCase() === candidateAnswers[i].toUpperCase()){
  numberOfCorrectAnswers += 1;
  }
}

//let numberOfCorrectAnswers = numberOfAnswers
let overAllGrade = Number((numberOfCorrectAnswers/numberOfQuizQuestions)*100);
console.log(overAllGrade)
if (overAllGrade >= 80){
  status = "Congratulations! You passed the Initial Evaluation!"
} else {
  status = "Sorry, review your answers with the correct answers and try again next cycle."
}


let finalGrade = console.log(`>>> Overall Grade: ${overAllGrade}% (${numberOfCorrectAnswers} of ${numberOfQuizQuestions} responses correct) <<<\n>>> Status: ${status} <<<`);
grade = (gradedReport + finalGrade)
// }
  return grade;
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};