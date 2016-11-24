/**********************************************************************************
 * (c) 2016, Master Technology
 * Licensed under the MIT license or contact me for a Support or Commercial License
 *
 * I do contract work in most languages, so let me solve your problems!
 *
 * Any questions please feel free to email me or put a issue up on the github repo
 * Version 1.3.0                                      Nathan@master-technology.com
 *********************************************************************************/
"use strict";

/* jshint camelcase: false */
/* global android, NSStringm, nsPlatform */

var Page = require('ui/page').Page;
require('nativescript-globalevents');
require('nativescript-platform');
var utils = require('utils/utils');

/**
 * Function that adds the proper class when we navigate to a new page
 * @param args
 */
var deviceInfo;

var setDevice = function(args) {
    var currentPage = args.object;

    var device;
    if (!deviceInfo) {


        switch (nsPlatform.platform) {
            case nsPlatform.type.IOS:
                device = 'ios ios';
                // We need to detect the smallest dimention to detect dpi.
                var width = iOSProperty(UIScreen, UIScreen.mainScreen).bounds.size.width;
                var height = iOSProperty(UIScreen, UIScreen.mainScreen).bounds.size.height;
                if (width < height) {
                    device += width;
                } else {
                    device += height;
                }
                break;
            case nsPlatform.type.ANDROID:
                device = 'android android'+getAndroidDPS();
                break;
            case nsPlatform.type.WINDOWS:
                device = 'windows'; break;
        }

        deviceInfo = device;
    } else {
        device = deviceInfo;
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

// ---------------------------------------------------------------
// Getting ios Property
// ---------------------------------------------------------------
function iOSProperty(_this, property) {
    if (typeof property === "function") {
        return property.call(_this);
    }
    else {
        return property;
    }
}

// ---------------------------------------------------------------
// Getting Android DPS
// ---------------------------------------------------------------
function getAndroidDPS() {
    var context = utils.ad.getApplicationContext();
    var metrics = new android.util.DisplayMetrics();
    context.getSystemService(android.content.Context.WINDOW_SERVICE).getDefaultDisplay().getRealMetrics(metrics);

    // We need to detect the smallest dimention to detect dpi.
    var width = parseInt(metrics.widthPixels / metrics.density,10);
    var height = parseInt(metrics.heightPixels / metrics.density,10);
    if (height < width) { return (height); }
    return (width);
}

