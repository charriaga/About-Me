`use strict`

function questionOne () {
    let question = prompt('Did Charlie go to college?');
    let answer = question.toLowerCase();

    if (answer = 'yes') {
       //  console.log('That\'s right!')
        alert('That\s right!');
    } else if (answer = 'y') {
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
    let answer = question.toLowerCase();

    if (answer = 'no') {
        // console.log('That\'s right!')
        alert('That\s right!');
    } else if (answer = 'n') {
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

    if (answer = 'no') {
       // console.log('That\'s right!')
        alert('That\s right!');
    } else if (answer = 'n') {
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
    let answer = question.toLowerCase();

    if (answer = 'yes') {
        // console.log('That\'s right!')
        alert('That\s right!');
    } else if (answer = 'y') {
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

    if (answer = 'yes') {
        //console.log('That\'s right!')
        alert('That\s right!');
    } else if (answer = 'y') {
        //console.log('That\'s right!')
        alert('That\s right!');
    } else {
         //console.log('nope')
        alert('nope.');
    }
    return question
}

function yourName() {
    let name = prompt('Heyyo, what\'s your name?');

    alert('Hello, ' + name + '!');

    document.write('Greetings, ' + name);

    return name
}
  