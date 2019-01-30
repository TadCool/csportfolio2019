/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        /*global background global mouseX global mouseY global line 
        global random global fill global rect*/

        //makes 3 lines appear from top left
        function LineFunction1() {
            line(0, 0, random(400), random(400));
            line(0, 0, random(400), random(400));
            line(0, 0, random(400), random(400));
        };

        //makes 3 lines appear from top right
        function LineFunction2() {
            line(400, 0, random(400), random(400));
            line(400, 0, random(400), random(400));
            line(400, 0, random(400), random(400));
        };

        //makes 3 lines appear from bottom left
        function LineFunction3() {
            line(0, 400, random(400), random(400));
            line(0, 400, random(400), random(400));
            line(0, 400, random(400), random(400));
        };

        //makes 3 lines appear from bottom right
        function LineFunction4() {
            line(400, 400, random(400), random(400));
            line(400, 400, random(400), random(400));
            line(400, 400, random(400), random(400));
        };

        //sets initial background color
        background(0, 0, 0)
        //creates looping lines
        draw = function() {

            //continuously creates ellipses that follows the mouse
            LineFunction1();
            LineFunction2();
            LineFunction3();
            LineFunction4();

            for (var a = 30; a > 0; a -= 15) {
                for (var b = 30; b > 0; b -= 15) {
                    ellipse(mouseX, mouseY, a, b)
                }
            }
        };


        //when screen is clicked, loop resets
        mouseClicked = function() {

            //click on top right = green background
            if (mouseX > 200) {
                //colors the ellipse the same color as the background
                fill(130, 255, 150);
                background(130, 255, 150);
            }
            //click on top left = red background
            else {
                //colors the ellipse the same color as the background
                fill(255, 100, 100);
                background(255, 100, 100);

            }
            //click on bottom left = blue background
            if (mouseY > 200) {
                //colors the ellipse the same color as the background
                fill(120, 150, 255);
                background(120, 150, 255);
            }
            //click bottom right = yellow background
            if (mouseY > 200)
                if (mouseX > 200) {
                    //colors the ellipse the same color as the background
                    fill(255, 255, (50));
                    background(255, 255, 50);
                }

        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
