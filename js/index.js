function keyAction(event) {
  var buttonText = event.srcElement.innerText;
  if (buttonText === 'C') {
    error = false;
    expression = '0';
    display = '0';
  } else if (buttonText === '÷' && !error) {
    expression += '/';
    display += '÷';
  } else if (buttonText === 'x' && !error) {
    expression += '*';
    display += 'x';
  } else if (buttonText === '-' && !error) {
    expression += '-';
    display += '-';
  } else if (buttonText === '+' && !error) {
    expression += '+';
    display += '+';
  } else if (buttonText === '=' && !error) {
    expression = checkAndEval(expression);
    display = expression;
  } else if (!error) {
    // a number key was clicked
    if (expression === '0') {
      expression = '';
      display = '';
    }
    expression += buttonText;
    display += buttonText;
  }
  $('#screen').text(display);
}

function checkAndEval(exp) {
  var result;
  try {
    result = eval(exp);
  }
  catch(err) {
    error = true;
  }
  if (error) {
    result = 'Error';
  }
  return result;
}

var error = false;
var expression = '0';
var display = '0';

$(document).ready(() => {
  $('#screen').text(display);
  $('.buttons').children().click(() => {
    keyAction(event);
  });
});
