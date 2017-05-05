function keyAction(event) {
  var buttonText = event.srcElement.innerText;
  if (buttonText === 'C') {
    error = false;
    expression = '0';
  } else if (buttonText === '÷' && !error) {
    expression += '/';
  } else if (buttonText === 'x' && !error) {
    expression += '*';
  } else if (buttonText === '-' && !error) {
    expression += '-';
  } else if (buttonText === '+' && !error) {
    expression += '+';
  } else if (buttonText === '=' && !error) {
    expression = String(checkAndEval(expression));
  } else if (!error) {
    // a number key was clicked
    if (expression === '0') {
      expression = '';
    }
    expression += buttonText;
  }
  console.log(typeof expression);
  display = expression.replace(/\//, '÷');
  // .replace(/\*/, 'x');
  $('#screen').text(display);
}

function checkAndEval(expression) {
  var result;
  try {
    result = eval(expression);
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
var display = expression;

$(document).ready(() => {
  $('#screen').text(display);
  $('.buttons').children().click(() => {
    keyAction(event);
  });
});
