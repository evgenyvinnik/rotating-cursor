# About

This is a submission for the weekly frontend programming challenge - ["Weekly Challenge #12 - Fools Cursor"](https://github.com/Algorithm-Arena/weekly-challenge-12-fools-cursor)

The goal of this challenge was to implement a program that rotates your cursor towards the interactive elements on the screen.

# Solution
I have implemented a special component `CursorArea`, which represents a special `div`, which has mouse tracking events enabled within it.
As user enters the `div`, the system captures cursor position in regards to the `div` center, calculates necessary angle and presents cursor that is turning in the correct direction. Overall system has 16 different custom cursors in a shape of gauntlet (cause it looks cool!).

Component has single prop: `padding`.
This is a necessity, because the core idea is to surround some important UI elements with the `CursorArea`, so two things are achieved:
- those UI elements would be shown prominently
- there is exist some area in which cursor could be redrawn (as it would be impossible in a "tight-fitting" `div`)

# Usage
Component usage is very simple, for example this is how you surround the button
```
<CursorArea padding="50px">
  <button type="button">Click Me!</button>
</CursorArea>
```

or an input
```
<CursorArea padding="50px">
  <label>
    Text input: <input name="myInput" />
  </label>
</CursorArea>
```

# Live demo
https://evgenyvinnik.github.io/rotating-cursor/

# Video
https://youtu.be/jzbybHXtTvI
