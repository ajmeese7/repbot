const Nightmare = require('nightmare');
var nightmare = new Nightmare({show: true, typeInterval: 75, pollInterval: 250});

var email = "aaron";
var password = "0123456789";

// IDEA: Add option to cycle through multiple accounts via array/txt doc
// NOTE: Creating accounts is probably out of scope. Different project / post other?
run();

function run() {
  nightmare
    .goto('http://discordbots.org/bot/159985870458322944/vote')
    .wait('#votingvoted')
    .click('#votingvoted') // Vote for bot
    .wait('.modal-content')
    .click('.modal-content p a') // Login to vote
    .type('form div:nth-child(1) div input', email) // Type email
    .type('form div:nth-child(2) div input', password) // Type password
    .wait(30000)
    .end() // For some reason it won't run without the end/then
    .then((result) => {
      console.log("Done.");
    })
}
