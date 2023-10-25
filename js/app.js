`use strict`

let username = prompt("Heyyo, what's your name?")

alert('Hello, ' + username + '!')


function questionOne () {
    let question = prompt('Did Charlie go to college?');
    let answer = question.toLowerCase();
    console.log(answer)
    if (answer == 'yes' || answer == 'y') {
       //  console.log('That\'s right!')
        alert('That\s right!');
    } else {
        //console.log('nope')
        alert('nope.');
    }
    return question
}


function questionTwo () {
    let question = prompt('Did Charlie work retail?');
    let answer = question.toLowerCase();

    if (answer == 'no' || answer =='n') {
        // console.log('That\'s right!')
        alert('That\s right!');
    } else {
         //console.log('nope')
        alert('nope.');
    }
    return question
}

function questionThree () {
    let question = prompt('Is Charlie\'s favorite color blue?');
    let answer = question.toLowerCase();

    if (answer == 'no' || answer == 'n') {
       // console.log('That\'s right!')
        alert('That\s right!');
    } else {
         //console.log('nope')
        alert('nope.');
    }
    return question
}

function questionFour () {
    let question = prompt('Is Charlie short?');
    let answer = question.toLowerCase();

    if (answer == 'yes' || answer == 'y') {
        // console.log('That\'s right!')
        alert('That\s right!');
    } else {
         //console.log('nope')
        alert('nope.');
    }
    return question
}

function questionFive () {
    let question = prompt('Does Charlie like Dracula?');
    let answer = question.toLowerCase();

    if (answer == 'yes' || answer == 'y') {
        //console.log('That\'s right!')
        alert('That\s right!');
    } else {
         //console.log('nope')
        alert('nope.');
    }
    return question
}

function questionSix() {
     for (i = 0; i < 6; i++) {
        let questionString = prompt('How old is Charlie?')
        let questionNumber = parseInt(questionString)

         if (questionNumber !== 25) {
            if (questionNumber < 25) {
                alert('Too low!');
            } else {
                alert('Too high!');
            }
         } else {
            alert('Correct!')
            i = 6
         }
    }
    alert('Charlie is 25')

    return questionNumber

}

function questionSeven() {
    let hobbies = ['drawing', 'reading', 'writing', 'cooking']

    for (let i = 0; i < 6; i++) {
      
        let myHobbies = prompt('What are Charlie\'s hobbies?')
        console.log(myHobbies)
        console.log(myHobbies, hobbies[0])
        if (hobbies.includes(myHobbies)) {
            alert("That's right!")
            i = 6
        } else {
            alert('nope!')
        }


        // if (myHobbies !== hobbies[0] || myHobbies !== hobbies[1] || myHobbies !== hobbies[2] || myHobbies !== hobbies[3] ) {
        //     alert('Nope!');
        // } else {
        //     alert('That\'s right!');
        //     i = 6
        // }
    }
}

function farewell () {
    alert ('Thank you for answering my questions, ' + name + ' :)')
}

function greetings () {
    document.write('Salutations ' + name + '!')
}
  