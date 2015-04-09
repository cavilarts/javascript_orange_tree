/* Write your code for the plain-old-js-objects-spec here */
var FRUIT_BEARING_AGE = 2
var MAX_AGE = 10


var Tree = function() {
	this.age = 0;
	this.height = 0;
	this.orangeArray = [];
	this.orangeCount = 0
	this.isAlive = true;
}

var Orange = function() {
	this.diameter = Math.floor((Math.random() * 3) + 1)
}

function createTree(){
	return new Tree;
} 

function createOrange(){
	return new Orange
}

function pickOrange(tree) {
		return tree.orangeArray.shift();
}


Tree.prototype = {
	grow: function() {
		this.age ++;
		this.height +=10;
		if(this.age >= FRUIT_BEARING_AGE){
			for(counter = 1; counter <= Math.floor((Math.random() * 20) + 1); counter ++) {
				this.orangeArray.push(createOrange());
			}
		}
		if (this.age > MAX_AGE){
			this.die();
		}	
		this.orangeCount = this.orangeArray.length
	},
	die: function() {
		this.isAlive = false;
	},
	dropOrange: function() {
		var droppedOrange = this.orangeCount --;
		return droppedOrange
	},
};


