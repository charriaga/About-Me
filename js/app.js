`use strict`

function questionOne () {
    let question = prompt('Did Charlie go to college?');
    question.toLowerCase();

    if (question = 'yes') {
       //  console.log('That\'s right!')
        alert('That\s right!');
    } else if (question = 'y') {
        //console.log('That\'s right!')
        alert('That\s right!');
    } else {
        //console.log('nope')
        alert('nope.');
    }
    return question
}

function questionTwo () {
    let question = prompt('Did Charlie work retail?');
    question.toLowerCase();

    if (question = 'no') {
        // console.log('That\'s right!')
        alert('That\s right!');
    } else if (question = 'n') {
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
    question.toLowerCase();

    if (question = 'no') {
       // console.log('That\'s right!')
        alert('That\s right!');
    } else if (question = 'n') {
        //console.log('That\'s right!')
        alert('That\s right!');
    } else {
         //console.log('nope')
        alert('nope.');
    }
    return question
}

function questionFour () {
    let question = prompt('Is Charlie short?');
    question.toLowerCase();

    if (question = 'yes') {
        // console.log('That\'s right!')
        alert('That\s right!');
    } else if (question = 'y') {
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
    question.toLowerCase();

    if (question = 'yes') {
        //console.log('That\'s right!')
        alert('That\s right!');
    } else if (question = 'y') {
        //console.log('That\'s right!')
        alert('That\s right!');
    } else {
         //console.log('nope')
        alert('nope.');
    }
    return question
}

function name () {
    let name = prompt('Heyyo, what\'s your name?');

    while (name = '') {
        prompt('your name please?');
    }

    alert('Hello, ' + name + '!');

    document.write('Greetings, ' + name);

    return name
}

function farewell () {
    
}
  