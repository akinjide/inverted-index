describe('invertedIndex: ', function() {
  // Global Variables
  var jsonData  = undefined
    , url       = "http://localhost:8000/jasmine/books.json"
    , index     = Index() // create an instance of the Index constructor
    , bookIndex  = index.createIndex(url); // call createIndex method, *bookIndex* used in suite : Populate Index

  describe('Read book data', function() {
    beforeEach(function() {
      /**
       * [jsonData store load() response from invertedindex script file]
       * @type {[Object]} [JSON Object]
       */
      jsonData = load(url);
    });

    it('should read the JSON file', function() {
      expect(jsonData).toBeDefined();
    });

    it('should assert that it is not empty', function() {
      expect(jsonData.length).toBeGreaterThan(0);
      jsonData.forEach(function(elem, index) {
        expect(elem).toEqual(jasmine.any(Object));
      });
    });

    it('should contain a property value string for each object in JSON file', function() {
      jsonData.forEach(function(elem, index) {
        for (var i in elem) {
          expect(elem[i]).toEqual(jasmine.any(String))
        }
      });
    });
  });

  describe('Populate Index', function() {
    it('should verify index is created once JSON file has been read', function() {
      expect(bookIndex.length).not.toBe(0);
    });

    it('should ensure index is correct', function() {
      bookIndex.forEach(function(elem, index) {
        expect(index).toEqual(jasmine.any(Number));
      })
    });

    xit('should verify the index maps the string keys to the correct objects in the JSON array', function() {

    });
  });

  xdescribe('Search index', function() {
    
  });
});