var app = angular.module('namazing', []);

app.directive('name', ['nameVal', function(name){

  var nameVal = {
    fname: "JaZahn",
    lname: "Clevenger"
  };

  var link = function(scope, element, attrs){
    element.html(name.fname + " " + name.lname);
    //element.html("something");
  };

  return {
    link: link
  };
}]);

app.value('nameVal', {
  fname: "JaZahn",
  lname: "Clevenger"
});
