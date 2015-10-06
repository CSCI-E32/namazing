var app = angular.module('namazing', []);

app.directive('name', ['dateFilter', '$interval', function(dateFilter, $interval){
  var link = function(scope, element, attrs){
    element.html = fname + " " + lname;
  };

  return {
    link: link
  };
}]);
