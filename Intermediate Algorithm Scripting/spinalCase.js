function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(/(?:_| )+/g).join('-');
}

spinalCase("thisIsSpinalTap");