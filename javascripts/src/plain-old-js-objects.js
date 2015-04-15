/* Write your code for the plain-old-js-objects-spec here */

FRUIT_BEARING_AGE = 3;
MAX_AGE = 5;

var random = function(number){
 return (Math.ceil(Math.random() * number))
}

var Tree = function(){
  var aging_rate = 1; // year
  var sizing_rate = 10; // inches
  var isAlive = false;

  this['height'] = 0;
  this['age'] = 0;
  this['orangeCount'] = 0;
  this['oranges'] = [];

  this['grow'] = function(){

    this['age'] += aging_rate;
    this['height'] += sizing_rate;

    if( this['age'] == FRUIT_BEARING_AGE ){
      this['orangeCount'] = random(20);
    };

    if (this['age'] <= MAX_AGE){
      this['isAlive'] = true;
    }else{
      this['isAlive'] = false;
    }
  }

  this['dropOrange'] = function(){
    var orange= new Object();
    orange = { diameter:500 };
    return orange;
  }

  return this;
}

var createTree = function() {
  return new Tree();
}

var pickOrange = function(){
  var orange= new Object();
  orange.diameter = random(5);
  return orange;
}
  var dropOrange = function(){
    var orange= new Object();
    orange = { diameter:500 };
    return orange;
  }
