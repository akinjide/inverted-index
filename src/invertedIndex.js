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
function load (url) {
  // body...
  // var url           = "http://localhost:8000/jasmine/books.json"
  var jsonresponse;
  
  // call to loadJSON() with anonymous callback
  loadJSON(
    url, 
    function (response) {
      // parse JSON string into object
      jsonresponse = JSON.parse(response);
    }
    // Arrow Function (ES6): parse JSON string into object
    // response => jsonresponse = JSON.parse(response)
  )
  return jsonresponse;
};

// Class definition / constructor
var Index = function () {
  // arguments.callee property contains the currently executing function.
  // The ‘if’ statement checks whether ‘this’ is an instance of the object and returns one if necessary
  if (!(this instanceof arguments.callee)) {
    return new Index();
  };

  this.index;
};

/**
 * [createIndex {{Method}} creates an index from the argument]
 * @param  {[JSON Object]} filePath [argument passed when this method is called]
 * @return {[Object]}       [returns list of words with indexes]
 */
Index.prototype.createIndex = function(filePath) {
  var file     = load(filePath)
    , posIndex = {}
    , posArr   = []
    , j        = 0
    , words
    , i
    , len;

  file.forEach(function(elem, index) {
    /**
     * converts value of elem to a string, removes Object key, whitespaces and other
     * text formatting.
     */
    words = JSON.stringify(elem)
      .replace(/,(?=\S)/g, ' ')
      .replace(/\btitle\b|\btext\b|,(?=\s)|[:.{}""]/g, '')
      .split(' '); 
    for (i = 0, len = words.length; i < len; i++) {
      if (posIndex.hasOwnProperty(words[i])) {
        posArr = posIndex[words[i]];
        if (posArr.indexOf(index) === -1) {
          posArr.push(index);
          posIndex[words[i]] = posArr;
        }
      } else {
        posIndex[words[i]] = [index];
      }
    }
  });
  this.index = posIndex;
};

/**
 * [getIndex contains words and indexes]
 * @return {[Object]} [returns words and indexes of 'filePath' argument]
 */
Index.prototype.getIndex = function() {
  return this.index;
};

/**
 * [searchIndex query createIndex return value]
 * @param terms [contains the words to search]
 * @return {[Array]}       [returns Array of numbers, representing the index of the argument]
 */
Index.prototype.searchIndex = function(terms) {
  var fn
    , i
    , j
    , k
    , len
    , len2
    , posArr = []
    , location;

    fn = this.index;
    !(typeof terms === 'object')
      ? location = arguments
        : location = terms

    for (i in fn) {
      for (j = 0, len = location.length; j < len; j++) {
        if (i === location[j]) {
          for (k = 0, len2 = fn[i].length; k < len2; k++) {
            posArr.push(fn[i][k]);
          };
        };
      };
    };
    
    // for (var i = 0; i < )
    // if (fn[i] === location.indexOf[location[i]]) {
   // }
  return posArr;
};