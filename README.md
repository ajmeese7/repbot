# repbot
Bot for artificially influencing rankings on discordbots.org

### Usage
To use the program, go to [discordbots.org](discordbots.org) and find the bot
you want to upvote. Once you are on the bot's page, get its ID from the URL.

In the below link, the ID is `159985870458322944`, which belongs to mee6:

[http://discordbots.org/bot/159985870458322944/vote](http://discordbots.org/bot/159985870458322944/vote)

Once you have copied the ID, paste it as the value for the `bot` variable in
`start.js`. You must also paste your Discord login credentials in the `email`
and `password` variables. As this is open source, you can tell that there is no
possible way that I can steal your login information, so don't freak out.

This will only work if the correct login information is provided, so make sure
you know your email and password before running the program. If the information
is entered correctly, there will be no robot test on the login page for Discord.

I recommend running this on a device like a Raspberry Pi, since you can have it
running at all times cheaply. The program will **NOT** continue running if you
turn off your device. You must manually restart the program if your device is
powered off.
