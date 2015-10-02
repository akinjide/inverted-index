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
  var jsonresponse  = undefined;
  
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
    , i;

  file.forEach(function(elem, index) {
    /**
     * converts value of elem to a string, removes Object key, whitespaces and other
     * text formatting.
     */
    words = JSON.stringify(elem)
      .replace(/\btitle\b|\btext\b|,(?=\s)|[:.{}""]/g, '')
      .replace(/,(?=\S)/g, ' ')
      .split(' ');
    for (i = 0; i < words.length; i++) {
      if (posIndex.hasOwnProperty(words[i])) {
        posArr = posIndex[words[i]];
        if (posArr.indexOf(index) === -1) {
          posArr.push(index);
          posIndex[words[i]] = posArr;
          console.log(posIndex[words[i]])
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

Index.prototype.searchIndex = function(terms) {
  var fn
    , i
    , j
    , k
    , len
    , posArr = []
    , line_num
    , location
    , locations;

    fn = this.index;
    !(typeof terms === 'object')
      ? console.log(location = arguments)
        : console.log(location = terms)

    for (i in fn) {
      for (j = 0; j < location.length; j++) {
        if (i === location[j]) 
          for (k = 0; k < fn[i].length; k++) {
            posArr.push(fn[i][k]);
          };
      }
     // console.log(fn[i])
    }
    return posArr;
};









