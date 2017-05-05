function keyAction(event) {
  var buttonText = event.srcElement.innerText;
  if      (buttonText === 'C') { buffer = '0' }
  else if (buttonText === '÷') { buffer += '/' }
  else if (buttonText === 'x') { buffer += '*' }
  else if (buttonText === '-') { buffer += '-' }
  else if (buttonText === '+') { buffer += '+' }
  else if (buttonText === '=') { buffer = eval(buffer) }
  else {
    // a number key was clicked
    if (buffer === '0') {
      buffer = '';
    }
    buffer += buttonText;
  }
  $('#screen').text(buffer);
}

var buffer = '0';

$(document).ready(() => {
  $('#screen').text(buffer);
  $('.buttons').children().click(() => {
    keyAction(event);
  });
});
