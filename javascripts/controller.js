var Controller = function (args){
  this.model = args.model;
  this.view = args.view;
  this.plant_listener();
  this.grow_listener();
}

Controller.prototype = {
  plant_listener: function(){
   document.querySelector('button.plant').addEventListener('click', this.view.renderTree);
  },
  grow_listener: function () {
    document.querySelector('button.age').addEventListener('click', this.ageTree.bind(this))
  },
  ageTree: function () {
    this.model.grow();
    if (this.model.age > FRUIT_BEARING_AGE) {
      this.view.renderOldTree();
      this.growOranges();
      this.dropOranges();
    }
  },
  growOranges: function () {
    for (var i=this.view.howManyRenderedOranges(); i<this.model.orangeArr.length; i++){
        var diameter = this.model.orangeArr[i].diameter;
        this.view.renderOrange(diameter);
    }
  },
  dropOranges: function () {
    var num = Math.ceil(Math.random() * 2)
    for (var i=0; i<num; i++) {
      this.model.dropOrange();
      this.view.dropOrange();
    }
  }
}


var controller = new Controller({
  model: new Tree(),
  view: new View()
})
