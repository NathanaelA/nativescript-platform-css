var createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    var page = args.object; 

    // Console  Log out all the settings
    page.bindingContext = createViewModel(args.object);
}

exports.onNavigatingTo = onNavigatingTo;