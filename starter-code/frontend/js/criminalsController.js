angular.module('SmoothCriminal', [])
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http){

	var self = this;
	self.all = [];
	self.addCriminals = addCriminals;
	self.newCriminal = {};

function getCriminals(){

	$http
		.get('http://localhost:3000/criminals')
		.then(function(response){
			self.all = response.data.criminals;
		});
}
getCriminals();

  function addCriminals(){
    $http
      .post('http://localhost:3000/criminals', this.newCriminal)
      .then(function(response){    
          self.all.push(response.data.criminals);
          
  });
}}