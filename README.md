# nativescript-platform-css
A NativeScript plugin to deal with Declarative UI and Platform specific CSS

## License

This is released under the MIT License, meaning you are free to include this in any type of program -- However for entities that need a support contract, changes, enhancements and/or a commercial license please contact me (nathan@master-technology.com).


## What is it?
What this does is automatically add "android", "windows" or "ios" to the current **Page**'s cssClass variable, this allows you to do

    Declarative UI:
    <Page><Label class="awesome" text="Awesome"></Page>

    CSS:
    .ios .awesome { background-color: blue; }
    .android .awesome { background-color: green; }
    .windows .awesome { background-color: red; }

Automatically on iOS the color would be blue, on Android the color would be green and finally on Windows it would be red.


## Installation 

tns plugin add nativescript-platform-css


## Usage

To use the module you just `require()` it:

```js
require( "nativescript-platform-css" );
```

Notice: You do NOT need to keep a reference to it; and you only need to load it once.   I recommend you add it to your app.js file and forget about it.

It will automatically attach its methods to all the proper classes in the NativeScript library making it act as if they are built in.


## You ask, how exactly does this help?
Well, guess what Cascading means in CSS?  
Yes, this means this works now: 

```css
StackLayout {
  background-color: red;
}

.android StackLayout {
  background-color: green;
}
```

So on ios and windows the background would be red, on a android the color is green.

## Why use this?
You can set ALL the normal CSS values this way include width, height, font-size.  This allows you to reuse the majority of your css without having to have separate files.


### Notes
There is also a related plugin called NativeScript-orientation that automatically will do the same type of CSS coolness for dealing with device orientation.