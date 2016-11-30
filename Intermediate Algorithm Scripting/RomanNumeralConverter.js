function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var srcKey = Object.keys(source);
    arr = collection.filter(function (obj) {
        for (var i = 0; i < srcKey.length; i++) {
            if (!obj.hasOwnProperty(srcKey[i]) || obj[srcKey[i]] !== source[srcKey[i]]) {
                return false;
            }
        }
        return true;
    });

    // Only change code above this line
    return arr;
}

whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});