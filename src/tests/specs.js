describe('namazing', function(){
  describe('name element', function(){
    var compile, scope;
    var directiveEl;

    beforeEach(module('namazing'));
    beforeEach(function(){

      module(function($provide){
        $provide.value('nameVal', {fname: "one", lname: "two"});
      });

      inject(function($compile, $rootScope){
        compile = $compile;
        scope = $rootScope.$new();
      });
      var nameEl = angular.element('<name></name>');
      directiveEl = compile(nameEl)(scope);
      scope.$digest();


    });
    it('should provide a name', function(){
      expect(directiveEl.html()).toBe("one two");
    });
  });
});
