/* Write your JS to modify the view here */


$( document ).ready(function( $ ) {
  $( ".plant" ).click(function() {
   // console.log("fuck");
   $('#orange-tree-template').css('display','block');
   nielsTree = new OrangeTree;
   console.log(nielsTree)

 });

  $("button.age").click(function() {
    nielsTree.grow();
     console.log(nielsTree.age);
  if (nielsTree.isAlive) {
  $("p.age").text(nielsTree.age);
  console.log(nielsTree.isAlive)
}
  })


});
