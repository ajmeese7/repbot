const Nightmare = require('nightmare');
var bot = "159985870458322944"; // The discordbots.org ID of the bot you want to upvote

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
    .goto('https://top.gg/bot/' + bot + '/vote')
    .wait('#votingvoted')
    .click('#votingvoted') // Click vote for bot button
    .wait('.modal-content')
    .click('.modal-content p a') // Login to vote
    .wait('form div:nth-child(1) div input')
    .type('form div:nth-child(1) div input', email) // Type email
    .type('form div:nth-child(2) div input', password) // Type password
    .wait(3000)
    .click('[type="submit"]') // Click login button
    .wait('.lookFilled-1Gx00P')
    .wait(5000) // To bypass 'Forgot your password?' text
    .evaluate(function() {
      return document.querySelector('.lookFilled-1Gx00P')
        .innerText;
    })
    .then(function(text) {
      console.log("TEXT:", text);
      if (text.includes('Authorize')) {
        console.log("Authorize found!");
        return nightmare.click('.lookFilled-1Gx00P'); // Click authorize button
      } else {
        console.log("Already authorized, so skipping that step...");
      }
    })
    .then(() => {
      // https://stackoverflow.com/a/37950959/6456163
      return nightmare
        .wait('#votingvoted')
        .click('#votingvoted') // Vote for bot
        .wait(5000)
        .end()
    })
    .then((result) => {
      console.log("Done.");
    })
}
