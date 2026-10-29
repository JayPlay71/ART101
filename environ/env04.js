// ---------- DATA: variables, arrays, objects ----------
let environmentTitle = "Skyarrow Bridge";
let destination = "Castelia City";
let region = "Unova";

let rules = [
    "Keep moving toward Castelia City.",
    "Do not startle resting Pokemon.",
    "Bring at least one empty Poke Ball.",
    "Gym challengers are expected in Castelia."
];

let tranquill = {
    name: "Tranquill",
    type: "Normal / Flying",
    mood: "watchful",
    location: "the railing",
    isResting: true
};

let ducklett = {
    name: "Ducklett",
    type: "Water / Flying",
    mood: "carefree",
    location: "the deck",
    isResting: false
};

// NEW: Vullaby shows up at night (sprite loaded from pokemondb.net, see env04.html)
let vullaby = {
    name: "Vullaby",
    type: "Dark / Flying",
    mood: "hungry",
    location: "the night sky",
    isResting: false
};

// NEW: helpers so setTime stays readable
function vullabyArrive() {
    $("#vullaby-card").fadeIn(800);
    $("#vullaby-button").show();
}

function vullabyLeave() {
    $("#vullaby-card").fadeOut(800);
    $("#vullaby-button").hide();
    // clear old Vullaby info so it doesn't linger after it leaves
    $("#environment-output").html("Click a button to learn about the bridge.");
}

// ---------- jQuery: reveal data in #environment-output ----------
$("#title-button").click(function () {
    $("#environment-output").html(
        "<strong>" + environmentTitle + "</strong><br>A bridge in " + region +
        " leading to " + destination + "."
    );
});

function showPokemon(p) {
    let status = p.isResting ? "resting" : "wandering";
    $("#environment-output").html(
        "<strong>" + p.name + "</strong><br>Type: " + p.type +
        "<br>Mood: " + p.mood + "<br>Found on: " + p.location +
        "<br>Currently " + status + "."
    );
}

$("#tranquill-button").click(function () {
    showPokemon(tranquill);
});

$("#ducklett-button").click(function () {
    showPokemon(ducklett);
});

$("#vullaby-button").click(function () {
    showPokemon(vullaby);
});

$("#rules-button").click(function () {
    let list = "<ul>";
    for (let i = 0; i < rules.length; i++) {
        list += "<li>" + rules[i] + "</li>";
    }
    list += "</ul>";
    $("#environment-output").html("<strong>Bridge Rules:</strong><br>" + list);
});

// ---------- FUNCTION: setTime(time) ----------
// receives a phase name ("day", "sunset", "night"), checks it with if / else if / else
function setTime(time) {
    time = time.toLowerCase().trim();

    if (time === "day") {
        $("#tint").css("background", "rgba(0, 0, 0, 0)");
        $(".poke-card").removeClass("night-card");
        tranquill.isResting = true;
        tranquill.mood = "watchful";
        ducklett.isResting = false;
        $("#caption").html("It is a bright day on Skyarrow Bridge. Travelers keep crossing toward Castelia.");
        $("#tranquill-text").html("Tranquill rests on the railing, keeping an eye on travelers.");
        ducklett.mood = "carefree";
        $("#ducklett-text").html("Ducklett waddles along the deck, splashing in puddles.");
        vullabyLeave();
    }
    else if (time === "night") {
        $("#tint").css("background", "rgba(5, 10, 50, 0.6)");
        $(".poke-card").addClass("night-card");
        tranquill.isResting = true;
        tranquill.mood = "sleepy";
        $("#caption").html("Night falls over the bridge. The lights of Castelia City glow in the distance.");
        $("#tranquill-text").html("Tranquill tucks its head under its wing. Zzz...");
        ducklett.mood = "nervous";
        ducklett.isResting = true; // huddled up for the night
        $("#ducklett-text").html("Ducklett huddles close and stares at the dark sky. Something is coming...");
        $("#caption").append(" A Vullaby has appeared!");
        vullabyArrive();
    }
    else if (time === "sunset") {
        $("#tint").css("background", "rgba(255, 120, 30, 0.35)");
        $(".poke-card").removeClass("night-card");
        tranquill.mood = "calm";
        tranquill.isResting = true;
        $("#caption").html("The sky turns orange as the sun sets behind the city.");
        $("#tranquill-text").html("Tranquill watches the sunset quietly.");
        ducklett.mood = "sleepy";
        ducklett.isResting = true;
        $("#ducklett-text").html("Ducklett yawns and paddles slowly in the orange light.");
        vullabyLeave();
    }
    else {
        // safety fallback: the button only sends valid phases, but this catches any other value
        $("#caption").html("\"" + time + "\" is not a time I know. Try day, sunset, or night!");
    }
}

// the time phases in order; after the last one we loop back to the first
let phases = ["day", "sunset", "night"];
let phaseIndex = 0; // the page starts as day

$("#time-button").click(function () {
    // move to the next phase
    phaseIndex = phaseIndex + 1;

    // if we went past night, go back to day
    if (phaseIndex >= phases.length) {
        phaseIndex = 0;
    }

    setTime(phases[phaseIndex]);

    // label the button with what comes next
    let nextPhase = phases[(phaseIndex + 1) % phases.length];
    $("#time-button").html("Next: " + nextPhase);
});
