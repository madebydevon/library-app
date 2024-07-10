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

const myLibrary = [];

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

  displayLibrary(myLibrary);
}

function processFormData() {
  const titleInput = document.querySelector("input[name='book-title']");
  let bookTitle = titleInput.value;
  titleInput.value = "";

  const authorInput = document.querySelector("input[name='book-author']");
  let bookAuthor = authorInput.value;
  authorInput.value = "";

  const pagesInput = document.querySelector("input[name='book-pages']");
  let totalPages = pagesInput.value;
  pagesInput.value = "";

  const readStatusInput = document.querySelector("input[name='read-status']");
  let readStatus = translateReadStatus(readStatusInput.checked);
  readStatusInput.checked = false;

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

function displayLibrary(libraryArray) {
  const bookContainer = document.querySelector("div.lib-wrapper");
  clearDisplay(bookContainer);

  for (let items = 0; items < libraryArray.length; items++) {
    const wrapper = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const button = document.createElement("button");

    let bookWrapper = bookContainer.appendChild(wrapper);
    bookWrapper.classList.add("lib-item");
    let bookTitle = bookWrapper.appendChild(title);
    let bookAuthor = bookWrapper.appendChild(author);
    let totalPages = bookWrapper.appendChild(pages);
    let readStatus = bookWrapper.appendChild(read);
    let deleteButton = bookWrapper.appendChild(button);

    bookTitle.textContent = `${libraryArray[items].title}`;
    bookAuthor.textContent = `${libraryArray[items].author}`;
    totalPages.textContent = `${libraryArray[items].pages} page(s)`;
    readStatus.textContent = `${libraryArray[items].read}`;
    deleteButton.textContent = "Delete book";

    deleteButton.addEventListener("click", () => {
      libraryArray.splice(items, items + 1);
      clearDisplay(bookWrapper);
      displayLibrary(myLibrary);
    });

    readStatus.addEventListener("click", () => {
      if (libraryArray[items].read == "Have read") {
        libraryArray[items].read = "Have not read yet";
        readStatus.textContent = `${libraryArray[items].read}`;
      } else {
        libraryArray[items].read = "Have read";
        readStatus.textContent = `${libraryArray[items].read}`;
      }
    });
  }
}

function clearDisplay(element) {
  element.textContent = "";
}
