/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        /*global random*/
        /*global frameRate*/
        /*global background*/
        /*global fill*/
         /*global strokeWeight*/
         /*global stroke*/
    var xPos = 0
    var yPos = 0
        frameRate(20)
            var size = 35;
        draw = function() {
background((255), (255), (255))
            size+=5;
            if(size >= 200){
                size = random(200);
            }
            for (var i = 0; i < width; i += random (200)) {
                for (var j = 0; j < height; j += random(2                                                                  00)) {
                    
                    line(i, j, size, size)

                }
            
            }
        }
    
    };

    // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
