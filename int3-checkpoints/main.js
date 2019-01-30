var assassin = document.getElementById("assassin");

var mage = document.getElementById("mage");

var fighter = document.getElementById("fighter");

var tank = document.getElementById("tank");

var marksmen = document.getElementById("marksmen");

var support = document.getElementById("support");

var display = document.getElementById("display");

assassin.addEventListener("mousemove", function() {
    display.innerHTML = "Assassins are responsible for doing a lot of damage in a short period of time. However, most assassins have very low health and die easily, but they also do the most damage in the game. They are very mobile and can escape/chase others easily. This means that their job is to dive the back liners (mages and marksmen) and kill them before they can do any damage."
})

mage.addEventListener("mousemove", function() {
    display.innerHTML = "Mages are long distance damage dealers, they do a lot of damage in a short period of time, but unlike assassins they have little to no mobility and can easily be killed by other mages and assassins. Their job is to keep the enemy away from the backline and protect themselves from assassins or fighters."

})

fighter.addEventListener("mousemove", function() {
    display.innerHTML = "Fighters are a combination of a tank and an assassin. They have less damage than an assassin and are usually less mobile too, but they have more health and can still put out a decent amount of damage. Their main role is to go for objectives such as towers and dragons as well as being front liners in fights."

})

tank.addEventListener("mousemove", function() {
    display.innerHTML = "Tanks do very little damage but they have the most health and regeneration in the game. Their job is to protect the team and support from taking damage. They have a lot of croud control and absorb most of the damage. Their job is one of the most important in the game. Without a tank your team won't have anyone to absorb the damage and will most likely lose team fights."

})

marksmen.addEventListener("mousemove", function() {
    display.innerHTML = "Marksmen have one of the hardest roles in the game, some of the marksmen can be mobile but most have limited mobility, they do as much damage as assassins, but are ranged. This means that they can attack from a distance but still do as much damage as an assassin would. Their job is to put out as much damage as possible for the team and shred their tanks and kill their front liners. "

})

support.addEventListener("mousemove", function() {
    display.innerHTML = "Support has the job of protecting the marksmen, the team's main damage dealer. Supports come in all shapes and sizes, some heal teammates, some use a lot of croud control to stun enemies and some do damage themselves. Their main job is to protect the team from dying."

})