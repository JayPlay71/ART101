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

let throwCount = 0;

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

$("#rules-button").click(function () {
    let list = "<ul>";
    for (let i = 0; i < rules.length; i++) {
        list += "<li>" + rules[i] + "</li>";
    }
    list += "</ul>";
    $("#environment-output").html("<strong>Bridge Rules:</strong><br>" + list);
});

$("#catch-button").click(function () {
    throwCount++;
    $("#environment-output").html(
        "You have thrown " + throwCount + " Poke Ball" + (throwCount === 1 ? "" : "s") +
        ". The Pokemon just stare at you."
    );
});
