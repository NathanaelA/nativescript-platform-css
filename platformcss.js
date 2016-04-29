/**********************************************************************************
 * (c) 2016, Master Technology
 * Licensed under the MIT license or contact me for a Support or Commercial License
 *
 * I do contract work in most languages, so let me solve your problems!
 *
 * Any questions please feel free to email me or put a issue up on the github repo
 * Version 0.0.1                                      Nathan@master-technology.com
 *********************************************************************************/
"use strict";

/* jshint camelcase: false */
/* global android, NSStringm, nsPlatform */

var Page = require('ui/page').Page;
require('nativescript-globalevents');
require('nativescript-platform');

/**
 * Function that adds the proper class when we navigate to a new page
 * @param args
 */
var setDevice = function(args) {
    var currentPage = args.object;

    var device;
    switch (nsPlatform.platform) {
        case nsPlatform.type.IOS:
            device = 'ios'; break;
        case nsPlatform.type.ANDROID:
            device = 'android'; break;
        case nsPlatform.type.WINDOWS:
            device = 'windows'; break;
    }

    if (currentPage) {
        var data = currentPage.cssClass || '';
        if (data.length) {
            currentPage.cssClass = data + ' ' + device;
        } else {
            currentPage.cssClass = device;
        }
    }
};

// Setup Events
Page.on(Page.navigatingToEvent, setDevice);

