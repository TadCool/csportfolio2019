/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

/*global fill*/
/*global stroke*/
/*global strokeWeight */
/*global random */
/*global mouseClicked */

function How(x,y){
fill(random(255),random(200),random(200))
ellipse(x + 15, y + 5, 30, 30);
ellipse(x - 15, y + 5, 30, 30);
ellipse(x , y + 30, 50, 50);
ellipse(x + 10, y + 25 , 5, 7);
ellipse(x - 10, y + 25 , 5, 7);
};

mouseClicked = function(){
How(mouseX, mouseY);
};
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
