function keyAction(event) {
  var buttonText = event.srcElement.innerText;
  if (buttonText === 'C') {
    display = '';
    error = false;
  } else if (buttonText === '=' && !error) {
    display = checkAndEval(display);
  } else if (!error) {
    display += buttonText;
  }
  $('#screen').text(display);
}

function checkAndEval(expression) {
  var result;
  expression = expression.replace(/÷/g, '/').replace(/x/g, '*');
  try {
    result = eval(expression);
  }
  catch(err) {
    error = true;
  }
  if (error || result === Infinity || result === -Infinity) {
    result = 'Error';
  }
  return String(result);
}

var error = false;
var display = '';

$(document).ready(() => {
  $('#screen').text(display);
  $('.buttons').children().click(() => {
    keyAction(event);
  });
});
