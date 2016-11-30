function translatePigLatin(str) {
    var n = str.toLowerCase().search(/[aeiuo]/);
    if (n === 0) {
        str = str + "way";
    } else if (n == -1) {
        str = str + "ay";
    } else {
        str = str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
    }
    return str;
}

translatePigLatin("consonant");