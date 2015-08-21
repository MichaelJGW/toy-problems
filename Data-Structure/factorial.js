
var factorial = function(value, context){
    if(context === undefined){
        context = value;
    }
	if(context > 1){
		return factorial(value*(context-1),context-1);
	}else{
		return value;
	}
}

console.log(factorial(4));