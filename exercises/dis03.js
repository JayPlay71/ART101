let treats = 0;
updateHeader();

// when the "give" button is clicked, add 1 treat and update the header
$("#give-button").click(function () {
    treats = treats + 2;
    updateHeader();
});

// TODO 6: make the "take away" button work.
// follow the same format as the give button above, but subtract 1 instead.
// (hint: copy the 4 lines above, then change 2 things)
$("#take-button").click(function () {
    treats = treats - 1;
    updateHeader();
});

// 2b - Reset button
$("#reset-button").click(function () {
    treats = 0;
    updateHeader();
});

// ===================== OPTIONAL: LEVEL 2 =====================
// Done with TODOs 1-6? Try these!
//
// 2a. Make the "give" button add 2 treats instead of 1.
//
// 2b. Add a reset button in dis03.html (see the note there),
//     then make it set treats back to 0 and update the header.
//     (hint: same format as your other buttons!)


// ============== OPTIONAL: LEVEL 3 (stretch goal) ==============
// Use an if statement so the header changes depending on the count:
//
//    0 treats         ->  "Kaya has no treats!"
//    negative treats  ->  "Kaya owes you 3 treats!"
//    anything else    ->  "Kaya has 5 treats!"
//
// Here's the shape of an if statement:
//
//    if (treats == 0) {
//        // do this
//    } else if (treats < 0) {
//        // do this instead
//    } else {
//        // otherwise, do this
//    }
//
// hint: -treats flips the sign, so if treats is -3, then -treats is 3

function updateHeader() {
    if (treats == 0) {
        $("#treat-count").html("Kaya has no treats!");
    } else if (treats < 0) {
        $("#treat-count").html("Kaya owes you " + -treats + " treats!");
    } else {
        $("#treat-count").html("Kaya has " + treats + " treats!");
    }
}
