// allow user to add a book to the library using a modal
const dialog = document.getElementById("dialog");

document.getElementById("new-book").addEventListener("click", () => {
  dialog.showModal();
});

document.getElementById("cancel").addEventListener("click", () => {
  dialog.close();
});

document.getElementById("create").addEventListener("click", () => {
  processFormData();
});

// create the library itself

const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: "Have read",
  },
  {
    title: "Book name",
    author: "Legendary author",
    pages: 502,
    read: "Have read",
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// add a new book to the library and display the library again
function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  displayLibrary();
}

function processFormData() {
  const titleInput = document.querySelector("input[name='book-title']");
  let bookTitle = titleInput.value;

  const authorInput = document.querySelector("input[name='book-author']");
  let bookAuthor = authorInput.value;

  const pagesInput = document.querySelector("input[name='book-pages']");
  let totalPages = pagesInput.value;

  const readStatusInput = document.querySelector("input[name='read-status']");
  let readStatus = translateReadStatus(readStatusInput.checked);

  if (validateInputs(`${bookTitle}`, `${bookAuthor}`, `${totalPages}`) == true) {
    addBookToLibrary(`${bookTitle}`, `${bookAuthor}`, `${totalPages}`, `${readStatus}`);
    dialog.close();
  } else {
    return;
  }
}

function validateInputs(bookTitle, bookAuthor, totalPages) {
  if (bookTitle.length > 0 && bookAuthor.length > 0 && isNaN(bookAuthor) == true && totalPages > 0) {
    document.getElementById("create").setAttribute("style", "background-color: default;");
    return true;
  } else {
    document.getElementById("create").setAttribute("style", "background-color: red;");
    return false;
  }
}

function translateReadStatus(readStatus) {
  if (readStatus == true) {
    readStatus = "Have read";
    return readStatus;
  } else {
    readStatus = "Have not read yet";
    return readStatus;
  }
}

function displayLibrary() {
  document.createElement;
}
