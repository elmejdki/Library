const formButton = document.getElementById('form_submit_button');
const bookTitle = document.getElementById('book_title');
const bookStatus = document.querySelector("input[name='status']:checked");
const bookAuthor = document.getElementById('book_author');
const bookPages = document.getElementById('book_pages');
const booksContainer = document.getElementById('books_container');

const books = [];

function Book(title, status, author, imageUrl, numPages) {
  // the constructor...
  this.title = title;
  this.status = status;
  this.author = author;
  this.imageUrl = imageUrl;
  this.pages = numPages;
}

function addBookToLibrary({ title, status, author, imageUrl, pages }) {
  const book = new Book(title, status, author, imageUrl, pages);
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
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', el.imageUrl);
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
    imageContainer.className = 'image_container';
    image.className = 'img';
    bookFooter.className = 'book-footer-container';

    imageContainer.appendChild(image);
    bookContainer.appendChild(imageContainer);
    title.textContent = el.title;
    bookContainer.appendChild(title);
    author.textContent = el.author;
    bookContainer.appendChild(author);
    status.textContent = el.status;
    pages.textContent = el.pages;
    bookFooter.appendChild(status);
    bookFooter.appendChild(pages);
    bookContainer.appendChild(bookFooter);

    booksContainer.appendChild(bookContainer);
  });
}

addBookToLibrary({
  title: 'Crazy Little Thing',
  status: 'unread',
  author: 'TRACY BROGAN',
  imageUrl: 'https://m.media-amazon.com/images/I/41M36-Lt-ZL._AA210_.jpg',
  pages: 203,
});

addBookToLibrary({
  title: 'Mustard Seed',
  status: 'unread',
  author: 'LAILA IBRAHIM',
  imageUrl: 'https://m.media-amazon.com/images/I/51E17SVYsGL._AA210_.jpg',
  pages: 315,
});

addBookToLibrary({
  title: 'Scarlet Odyssey',
  status: 'unread',
  author: 'C. T. RWIZI',
  imageUrl: 'https://m.media-amazon.com/images/I/51ZHHoQib4L._AA210_.jpg',
  pages: 251,
});

addBookToLibrary({
  title: 'never look back',
  status: 'read',
  author: 'MARRY BURTON',
  imageUrl: 'https://m.media-amazon.com/images/I/41-nVMyG0tL._AA210_.jpg',
  pages: 245,
});

addBookToLibrary({
  title: 'Legacy of Lies',
  status: 'unread',
  author: 'ROBERT BAILLEY',
  imageUrl: 'https://m.media-amazon.com/images/I/41QNl7Ph+JL._AA210_.jpg',
  pages: 402,
});

addBookToLibrary({
  title: 'Golden Poppies',
  status: 'read',
  author: 'LAILA IBRAHIM',
  imageUrl: 'https://m.media-amazon.com/images/I/41M36-Lt-ZL._AA210_.jpg',
  pages: 245,
});

render();
