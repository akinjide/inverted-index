describe('invertedIndex: ', function() {
  // Global Variables
  var jsonData
    , url       = "http://localhost:4000/jasmine/books.json"
    , index     = new Index() // create an instance of the Index constructor
    , ref       = index.createIndex(url)
    , getIndex  = index.getIndex();

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
      expect(getIndex.length).not.toBe(0);
      expect(getIndex).toBeDefined();
    });

    it('should verify the index maps the string keys to the correct objects in the JSON array', function() {
      expect(getIndex['Alice']).toEqual([0]);
      expect(getIndex['Lord']).toEqual([1])
      expect(getIndex['of']).toEqual([0, 1]);
      expect(getIndex['a']).toEqual([0, 1])
    });
  });

  describe('Search index', function() {
    it('should return an array of indices of the correct objects that contain the words in the search query', function() {
      expect(index.searchIndex('Alice', 'of', 'Rings')).toEqual([0, 0, 1, 1]);
      expect(index.searchIndex(['Alice', 'of', 'Rings'])).toEqual([0, 0, 1, 1]);
    });
  });
});