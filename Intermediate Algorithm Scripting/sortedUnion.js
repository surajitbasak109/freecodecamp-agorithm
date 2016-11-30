function uniteUnique(arr) {
    return Array.prototype.slice.call(arguments).reduce(function (a, b) {
        return a.concat(b);
    }, []).filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) == index;
    }, []);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);