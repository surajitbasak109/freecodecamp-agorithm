function convertHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, "&lt;").replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

var result = convertHTML("Hamburgers < Pizza < Tacos");
console.log(result);