`use strict`

let name = prompt("Heyyo, what's your name?")

alert('Hello, ' + name + '!')


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

function farewell () {
    alert ('Thank you for answering my questions, ' + name + ' :)')
}

function greetings () {
    document.write('Salutations ' + name + '!')
}
  