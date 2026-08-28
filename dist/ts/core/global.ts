const getWindow = function () {

    if (typeof window !== 'undefined') {

        return window;

    }

    return {};

};

exports.getWindow = getWindow;
