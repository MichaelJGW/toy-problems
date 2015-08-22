/*
The number the size is needs to be the number of queens on the board before an answer is offered

We should not have to worry about clearing the board as we can overwrite and avoid previous answers
grid of four
first round = no answer
[0,,,]
[,,0,]
[,,,]
[,0,,]
round two we dont erase the board we just place 1 not 0 and check for 1s
[0,1,,]
[,,0,1]
[1,,,]
[,0,1,]
answer is found add one to counter and move on to number 2


For collision I was doing a grid and while I was white boarding it I found something odd
you don't need a grid you can just you coordinates and the posscessing is easier this way.
[0,0][0,1] collide and the x coords match.
*/


var nQueens  = function(size){
	var grid = [];
	var counter = 0;
	var collisionCheck = function(value){
		//value should be something like [0,3];
		for (var index = 0; index < grid.length; index++) {
			//checks rows and cols
			if(grid[index][0] === value[0] || grid[index][1] === value[1]){
				return true;
			}
			//checks diag
			if(Math.abs(grid[index][0] - value[0]) === Math.abs(grid[index][1] - value[1])){
				return true;
			}
		};
		return false;
	}

	//decision tree time
	//base case out of bounds or grid.length = size as we are only placing coords in it.

	/*
	for (var x = 0; x < size; x++) {
		for (var y = 0; y < size; y++) {
			if(!collisionCheck([x,y])){
				grid.push([x,y]);
				if(grid.length === size){
					counter++;
					grid.pop();
				}
			}
		}
	}
	*/

	var tree = function(grid){
		for (var index = 0; index < size; index++) {
			if(!collisionCheck([grid.length,index])){
				grid.push([grid.length,index]);
				if(grid.length === size){
					counter++;
				}else{
					grid = tree(grid);
				}
				grid.pop();
			}

		}
		return grid;
	}
	tree(grid);

	return counter;
}

console.log(nQueens(8));