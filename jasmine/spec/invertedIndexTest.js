describe('invertedIndex: ', function() {
  describe('Read book data', function() {
    var jsonData;

    beforeEach(function(done) {
      var url      = "http://localhost:8000/jasmine/books.json";
      var xmlhttp  = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          jsonData = JSON.parse(xmlhttp.responseText);
          done();
        }
      };

      xmlhttp.open("GET", url, true);
      xmlhttp.send();
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
    
  });

  xdescribe('Search index', function() {
    
  });
});