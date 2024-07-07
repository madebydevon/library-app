const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (read == true) {
    this.read = "read";
  } else {
    this.read = "not read yet";
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  return myLibrary;
}