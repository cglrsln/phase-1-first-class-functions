

const receivesAFunction = (callback) => {
    return callback();
};


const returnsANamedFunction = () => {
    return function namedFunction(){};
};


const returnsAnAnonymousFunction = () => {
    return function(){};
};