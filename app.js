const books = [];

const formButton = document.getElementById('form_submit_button');
const bookTitle = document.getElementById('book_title');
const bookStatus = document.querySelector("input[name='status']:checked");
const bookAuthor = document.getElementById('book_author');
const bookPages = document.getElementById('book_pages');
const booksContainer = document.getElementById('books_container');

function Book(title, status, author, numPages) {
  // the constructor...
  this.title = title;
  this.status = status;
  this.author = author;
  this.pages = numPages;
}

function addBookToLibrary({ title, status, author, pages }) {
  const book = new Book(title, status, author, pages);
  books.push(book);
}

formButton.addEventListener('click', (e) => {
  e.preventDefault();

  addBookToLibrary({
    title: bookTitle.value,
    status: bookStatus.value,
    author: bookAuthor.value,
    pages: bookPages.value,
  });

  bookTitle.value = '';
  bookAuthor.value = '';
  bookPages.value = '';
});

function render() {
  books.forEach((el) => {
    const bookContainer = document.createElement('div');
    const image = document.createElement('div');
    const bookFooter = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const status = document.createElement('span');
    const pages = document.createElement('span');

    bookContainer.className = 'book_container';
    title.className = 'title';
    author.className = 'author';
    status.className = 'status';
    pages.className = 'pages';
    image.className = 'book-img';
    bookFooter.className = 'book-footer-container'


    bookContainer.appendChild(image);
    title.textContent = el.title;
    bookContainer.appendChild(title);
    author.textContent = el.author;
    bookContainer.appendChild(author);
    status.textContent = el.status;
    pages.textContent = el.pages;
    bookContainer.appendChild(bookFooter);
    bookFooter.appendChild(status);
    bookFooter.appendChild(pages);

    booksContainer.appendChild(bookContainer);
  });
}

addBookToLibrary({
  title: 'Black is white',
  status: 'unread',
  author: 'Talal actobar',
  pages: 245,
});

addBookToLibrary({
  title: "You can't Hurt me",
  status: 'read',
  author: 'David Coggins',
  pages: 492,
});

addBookToLibrary({
  title: 'Rich Dad Poor Dad',
  status: 'unread',
  author: 'David Kiwasaki',
  pages: 329,
});

addBookToLibrary({
  title: 'start with why',
  status: 'unread',
  author: 'Micheal Jackson',
  pages: 245,
});


addBookToLibrary({
  title: 'start with why',
  status: 'unread',
  author: 'Micheal Jackson',
  pages: 245,
});
addBookToLibrary({
  title: 'start with why',
  status: 'unread',
  author: 'Micheal Jackson',
  pages: 245,
});
addBookToLibrary({
  title: 'start with why',
  status: 'unread',
  author: 'Micheal Jackson',
  pages: 245,
});
addBookToLibrary({
  title: 'start with why',
  status: 'unread',
  author: 'Micheal Jackson',
  pages: 245,
});
addBookToLibrary({
  title: 'start with why',
  status: 'unread',
  author: 'Micheal Jackson',
  pages: 245,
});
addBookToLibrary({
  title: 'start with why',
  status: 'unread',
  author: 'Micheal Jackson',
  pages: 245,
});
addBookToLibrary({
  title: 'start with why',
  status: 'unread',
  author: 'Micheal Jackson',
  pages: 245,
});
addBookToLibrary({
  title: 'start with why',
  status: 'unread',
  author: 'Micheal Jackson',
  pages: 245,
});
addBookToLibrary({
  title: 'start with why',
  status: 'unread',
  author: 'Micheal Jackson',
  pages: 245,
});
addBookToLibrary({
  title: 'start with why',
  status: 'unread',
  author: 'Micheal Jackson',
  pages: 245,
});

render();
