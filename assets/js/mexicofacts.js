// Author: Fernando Pinto f6rnando@gmail.com

function getRandomFact() {
  let entriesCount = entries.length;
  let randomEntry = Math.floor(Math.random() * entriesCount);

  let $cardHead = $("#container").find(".card-custom-header");
  let $cardBody = $("#container").find(".card-custom-body");

  $cardHead.html("<p>" + entries[randomEntry].title + "<p>");
  $cardBody.html("<p>" + entries[randomEntry].description + "<p>");
}

function paintBackground() {
  let colorCount = backgrounds.length;
  let randomBkg = Math.floor(Math.random() * colorCount);

  let $body = $("body");
  $body.css("background", backgrounds[randomBkg]);
}

paintBackground();
getRandomFact();