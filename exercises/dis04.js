let treats = 0;

// NEW: an object that stores info about Kaya
let kaya = {
    name: "Kaya",
    age: 2,
    costume: "witch",
    toys: ["ball"]
};

// NEW: arrays of moods and background colors (index 0, 1, 2)
let moods = ["hungry", "happy", "hyper"];
let colors = ["#241b2f", "#3b2f4a", "#5a2e1f"];

let mood = "";


// both treat buttons run this after they change treats
function updatePage() {

    // TODO 1: write an if / else if / else that sets mood:
    //    5 or more treats  ->  moods[2]
    //    1 to 4 treats     ->  moods[1]
    //    0 or less         ->  moods[0]
    // (hint: check the biggest number first!)

    // TODO 2: inside each part of your if, also change the background color:
    //    $("body").css("background-color", colors[ ? ]);
    //    (use the same number as the mood!)

    if (treats >= 5) {
        mood = moods[2];
        $("body").css("background-color", colors[2]);
    } else if (treats >= 1 && treats <= 4) {
        mood = moods[1];
        $("body").css("background-color", colors[1]);
    } else {
        mood = moods[0];
        $("body").css("background-color", colors[0]);
    }

    // TODO 3: change this line so the header says:
    //    Kaya the witch has 3 treats and is feeling happy!
    // use kaya.name and kaya.costume instead of typing them, and add the mood
    // OPTIONAL (done early?): fix the grammar!
    //    right now it says "Kaya the witch has 1 treats". make it say "1 treat"
    //    hint: make a variable for the word, and use an if to change it when treats == 1
    let treatWord = "treats";
    if (treats === 1) {
        treatWord = "treat";
    }

    $("#treat-count").html(kaya.name + " the " + kaya.costume + " has " + treats + " " + treatWord + " and is feeling " + mood + "!");


}


$("#give-button").click(function () {
    treats = treats + 1;
    updatePage();
});

$("#take-button").click(function () {
    // OPTIONAL (done early?): don't let treats go below 0!
    //    hint: only subtract if treats is more than 0
    if (treats > 0) {
        treats = treats - 1;
    }
    updatePage();
});


// TODO 5: make the "give kaya a toy" button work (do TODO 4 in dis04.html first!)
//    1. add a toy to kaya.toys with .push()
//    2. show how many toys she has in #toys, using kaya.toys.length
//       e.g.  Kaya has 2 toys!

$("#toy-button").click(function () {
    kaya.toys.push("toy");
    $("#toys").html(kaya.name + " has " + kaya.toys.length + " toys!");
});