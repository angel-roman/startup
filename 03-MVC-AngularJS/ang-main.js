/*
 angular-file-upload v2.3.4
 https://github.com/nervgh/angular-file-upload
*/

var app = angular.module('myApp', []);


app.controller('MainController', ['$scope', function($scope){

	var Movie = function() {
	 	this.title = '';
	    this.year = 0;
	    this.description = '';
	    this.imgPath = 'img/nocover.jpg';
	    this.set = function(attribute, value) {
	      if (!attribute){
	        console.log('The attribute has not been seted correctly. Please, use the function set(title,movieTitle)');
	      }
	      else {
	        this[attribute] = value;
	      }
	    }
	};


	var mov1 = new Movie();
	mov1.set('title', 'X-men');
	mov1.set('year', '2000');
	mov1.set('description', 'mutants everywhere');
	mov1.set('imgPath', 'img/xmen.jpg');

	var mov2 = new Movie();
	mov2.set('title', 'The Conjuring 2');
	mov2.set('year', '2016');
	mov2.set('description', 'demons everywhere');
	mov2.set('imgPath', 'img/conjuring2.jpg');

	console.log(mov1);

	movies = [mov1, mov2];

	$scope.movies = movies;

	/*$scope.movies = [
		{title: 'X-Men', year: '2000', description: 'mutants everywhere'},
		{title: 'The Conjuring 2', year: '2016', description: 'demons everywhere'}
	];*/
	  	$scope.showMovies = function(index) {
	  	angular.element( document.querySelector( '.showtime' ) ).css('display', 'block');
  		angular.element( document.querySelector( '#hiddenForm' ) ).css('display', 'none');
 		
  		$scope.inTitle = $scope.movies[index].title;
  		$scope.inYear = 'released in ' + $scope.movies[index].year;
  		$scope.inDescription = $scope.movies[index].description;
  		$scope.imagePath = $scope.movies[index].imgPath;
  	};

	$scope.addMovie = function () {
		var mov = new Movie();
		mov.set('title', $scope.title);
		mov.set('year', $scope.year);
		mov.set('description', $scope.description);
		$scope.movies.push(mov);
		console.log($scope.movies);
	};

	$scope.deleteMovie = function(index) {
		console.log(index);
		var confirmDelete = confirm('This movie will be deleted. Continue?')
		if(confirmDelete) {
	   	$scope.movies.splice(index, 1);
 	}
  };

  	$scope.modMovies = function(index) {
  		angular.element( document.querySelector( '.showtime' ) ).css('display', 'none');
  		angular.element( document.querySelector( '#hiddenForm' ) ).css('display', 'block');
  		$scope.modTitle = $scope.movies[index].title;
  		$scope.modYear = $scope.movies[index].year;
  		$scope.modDescription = $scope.movies[index].description;
  		$scope.indexValue = index;
  	};

  	$scope.saveChanges = function() {
  		var movie = $scope.movies[$scope.indexValue];
  		$scope.movies[$scope.indexValue].set('title', $scope.modTitle);
		$scope.movies[$scope.indexValue].set('year', $scope.modYear);
		$scope.movies[$scope.indexValue].set('description', $scope.modDescription);
		$scope.modTitle = '';
		$scope.modYear = '';
		$scope.modDescription = '';
  	};



 }]);
