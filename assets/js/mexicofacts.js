// Author: Fernando Pinto f6rnando@gmail.com

function getRandomFact() {
    let entriesCount = entries.length;
    let randomEntry = Math.floor(Math.random() * entriesCount);

    let $cardHead = $("#container").find(".card-header");
    let $cardBody = $("#container").find(".card-body");

    $cardHead.html("<p>" + entries[randomEntry].question + "<p>");
    $cardBody.html("<p>" + entries[randomEntry].answer + "<p>");
}

function paintBackground() {
    let colorCount = backgrounds.length;
    let randomBkg = Math.floor(Math.random() * colorCount);

    let $body = $("body");
    $body.css("background", backgrounds[randomBkg]);
}

paintBackground();
getRandomFact();