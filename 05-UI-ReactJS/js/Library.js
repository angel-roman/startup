class Library{

	constructor(){
		var library = [];
	}

	addMovie(movie){
		if(movie == 2){
			library.push(movie);
		}
		else {
			console.log('Be careful');
			alert('gola');
		}
	}

	deleteMovie(index) {
		library.splice(index);
	}

}