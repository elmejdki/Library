const formButton = document.getElementById('form_submit_button');
const bookTitle = document.getElementById('book_title');
const bookStatus = document.querySelector("input[name='status']:checked");
const bookAuthor = document.getElementById('book_author');
const bookPages = document.getElementById('book_pages');
const booksContainer = document.getElementById('books_container');
const imageUrl = document.getElementById('image_url');
const formContainer = document.getElementById('form_container');
const newBookbtn = document.querySelector('.add-btn');
const closeBtn = document.querySelector('.cross-sign');

const books = [];

newBookbtn.addEventListener('click', () => {
  formContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  formContainer.style.display = 'none';
});

function Book(title, status, author, imageUrl, numPages) {
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

function render() {
  booksContainer.innerHTML = '';
  books.forEach((el) => {
    const bookContainer = document.createElement('span');
    const deleteBtn = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', el.imageUrl);
    const bookFooter = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const status = document.createElement('span');
    const pages = document.createElement('span');

    deleteBtn.classList.add('smaller-cross');
    deleteBtn.textContent = 'X';
    bookContainer.classList.add('book_container');
    title.classList.add('title');
    author.classList.add('author');
    status.classList.add('status');
    pages.classList.add('pages');
    imageContainer.classList.add('image_container');
    image.classList.add('img');
    bookFooter.classList.add('book-footer-container');

    bookContainer.appendChild(deleteBtn);
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

formButton.addEventListener('click', (e) => {
  e.preventDefault();

  addBookToLibrary({
    title: bookTitle.value,
    status: bookStatus.value,
    author: bookAuthor.value,
    imageUrl: imageUrl.value,
    pages: bookPages.value,
  });

  bookTitle.value = '';
  bookAuthor.value = '';
  bookPages.value = '';
  imageUrl.value = '';

  render();
});

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
  imageUrl: 'https://m.media-amazon.com/images/I/51EiPPgS4rL._AA210_.jpg',
  pages: 245,
});

render();
