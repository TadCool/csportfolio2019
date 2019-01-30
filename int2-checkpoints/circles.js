/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

/*global fill*/
/*global stroke*/
var thirty=30
var xPos = 0
var yPos = 0
var xPos2 = 400
var yPos2 = 0
var xPos3 = 200
var yPos3 = 0
/*global strokeWeight */
draw = function() {
   //this creates a pattern//
    stroke(100);
    strokeWeight(5);
    fill(200,0,0);
    ellipse(xPos,yPos,thirty,thirty)
    xPos=xPos+10
    yPos=yPos+10
    
    stroke(100);
    strokeWeight(5);
    fill(200,0,200);
    ellipse(xPos2,yPos2,thirty,thirty)
    xPos2=xPos2-10
    yPos2=yPos2+10
    
       stroke(100);
    strokeWeight(5);
    fill(200,200,0);
    ellipse(xPos3,yPos3,thirty,thirty)
    xPos3=xPos3
    yPos3=yPos3+10
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
