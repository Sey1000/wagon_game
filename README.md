## Background & Objectives

Let's create a JavaScript game: the wagon-race. It's a simple game where you use your keyboard to make a Wagon move forward. Each player will move their "wagon" by tapping a key (e.g. `Q` for player one, `P` for player two)

The goal here is to learn more about JavaScript, jQuery, the DOM, and asynchronous event handling.

![](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/wagon_race.gif)

## Specs

#### HTML

You will start by building a simple two-player board in HTML. There are a few different ways of doing it, but here's one example:

```html
<table class="racer_table">
  <tr id="player1_race">
    <td></td>
    <td class="active"></td>
    <td></td>
    <td></td>
    etc.
  </tr>
  <tr id="player2_race">
    <td></td>
    <td></td>
    <td></td>
    <td class="active"></td>
    etc.
  </tr>
</table>
```

#### CSS

Once your HTML is finished, switch to CSS and design your race track! Example:

```css
.racer_table td {
  height: 40px;
  width: 40px;
}
.racer_table td.active {
  background-repeat: no-repeat;
  background-size: 100%;
}
#player1_race td.active {
  background-image: url("images/player_1.png");
}
#player2_race td.active {
  background-image: url("images/player_2.png");
}
```

You will update a player's position by moving the `active` class from one `td` to the next one. Of course, there are other solutions to implement this game. Using a table and a CSS class is one option. Make sure you're able to "manually" produce all the board views you might need.

It's always a good idea to do as much work as possible using smart HTML markup and CSS classes before jumping into JavaScript. Bad front-end developers spend time writing long javascript code that change CSS values, instead of short scripts that play nicely with existing CSS classes.

#### Javascript

Write all your code in `game.js`. We need a way for JavaScript to update the board state. Create simple JavaScript functions that update a player's position. Again, there are several ways to do the same thing. One example below:

- Remove the `active` class on the current player's `td` and add that class to the next `td`.
- Keep track of the "index" of each player in the table and increase it.

**Hint**: depending of your choice, the [next](http://api.jquery.com/next/) and [index](http://api.jquery.com/index/) jQuery functions may be useful!

#### Clicking a button

Now we'll make the game interactive! Add 2 buttons to your page. The first one should make the red wagon move forward, and the second button should make the yellow wagon move forward.

#### Binding to Keyboard

Clicking a button is not fast enough. And you can't play with someone else! Bind to the [keyup event](http://api.jquery.com/keyup/) to detect when a player has "pressed" a key. Do you understand why we use `keyup` rather than `keydown`?

If we use [keydown](http://api.jquery.com/keydown/) or [keypress](http://api.jquery.com/keypress/), it means a player could just hold the key down and let the keyboard command repeat itself. `keyup` is registering the 'letting go' of the button, so holding it down won't work!

To enable this, you have to bind to the `document`, like so:

```javascript
$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // Display the ASCII code of the key pressed
    console.log(event.keyCode);
  });
});
```

Here is a handy website when dealing with keyboard events and `keyCode`: [keycode.info/](http://keycode.info/)

##### Starting and Winning 🏁

Two more final things:

- Find a way to restart the game
- Find a way to announce the winner of the race

[Optional] Do the same but instead of using functions, use Javascript objects and prototypal inheritance (the Javascript way of creating Classes.)
