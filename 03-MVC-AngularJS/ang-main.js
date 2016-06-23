var app = angular.module('myApp', []);


app.controller('MainController', ['$scope', function($scope){

	var Movie = function() {
	 	this.title = '';
	    this.year = 0;
	    this.description = '';
	    this.imgPath = 'img/nocover.jpg';
	    this.set = function(attribute, value) {
	      if (!attribute){
	        console.log('The attribute has not been set correctly. Please, use the function set(title,movieTitle)');
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

	movies = [mov1, mov2];

	$scope.movies = movies;

	$scope.showMovies = function(index) {
  		angular.element( document.querySelector( '.modPhotoContainer' ) ).css('display', 'none');
  		angular.element( document.querySelector( '.actionArea' ) ).css('display', 'none');
  		angular.element( document.querySelector( '.showtime' ) ).css('display', 'block');
  		angular.element( document.querySelector( '.inImage' ) ).css('box-shadow', '0px 3px 10px black');
 		
  		$scope.inTitle = $scope.movies[index].title;
  		$scope.inYear = 'released in ' + $scope.movies[index].year;
  		$scope.inDescription = $scope.movies[index].description;
  		$scope.imagePath = $scope.movies[index].imgPath;
  	};


	$scope.addMovie = function () {
		var tit = $scope.title;
		var yea = $scope.year;
		var des = $scope.description;
		var img = $scope.imgPath;
		console.log(yea);
		if(tit, yea, des, img != undefined && tit, yea, des, img != null && tit.length != 0 && yea.length != 0 && des.length != 0 && img.length != 0 ) {
			console.log(tit, yea, des, img);
			var mov = new Movie();
			mov.set('title', tit);
			mov.set('year', yea);
			mov.set('description', des);
			mov.set('imgPath', img);
			$scope.movies.push(mov);
			$scope.title = '';
			$scope.year = '';
			$scope.description = '';
			$scope.imgPath = '';

		}
		else {
			alert('Make sure all fields are completed correctly');
		}
	};

	$scope.deleteMovie = function(index) {
		var confirmDelete = confirm('This movie will be deleted. Continue?')
		if(confirmDelete) {
	   	$scope.movies.splice(index, 1);
	   	angular.element( document.querySelector( '.modPhotoContainer' ) ).css('display', 'none');
	   	angular.element( document.querySelector( '.actionArea' ) ).css('display', 'none');
	   	angular.element( document.querySelector( '.showtime' ) ).css('display', 'none');
 	}
  };

  	$scope.modMovies = function(index) {

  		angular.element( document.querySelector( '.inImage' ) ).css('box-shadow', '0px 3px 10px black');
  		angular.element( document.querySelector( '.modPhotoContainer' ) ).css('display', 'none');
  		angular.element( document.querySelector( '.showtime' ) ).css('display', 'none');
  		angular.element( document.querySelector( '.actionArea' ) ).css('display', 'none');
  		angular.element( document.querySelector( '.modPhotoContainer' ) ).css('display', 'block');
  		angular.element( document.querySelector( '.modForm' ) ).css('display', 'block');

  		$scope.modTitle = $scope.movies[index].title;
  		$scope.modYear = $scope.movies[index].year;
  		$scope.modDescription = $scope.movies[index].description;
  		$scope.modImgPath = $scope.movies[index].imgPath;
  		$scope.indexValue = index;
  	};

  	$scope.saveChanges = function() {
  		var tit = $scope.modTitle;
		var yea = $scope.modYear;
		var des = $scope.modDescription;
		var img = $scope.modImgPath;
		if(tit.length != 0 && yea.length != 0 && des.length != 0 && img.length != 0 ) {
			var movie = $scope.movies[$scope.indexValue];
	  		$scope.movies[$scope.indexValue].set('title', tit);
			$scope.movies[$scope.indexValue].set('year', yea);
			$scope.movies[$scope.indexValue].set('description', des);
			$scope.movies[$scope.indexValue].set('imgPath', img);
			$scope.modTitle = '';
			$scope.modYear = '';
			$scope.modDescription = '';
			$scope.modImgPath = '';
		}
		else {
			alert('Make sure all fields are completed correctly');
		}

  	};

  	$scope.showActionArea = function(){
  		angular.element( document.querySelector( '.modPhotoContainer' ) ).css('display', 'none');
  		angular.element( document.querySelector( '.actionArea' ) ).css('display', 'block');
  		angular.element( document.querySelector( '.showtime' ) ).css('display', 'none');
  	}



 }]);
