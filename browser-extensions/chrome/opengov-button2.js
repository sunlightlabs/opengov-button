function sendData (sData) {
  location.search = sData;
}

var where = location.search;
console.log(where);