var input1 = document.getElementById("input1")

var input2 = document.getElementById("input2")

var input3 = document.getElementById("input3")

var input4 = document.getElementById("input4")

var input5 = document.getElementById("input5")

var input6 = document.getElementById("input6")

var button1 = document.getElementById("button1")

var button2 = document.getElementById("button2")

var button3 = document.getElementById("button3")

var button4 = document.getElementById("button4")

var button5 = document.getElementById("button5")

var button6 = document.getElementById("button6")

var display1 = document.getElementById("display1")

var display2 = document.getElementById("display2")

var display3 = document.getElementById("display3")

var display4 = document.getElementById("display4")

var display5 = document.getElementById("display5")

var display6 = document.getElementById("display6")


// If the select option is equal to 19 then there will be text that pops up saying it is correct
// If it is inforrect then it will show as incorrect
button1.addEventListener("click", function() {

    if (input1.value === "19") {
        display1.innerHTML = "Correct! The answer is 19."
    }

    else {
        display1.innerHTML = "Incorrect, If you count all the characters in both the Slayer and Skirmisher subclass, there are 19."
    }
});

// If the select option is equal to Artillery then there will be text that pops up saying it is correct
// If it is inforrect then it will show as incorrect
button2.addEventListener("click", function() {

    if (input2.value === "Artillery") {
        
        display2.innerHTML = "Correct! She is an Artillery Mage."
    }

    else {
        display2.innerHTML = "Incorrect, while some people may consider Lux as a burst mage because of her damage, she is long range which makes her an artillery mage."
    }
});

// If the select option is equal to Fighters then there will be text that pops up saying it is correct
// If it is inforrect then it will show as incorrect
button3.addEventListener("click", function() {

    if (input3.value === "Fighters") {
        display3.innerHTML = "Correct! Juggernauts are part of the Fighter Class."
    }

    else {
        display3.innerHTML = "Incorrect, most people believe that Juggernauts are Tanks or Supports, they are actually part of the Fighter Class."
    }
});

// If the select option is equal to Catchers then there will be text that pops up saying it is correct
// If it is inforrect then it will show as incorrect
button4.addEventListener("click", function() {

    if (input4.value === "Catchers") {
        display4.innerHTML = "Correct!"
    }

    else {
        display4.innerHTML = "Incorrect, Catcher Supports are encouraged to play more aggressive than other supports."
    }
});

// If the select option is equal to Yes then there will be text that pops up saying it is correct
// If it is inforrect then it will show as incorrect
button5.addEventListener("click", function() {

    if (input5.value === "Yes") {
        display5.innerHTML = "Correct! You Don't Always have to use AD, you can be AP too!"
    }

    else {
        display5.innerHTML = "Incorrect, you can still win games with AP Marksmen, though it is just unusual"
    }
});

// If the select option is equal to 7 then there will be text that pops up saying it is correct
// If it is inforrect then it will show as incorrect
button6.addEventListener("click", function() {

    if (input6.value === "7") {
        display6.innerHTML = "Correct! There is a 7th page where special characters go. These are characters that don't belong in a class, or belong in multiple classes."
    }

    else {
        display6.innerHTML = "Incorrect, while most people believe there are only 6 classes, there is actually a 7th class where special characters go."
    }
});