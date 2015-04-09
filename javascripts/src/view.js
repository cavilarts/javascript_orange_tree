/* Write your JS to modify the view here */

// $(document).ready(function(){
// 	$(".plant").click(function(){
// 		$("#orange-tree-template").css({'display':'block'})
// 	});
// });


var View = function() {
	
}

View.prototype = {
	renderTree: function(){
	  $("#orange-tree-template").css({'display':'block'});
	  $("#tree").removeClass("display-tree-big");
	  $("#tree").addClass("display-tree-small");
	}
};