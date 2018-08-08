const Nightmare = require('nightmare');
var bot = "159985870458322944"; // The discordbots.org ID of the bot you want to upvote
// IDEA: CLI with bot ID / login info?

var email = "your@email.com";
var password = "y0uRpAsswRdHERE";

// IDEA: Add option to cycle through multiple accounts via array/txt doc
// NOTE: Creating accounts is probably out of scope. Different project / post other?
//       TODO: TEST WITH TEMP EMAIL!
run(); // So it runs once at first
setInterval(run, 43260000); // 12 hours and 1 minute in millisecond form (43260000)

function run() {
  var nightmare = new Nightmare({show: true, typeInterval: 75, pollInterval: 250});
  nightmare
    .goto('http://discordbots.org/bot/' + bot + '/vote')
    .wait('#votingvoted')
    .click('#votingvoted') // Click vote for bot button
    .wait('.modal-content')
    .click('.modal-content p a') // Login to vote
    .type('form div:nth-child(1) div input', email) // Type email
    .type('form div:nth-child(2) div input', password) // Type password
    .wait(3000)
    .click('[type="submit"]') // Click login button
    .wait('.primary')
    .click('.primary') // Click authorize button
    .wait('#votingvoted')
    .click('#votingvoted') // Vote for bot
    .wait(3000)
    .end() // For some reason it won't run without the end/then
    .then((result) => {
      console.log("Done.");
    })
}
