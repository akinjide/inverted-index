describe('invertedIndex: ', function() {
  describe('Read book data', function() {
    var jsonData;

    beforeEach(function() {
      jsonData = load();
    });

    it('should read the JSON file', function() {
      expect(jsonData).toBeDefined();
    });

    it('should assert that it is not empty', function() {
      expect(jsonData.length).toBeGreaterThan(0);
      jsonData.forEach(function(elem, index) {
        expect(elem).toEqual(jasmine.any(Object));
        console.log(elem, index);
      });
    });

    it('should contain a property value string for each object in JSON file', function() {
      jsonData.forEach(function(elem, index) {
        console.log(elem, index);
        for (var i in elem) {
          console.log(elem[i]);
          expect(elem[i]).toEqual(jasmine.any(String))
        }
      });
    });
  });

  xdescribe('Populate Index', function() {
    it('should behave...', function() {
      expect()
    });
  });

  xdescribe('Search index', function() {
    
  });
});