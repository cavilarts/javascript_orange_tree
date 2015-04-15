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
    this.age += AGING_RATE;
    this.height += SIZING_RATE;
    if( this.age == FRUIT_BEARING_AGE ){
      this.orangeCount = random(20);
    };
    if (this.age <= MAX_AGE){
      this.isAlive = true;
    }else{
      this.isAlive = false;
    }
  },
  dropOrange: function(){
    var droppedOrange = this.orangeCount --;
    return droppedOrange;
  },
  pickOrange: function(){
    return new orange;
  },
  random: function(number){
    return (Math.ceil(Math.random() * number))
  }
}
var germanOrangeTree = new OrangeTree();
console.log(germanOrangeTree.age);
germanOrangeTree.grow();
germanOrangeTree.grow();
germanOrangeTree.grow();
console.log(germanOrangeTree.orangeCount);
