FRUIT_BEARING_AGE = 2;
MAX_AGE = 5;
AGING_RATE = 1;
SIZING_RATE = 10;

var OrangeTree = function(){
  this.height = 0;
  this.age = 0;
  this.orangeCount = 0;
  this.oranges = [];
  this.diameter = 0;
  this.isAlive = true;
};
OrangeTree.prototype = {
  grow: function(){
    if (this.isAlive) {
    this.age += AGING_RATE;
    this.height += SIZING_RATE;
    if( this.age == FRUIT_BEARING_AGE ){
      this.orangeCount = Math.ceil(Math.random() * 20);
    };
    if (this.age <= MAX_AGE ){ this.isAlive = true }
    else { this.isAlive = false }
  } else {
    console.log("DEAD");
  }
  },
  dropOrange: function(){
    var droppedOrange = this.orangeCount --;
    return droppedOrange;
  },
  pickOrange: function(){

    return new orange;
  }

}

console.log("hellow German")
// var germanOrangeTree = new OrangeTree();
// console.log(germanOrangeTree.age);
// germanOrangeTree.grow();
// germanOrangeTree.grow();
// germanOrangeTree.grow();
// console.log(germanOrangeTree.orangeCount);
