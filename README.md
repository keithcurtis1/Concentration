# concentration.js
This is a modification of a script by Three of Swords. It monitors for a change in a token bar and generates a saving throw message if the HP in the bar are reduced.
DEPENDENCY: Token-Mod API script by The Aaron, available in the one click install on Roll20.

To configure
Line 1 Specify the token marker to use
Line 2 Specify the bar that records HP
Line 12 is pre set for the D&D 5th Edition by Roll20 sheet. Customize this for other sheets.

My changes are the content of the send chat line. It tells the concentration DC and creates an API button to roll the Saving Throw on the selected token. It also gives the option to toggle the token marker. This last part is the reason for the dependency on token-mod.
