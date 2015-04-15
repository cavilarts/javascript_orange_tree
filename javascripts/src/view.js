/* Write your JS to modify the view here */


$( document ).ready(function( $ ) {
  $( ".plant" ).click(function() {
   // console.log("fuck");
   $('#orange-tree-template').css('display','block');
   neilmanTree = new OrangeTree;
   console.log(neilmanTree)

 });

  $("button.age").click(function() {
    neilmanTree.grow();
  if (neilmanTree.isAlive) {
  $("p.age").text(neilmanTree.age);
  $("p.fruit-count").text(neilmanTree.orangeCount)
  }
  })

  $("button.pick").click(function() {
     neilmanTree.pickOrange();
     $("p.fruit-count").text(neilmanTree.orangeCount)


  });


});
