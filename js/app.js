`use strict`

let username = prompt("Heyyo, what's your name?")

alert('Hello, ' + username + '!')

let totalCorrect = 0;

let questionOne = ['Did Charlie go to college?', 'yes', 'y'];
let questionTwo = ['Did Charlie work retail?', 'no', 'n'];
let questionThree = ['Is Charlie\'s favorite color blue?', 'no', 'n'];
let questionFour = ['Is Charlie short?', 'yes', 'y'];
let questionFive = ['Does Charlie like Dracula?', 'yes', 'y'];

function askQuestion (question) {
    let response = prompt(question[0]);
    console.log(response);

    if (response.toLowerCase() === question[1] || response.toLowerCase() === question[2]) {
        console.log('That\'s right!');
        alert('That\'s right!');
        totalCorrect += 1;
    } else {
        console.log('nope');
        alert('nope.');
    }

}

let questionHolder = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for (let i = 0; i < 5; i += 1 ) {
    askQuestion(questionHolder[i]);
}


/*
    let questionTwo = prompt('Did Charlie work retail?');

    if (questionTwo.toLowerCase() == 'no' || questionTwo.toLowerCase() =='n') {
        console.log('That\'s right!')
        alert('That\'s right!');
        totalCorrect += 1;
    } else {
         console.log('nope')
        alert('nope.');
    }


    let questionThree = prompt('Is Charlie\'s favorite color blue?');

    if (questionThree.toLowerCase() == 'no' || questionThree.toLowerCase() == 'n') {
       console.log('That\'s right!')
        alert('That\'s right!');
        totalCorrect += 1;
    } else {
         console.log('nope')
        alert('nope.');
    }


    let questionFour = prompt('Is Charlie short?');

    if (questionFour.toLowerCase() == 'yes' || questionFour.toLowerCase() == 'y') {
        console.log('That\'s right!')
        alert('That\'s right!');
        totalCorrect += 1;
    } else {
         console.log('nope')
        alert('nope.');
    }


    let questionFive = prompt('Does Charlie like Dracula?');

    if (questionFive.toLowerCase() == 'yes' || questionFive.toLowerCase() == 'y') {
        console.log('That\'s right!')
        alert('That\'s right!');
        totalCorrect += 1;
    } else {
         console.log('nope')
        alert('nope.');
    }
*/

     for (let i = 0; i < 6; i++) {
        let questionString = prompt('How old is Charlie?')
        let questionNumber = parseInt(questionString)

         if (questionNumber !== 25) {
            if (questionNumber < 25) {
                alert('Too low!');
            } else {
                alert('Too high!');
            }
         } else {
            alert('Correct!');
            i = 6;
            totalCorrect += 1;
         }
    }
    alert('Charlie is 25')




let hobbies = ['drawing', 'reading', 'writing', 'cooking']

for (i = 0; i < 6; i++) {
      
    let myHobbies = prompt('What are Charlie\'s hobbies?')
    console.log(myHobbies)
    //console.log(myHobbies, hobbies[0])
    if (hobbies.includes(myHobbies)) {
         alert("That's right!");
         i = 6;
         totalCorrect += 1;
    } else {
         alert('nope!');
    }


        // if (myHobbies !== hobbies[0] || myHobbies !== hobbies[1] || myHobbies !== hobbies[2] || myHobbies !== hobbies[3] ) {
        //     alert('Nope!');
        // } else {
        //     alert('That\'s right!');
        //     i = 6
        // }
    }

alert('You got ' + totalCorrect + ' out of 7 answers correct!');

function farewell () {
    alert ('Thank you for answering my questions, ' + username + ' :)');
}

function greetings () {
    document.write('Salutations ' + username + '!');
}
