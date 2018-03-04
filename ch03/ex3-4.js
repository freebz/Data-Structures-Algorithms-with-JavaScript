// 3.4.2 리스트로 상점 관리하기

var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}


function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
	print(list.getElement());
    }
}


function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
	if (list.getElement() instanceof Customer) {
	    print(list.getElement()["name"] + ", " +
		  list.getElement()["movie"]);
	}
	else {
	    print(list.getElement());
	}
    }
}


var customers = new List();


function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}


function checkOut(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
	var c = new Customer(name, movie);
	customerList.append(c);
	filmList.remove(movie);
    }
    else {
	print(movie + " is not available.");
    }
}


var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}
print("Available movies: \n");
displayList(movieList);
checkOut("Jane Doe", "The Godfather", movieList, customers);
print("\nCustomer Rentals: \n");
displayList(customers);
