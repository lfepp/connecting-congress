var passedData = decodeURIComponent(window.location.href);
var data = JSON.parse(passedData.substring(35));
console.dir(data);
console.log(typeof data);
