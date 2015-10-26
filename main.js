var number1;
var number2;
var answer;
var operator;


// main //
document.addEventListener("DOMContentLoaded", function(event) {
    function clickHandler(event) {
    event.addEventListener("click", function() {
      document.getElementById('total').value += event.value;
    });
  };

// waiting for an event (number input), responding action with this function //
function operators(event){
  event.addEventListener('click', function() {
    number1 = Number(document.getElementById('total').value);
    document.getElementById('total').value ="";
    operator = event.value;
  })
}

clickHandler(document.getElementById('seven'));
clickHandler(document.getElementById('eight'));
clickHandler(document.getElementById('nine'));
clickHandler(document.getElementById('four'));
clickHandler(document.getElementById('five'));
clickHandler(document.getElementById('six'));
clickHandler(document.getElementById('one'));
clickHandler(document.getElementById('two'));
clickHandler(document.getElementById('three'));
clickHandler(document.getElementById('zero'));
clickHandler(document.getElementById('dec'));
operators(document.getElementById('plus'));
operators(document.getElementById('minus'));
operators(document.getElementById('divide'));
operators(document.getElementById('multiply'));

/// getting total screen to accept empty value //
  document.getElementById('clear').addEventListener('click', function(){
  document.getElementById('total').value = "";
  });

// looking for operator and second number //

document.getElementById('equals').addEventListener('click', function(){
  number2 = Number(document.getElementById('total').value);
    if (operator === '+')
    answer = number1 + number2;
    else if (operator === '-')
    answer = number1 - number2;
    else if (operator === '/')
    answer = number1 / number2;
    else if (operator === '*')
    answer = number1 * number2;

// printing answer in total screen

  document.getElementById('total').value=answer;
})


})
