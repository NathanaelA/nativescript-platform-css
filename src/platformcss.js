/**********************************************************************************
 * (c) 2016, 2017 Master Technology
 * Licensed under the MIT license or contact me for a Support or Commercial License
 *
 * I do contract work in most languages, so let me solve your problems!
 *
 * Any questions please feel free to email me or put a issue up on the github repo
 * Version 1.6.1                                      Nathan@master-technology.com
 *********************************************************************************/
"use strict";

/* jshint camelcase: false */
/* global android, NSString, nsPlatform */

const Page = require('ui/page').Page;
require('nativescript-globalevents');
require('nativescript-platform');

/**
 * Function that adds the proper class when we navigate to a new page
 * @param args
 */
let deviceInfo, sizeGroupings = false;
let groupings = [1280,1024,800,600,540,480,400,360,320];

const setDevice = function(args) {
    const currentPage = args.object;

    let device;
    if (!deviceInfo) {
        switch (nsPlatform.platform) {
            case nsPlatform.type.IOS:
                device = 'ios ios';
                break;

            case nsPlatform.type.ANDROID:
                device = 'android android';
                break;

            case nsPlatform.type.WINDOWS:
                device = 'windows';
                break;
        }

        const screen = nsPlatform.screen;

		if (sizeGroupings) {
			let size = (screen.width < screen.height ? screen.width : screen.height);
			let found = false;
			for (let i=0;i<groupings.length;i++) {
				if (size >= groupings[i]) {
					device += groupings[i];
					found = true;
					break;
				}
			}
			if (!found) {
				device += size;
			}
		} else {
			if (screen.width < screen.height) {
				device += screen.width;
			} else {
				device += screen.height;
			}
		}

		const deviceName = nsPlatform.device.name || '';
        // Add device name; this is use
		device += " " + deviceName.replace(/[^a-z0-9]/gmi,'').toLowerCase();

		deviceInfo = device;
    } else {
        device = deviceInfo;
    }

    if (currentPage) {

        if (nsPlatform.platform === nsPlatform.type.ANDROID && nsPlatform.hasSoftNav()) {
            device += " softnav";
        }

        const data = currentPage.className || '';
        if (data.length) {
            currentPage.className = data + ' ' + device;
        } else {
            currentPage.className = device;
        }
    }
};

// Setup Events
Page.on(Page.navigatingToFirst, setDevice);

exports.sizeGroupings = function(val) {
	if (Array.isArray(val)) {
		if (val.length === 0) {
			sizeGroupings = false;
		} else {
			groupings = val.splice(0);
			groupings.sort(function (x, y) {
				if (x < y) {
					return 1;
				}
				else if (x > y) {
					return -1;
				}
				return 0;
			});
			sizeGroupings = true;
		}
	} else {
		if (sizeGroupings === !!val) {
			return;
		}
		sizeGroupings = !!val;
	}
	deviceInfo = null;
};