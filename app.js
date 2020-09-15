let myLibrary = [];

function Book(title, num_pages, author) {
  // the constructor...
  this.title = title;
  this.num_pages = num_pages;
  this.author = author;
}

function addBookToLibrary(book) {
  // do stuff here
  // take user input
  myLibrary.push(book)
}

function eachBook(library) {
	// for(let book in library) {
	// 	
	// }
}

let bookOne = new Book("things fall apart", 4, "james");

addBookToLibrary(bookOne)