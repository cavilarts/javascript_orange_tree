/* Write your JS to modify the view here */
var View = function() {
}

View.prototype = {
	renderTree: function(){
	  $("#orange-tree-template").css({'display':'block'});
	  $("#tree").removeClass("display-tree-big");
	  $("#tree").addClass("display-tree-small");
	},
	growTree: function(){
	  $("#tree").removeClass("display-tree-small");
	  $("#tree").addClass("display-tree-big");
	},
  deadTree: function(){
    $("#orange-tree-template").css({'display':'none'});
    alert("Your tree is dead")    
  },
  createOrange: function(diameter){
    var posx = (Math.random() * ($(".orange").width() - diameter)).toFixed();
    var posy = (Math.random() * ($(".orange").height() - diameter)).toFixed();
    var modifyOrange = "<img src='images/orange.gif' style='width:"+diameter+"px; position:absolute; left:"+posx+"px; top:"+posy+"px'>";
    $(".orange").append(modifyOrange)
  },
  pickOrange: function(){
    $(".orange").children().first().remove()
  }
};