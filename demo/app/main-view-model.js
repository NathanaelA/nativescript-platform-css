var Observable = require("data/observable").Observable;
var nsPlatform = require('nativescript-platform');
var utils = require('utils/utils');

function createViewModel(page) {
    var viewModel = new Observable();

    var data = 'CSS Classes: \r\n---------------------\r\n' + page.className.replace(/\s/g,"\r\n");
    viewModel.set('data',data);

    viewModel.tap = function() {
        utils.openUrl("http://www.master.technology");
    };

    return viewModel;
}

exports.createViewModel = createViewModel;