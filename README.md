# Cursed city character sheet

This React app is a side project born during COVID lockdown. I was playing Cursed City (a physical boardgame, owned by games workshop) with some friends, online, sharing the board with the help of a camera. We took pictures of the character sheet and would edit them with paint during the game. It was a bit unpractical, so I decided to make a small app to track my character. Unfortunately we stopped playing that way, so I stopped this project. However it's already functional:

- All information on the card are displayed.
- You can track everything related to the dice mechanics.
- You can load your own character in the app. The file must be a json with the right format.
- You can save the character if you modified it.
- You can gain exaltation point and spend them to become exalted.

<div style="text-align:center">
  <img src="https://github.com/Elesh-Norn/cursed-city-char-sheet/raw/main/example_picture.png"/>
</div>

Everything related to character progression and items have not been coded because I've stopped playing by then.

To use this app, you just need to run yarn install and then yarn start. You could also probably deploy the app to make it available at all time.

To build your own character, edit the `src/character_template.json` or load a correct json in the web app.
