var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());

		if (isNaN(number1) || isNaN(number2)) {
			var result = "One or both input values are not a number."
		} else if ($("input:radio[name=operator]:checked").val() === "add") {
				var result = add(number1, number2);
		} else if ($("input:radio[name=operator]:checked").val() === "subtract") {
			var result = subtract(number1, number2);
		} else if ($("input:radio[name=operator]:checked").val() === "multiply") {
			var result = multiply(number1, number2);
		} else if ($("input:radio[name=operator]:checked").val() === "divide") {
		var result = divide(number1, number2);
	}
  $("#output").empty().append(result);
  });
});
