let readlineSync = require('readline-sync');

console.log('Jarvis: What is your Name?');
let userName = readlineSync.question('You: ');

console.log('\nJarvis: Hello',userName, '\b, Welcome to Marvel Quiz Gam? (A Fun-Quiz Game.)');

let score = 0
console.log('Initial Score:', score);

console.log('\n:RULES:\n1. Right Answer will increase 2 Marks and Worng Answer will deducte 1 Mark.\n2. Case Sensitive Input.\n3. These are Multiple Choice Question Only Answer in a b c d');

function quiz(question, answer) {
    console.log('\nJarvis:', question);
    let userAnswer = readlineSync.question(userName + ': ');
    if (userAnswer === answer){
        score = score + 2;
        console.log('Bravo!!!', userName,'\b, Right Answer \nNew Score:', score);
    } else{
        score--;
        console.log('Oops!!! Worng Answer\nNew Score:', score);
    }
}

let questionList = [
    {
        question: 'Find which character is not in Marvel?\n\ta). Ironman.\n\tb). Captain America.\n\tc). Batman\n\td). Thor',
        answer: 'c'
    },
    {
        question: 'Which metal used to make Captain America\'s Shield?\n\ta). Adamantium.\n\tb). Vibranium\n\tc). Iron-Alloy.\n\td). Steel',
        answer: 'b'
    },
    {
        question: 'Who was Black Panther?\n\ta). Peter Quill.\n\tb). Steve Rogers.\n\tc). Peter Parker.\n\td). T\'Challa.',
        answer: 'd'
    },
    {
        question: 'Who was Bucky Bans?\n\ta). Steve Roger\'s Friend\n\tb). Bruce Banner\'s Cousin.\n\tc). Natasha Romonoff\'s Husband\n\td). King of Wakanda ',
        answer: 'a'
    },
    {
        question: 'Who Cut Nicholas Joseph Fury\'s Eye?\n\ta). Goose\n\tb). Skrullz\n\tc). Thanos\n\td). Loki',
        answer: 'a'
    }
]

for (let i=0; i<questionList.length; i++){
    quiz(questionList[i].question, questionList[i].answer)
    console.log('-----------------------------------------------------------------------');
}

let highScore = [
    {
        name: 'Arpit',
        score: 10
    },
    {
        name: 'Nitin',
        score: 7
    },
]

if (score < 8){
    console.log('\nYour Final Score is:', score, 'Out of 10');
    console.log('Sorry, You are not a True Fan');
} else{
    console.log('\nYour Final Score is:', score, 'Out of 10');
    console.log('Amazing,', userName, 'You are really a True Fan of Marvel Cinematic Universe.');
}

console.log('\n:Scoreboard:');
for (let i=0; i<highScore.length; i++){
    console.log(highScore[i].name+':', highScore[i].score);
}
console.log(userName+':', score, '\n');