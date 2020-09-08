# repbot
<p align="center">
  <img alt="Demonstration GIF" src="https://user-images.githubusercontent.com/17814535/89352152-1c282000-d679-11ea-8cac-58977874ae2f.gif">
  
  <h3 align="center">✨Top.gg Repbot✨</h3>
</p>

----

<p align="center">
  <a href="https://github.com/ajmeese7/repbot/search?l=javascript">
    <img src="https://img.shields.io/badge/language-javascript-blue?color=FF69B4" alt="JavaScript" />
  </a>
  <a href="https://github.com/ajmeese7/repbot/blob/master/LICENSE.md">
    <img src="https://img.shields.io/github/license/ajmeese7/repbot" alt="License" />
  </a>
  <a href="https://github.com/ajmeese7/repbot/stargazers">
    <img src="https://img.shields.io/github/stars/ajmeese7/repbot" alt="Stars" />
  </a>
  <a href="https://github.com/ajmeese7/repbot/network/members">
    <img src="https://img.shields.io/github/forks/ajmeese7/repbot" alt="Forks" />
  </a>
  <a href="https://github.com/ajmeese7/repbot/stargazers">
    <img src="https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99" alt="Leave a Star!"/>
  </a>
</p>

### Usage
To use the program, go to [top.gg](https://top.gg) and find the bot
you want to upvote. Once you are on the bot's page, get its ID from the URL.

In the below link, the ID is `159985870458322944`, which belongs to mee6:

[http://top.gg/bot/159985870458322944/vote](http://top.gg/bot/159985870458322944/vote)

Once you have copied the ID, paste it as the value for the `bot` variable in
`start.js`. You must also paste your Discord login credentials in the `email`
and `password` variables.

This will only work if the correct login information is provided, so make sure
you know your email and password before running the program. If the information
is entered correctly, there will be no robot test on the login page for Discord.

I recommend running this on a device like a Raspberry Pi, since you can have it
running at all times cheaply. The program will **NOT** continue running if you
turn off your device. You must manually restart the program if your device is
powered off.

## TODO
- Add in a simple CLI for the bot name/ID that you want to upvote
  - Can also pass login info via CLI