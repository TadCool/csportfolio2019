/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

frameRate(60)
        draw = function() {

            // If true will make blue rectangles
            if (mouseX > 200){
                fill(30, 200,0);
                noStroke();
                rect(mouseX, mouseY, 30, 30)
            }
            // If that is not true it will make red rectangles
            else {
                fill(255, 0, 0);
                noStroke();
                rect(mouseX, mouseY, 30, 30)

            }
            
             if (mouseY > 200) {
                fill(100, 120, 255);
                noStroke();
                rect(mouseX, mouseY, 30, 30)
             }
             
             if (mouseY > 200)
             if (mouseX > 200){
                fill(255, 255, 0);
                noStroke();
                rect(mouseX, mouseY, 30, 30)
             }
            
             
        };
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
