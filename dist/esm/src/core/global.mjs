const getWindow = function () {

    if (typeof window !== 'undefined') {

        return window;

    }

    return {};

};

export {getWindow};
