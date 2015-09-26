describe('invertedIndex: ', function() {
  describe('Read book data', function() {
  //var url = "books.json";

  // xmlhttp.onreadystatechange = function() {
  // if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //     var myArr = JSON.parse(xmlhttp.responseText);
  //     myFunction(myArr);
  //     }
  // }

  // xmlhttp.open("GET", url, true);
  // xmlhttp.send();

  // function myFunction (myArr) {
  //   // body...
  //   console.log(myArr);
  // }
  
    it('should read the JSON file', function() {
      expect(json).toBeDefined();
    });

    it('should assert that it is not empty', function() {
      expect(json.length).toBeGreaterThan(1);
    });
  });

  xdescribe('Populate Index', function() {
    
  });

  xdescribe('Search index', function() {
    
  });
});