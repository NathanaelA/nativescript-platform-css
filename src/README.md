[![npm](https://img.shields.io/npm/v/nativescript-platform-css.svg)](https://www.npmjs.com/package/nativescript-platform-css)
[![npm](https://img.shields.io/npm/l/nativescript-platform-css.svg)](https://www.npmjs.com/package/nativescript-platform-css)
[![npm](https://img.shields.io/npm/dt/nativescript-platform-css.svg?label=npm%20d%2fls)](https://www.npmjs.com/package/nativescript-platform-css)
[![Twitter Follow](https://img.shields.io/twitter/follow/congocart.svg?style=social&label=Follow%20me)](https://twitter.com/congocart)


# nativescript-platform-css
A NativeScript plugin to deal with Declarative UI and Platform specific CSS

## Developed by
[![MasterTech](https://plugins.nativescript.rocks/i/mtns.png)](https://plugins.nativescript.rocks/mastertech-nstudio)


## License

This is released under the MIT License, meaning you are free to include this in any type of program -- However for entities that need a support contract, changes, enhancements and/or a commercial license please contact me at [http://nativescript.tools](http://nativescript.tools).

I also do contract work; so if you have a module you want built for NativeScript (or any other software projects) feel free to contact me [nathan@master-technology.com](mailto://nathan@master-technology.com).

[![Donate](https://img.shields.io/badge/Donate-PayPal-brightgreen.svg?style=plastic)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=HN8DDMWVGBNQL&lc=US&item_name=Nathanael%20Anderson&item_number=nativescript%2dplatformcss&no_note=1&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3ax%3aNonHosted)
[![Patreon](https://img.shields.io/badge/Pledge-Patreon-brightgreen.svg?style=plastic)](https://www.patreon.com/NathanaelA)


## What is it?
What this does is automatically add "android" or "ios" to the current **Page**'s cssClass variable, this allows you to do

    Declarative UI:
    <Page><Label class="awesome" text="Awesome"></Page>

    CSS:
    .ios .awesome { background-color: blue; }
    .android .awesome { background-color: green; }


Automatically on iOS the color would be blue, on Android the color would be green.


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

#### Plain Awesome NativeScript (PAN)
```css
StackLayout {
  background-color: red;
}

.android StackLayout {
  background-color: green;
}
```

#### NativeScript Angular (NAN)
```css
StackLayout {
  background-color: red;
}

/deep/ .android StackLayout {
  background-color: green;
}
```

Or, I was recently informed that `:host` is a better way to do this as it has potentially less side effects. 
```css
StackLayout {
  background-color: red;
}

.android :host StackLayout {
  background-color: green;
}
```


So on ios the background would be red, on a android the color is green.
Please note, in Angular you MUST prefix the rule with `/deep/` or preferably `:host` for it to work correctly!

## Why use this?
You can set ALL the normal CSS values this way include width, height, font-size.  This allows you to reuse the majority of your css without having to have separate files.

## Enhanced modes
This plugin in addition to doing the simple `.android` or `.ios`; will also create a `.iosXXX` or `.androidXXX` (where XXX is the DPI of the screen).  On iOS there is a fixed number of sizes, on Android you can enable sizeGroupings which will evaluate each device and put them inside a range of sizes to make it easier to handle screen sizes.
`.sizeGroupings(true)` = Enable (This features defaults to being disabled).    The default groupings are [1280,1024,800,600,540,480,400,360,320]. If you want to have your own size groupings, you can do .sizeGroupings([size1,size2,size3,...]).  **The size groupings needs to be in largest to smallest, if you are using your own.** 
The way it determines size groupings is that say the screen is 1100dpi, it would then get the grouping .android1280 because it is smaller than 1280 but bigger than 1024.
Finally, it also sets the name of the device in the css; so Iphone X, will be `iphonex`. The device name will be lower cased, and anything not A-Z or 0-9 will be stripped out of the name.

So it sets three (or four) separate css classes on startup of each page; you can use any (or all) of them to use as css rules.
- .android | .ios
- .androidXXX | .iosXXX
- <deviceName>
- .phone | .tablet
- .notch - has a notch
- .softnav - if softnav is showing. 

Please note these are calculated each page load.

Example:
`ios ios480 iphone6s phone`
`android android1024 samsunggalaxytab5 tablet softnav`

### Demo
The demo will show you the css class names it generated.  


### Notes
There is also a related plugin called NativeScript-orientation that automatically will do the same type of CSS coolness for dealing with device orientation.

### Contributors
- Dave Coffin
- Steve McNiven-Scott
- Jonathan Salomon
