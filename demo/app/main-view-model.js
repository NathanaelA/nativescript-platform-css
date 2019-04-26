const Observable = require("tns-core-modules/data/observable").Observable;
const utils = require('tns-core-modules/utils/utils');


function createViewModel(page) {
    const viewModel = new Observable();

    const data = 'CSS Classes: \r\n---------------------\r\n' + page.className.replace(/\s/g,"\r\n");
    viewModel.set('data',data);

    viewModel.tap = function() {
        utils.openUrl("http://www.master.technology");
    };

    return viewModel;}

exports.createViewModel = createViewModel;
