# concentration.js
This is a modification of a script by Three of Swords. It monitors for a change in a token bar and generates a saving throw message if the HP in the bar are reduced.
DEPENDENCY: Token-Mod API script by The Aaron, available in the one click install on Roll20.

**To configure**

**Line 1** Specify the token marker to use. This needs the full *name::number* (see below)

**Line 2** Specify the bar that records HP

**Line 12** is pre set for the D&D 5th Edition by Roll20 sheet. Customize this for other sheets. You will also need to change the token marker name here in the toggle command. This name can use just the base token marker *name*.

My changes are the content of the send chat line. It tells the concentration DC and creates an API button to roll the Saving Throw on the selected token. It also gives the option to toggle the token marker. This last part is the reason for the dependency on token-mod.

**To get token marker names:** use TOken Mod help and scroll to where token marker names are displayed. Token markers will have the name of the marker followed by a number, ex. "Concentrating::35390".
