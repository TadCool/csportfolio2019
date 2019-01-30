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

        frameRate(20)
        var size = 35;
        draw = function() {
            background(random(255), random(255), random(255))
            size += 2;
            if (size >= 35) {
                size = random(35);
            }
            fill(random(255), random(255), random(255));
            stroke(random(0), random(0), random(0));
            strokeWeight(0)
            for (var i = 0; i < width; i += 50) {
                for (var j = 0; j < height; j += 50) {

                    rect(i, j, size, size);
                    ellipse(i, j, size, size);

                }

            }
        }

    };

    // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
