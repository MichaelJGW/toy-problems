/*
	reverse order of strings and arrays

	example 1

	input -> 'text'
	output -> 'txet'

	example 2

	input -> [1,2,3]
	output -> [3,2,1]

	example 3

	input -> ['happy', 'hacking']
	output -> ['gnikcah', 'yppah']
*/ 

var text = 'happy hacking';
var array = [1,2,3];
var textInArray = ['happy', 'hacking'];

var reverse = function(input){
	if(input.length === 1){
		return input;
	}
	if(typeof input === 'string'){
		var isString = true;
		input = input.split('');
	}
	for (var index = 0; index < input.length/2; index++) {
		var holder = input[index];
		input[index] = reverse(input[input.length-1-index]);
		input[input.length-1-index] = reverse(holder);
	};
	if(input.length%2 === 1){
		var index = Math.round(input.length/2);
		input[index] = reverse(input[index]);
		input[index-1] = reverse(input[index-1]);
	}
	if(isString){
		input = input.join('');
	}
	return input;
}

console.log(reverse('text'));
console.log(reverse([1,2,3]));
console.log(reverse(['happy', 'hacking']));

	/*

		[1,2,3]
		loop through the array
		 length is 3 and index is 0
		 swap array[index] and array[length-1-index];
		break loop when index is half of length

	*/