/**
 * [loadJSON create a new instance of XMLHttpRequest and load synchronously]
 * @param  {[String]} url      [link to books.json]
 * @param  {Function} callback [Anonymous callback]
 * @return {[JSON String]}     [returns a JSON String]
 */
function loadJSON (url, callback) {
  // body...
  var xmlhttp = typeof XMLHttpRequest != 'undefined' 
    ? new XMLHttpRequest() 
      : new ActiveXObject('Microsoft.XMLHTTP');

  if (xmlhttp.overrideMimeType) {
    xmlhttp.overrideMimeType("application/json");
  };

  xmlhttp.open('GET', url, false);

  // Stores a function that is called whenever the readyState property changes 
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      /**
       * Required use of an anonymous callback as .open will NOT return a value 
       * but simply returns undefined in asynchronous mode
       */
      callback(xmlhttp.responseText);
    };
  };
  xmlhttp.send(null);
};

/**
 * [load call loadJSON() with two argument a url and a callback]
 * @return {[Object]} [JSON Object]
 */
function load () {
  // body...
  var url           = "http://localhost:8000/jasmine/books.json"
    , jsonresponse  = undefined;
  
  // call to loadJSON() with anonymous callback
  loadJSON(
    url, 
    function (response) {
      // body...
      // parse JSON string into object
      jsonresponse = JSON.parse(response);
    }
    // Arrow Function (ES6): parse JSON string into object
    // response => jsonresponse = JSON.parse(response)
  )
  return jsonresponse;
};

var a = load();
console.log(a);