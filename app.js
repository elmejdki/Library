let books = [];

function Book(title, status, author, imageUrl, numPages) {
  this.title = title;
  this.status = status;
  this.author = author;
  this.imageUrl = imageUrl;
  this.pages = numPages;
  this.id = books.length === 0 ? 1 : books[books.length - 1].id + 1;
}

function addBookToLibrary({ title, status, author, imageUrl, pages }) {
  const book = new Book(title, status, author, imageUrl, pages);
  books.push(book);
}

const formButton = document.getElementById('form_submit_button');
const bookTitle = document.getElementById('book_title');
const bookAuthor = document.getElementById('book_author');
const bookPages = document.getElementById('book_pages');
const booksContainer = document.getElementById('books_container');
const imageUrl = document.getElementById('image_url');
const formContainer = document.getElementById('form_container');
const newBookbtn = document.querySelector('.add-btn');
const closeBtn = document.querySelector('.cross-sign');

function render() {
  booksContainer.innerHTML = '';

  let bookContainer;
  let deleteBtn;
  let imageContainer;
  let image;
  let bookFooter;
  let title;
  let author;
  let status;
  let pages;

  let toggleWrapper;
  let toggleNormal;
  let checkboxInput;
  let toggleLabel;

  books.forEach((el) => {
    bookContainer = document.createElement('span');
    deleteBtn = document.createElement('div');
    imageContainer = document.createElement('div');
    image = document.createElement('img');
    image.setAttribute('src', el.imageUrl);
    bookFooter = document.createElement('div');
    title = document.createElement('div');
    author = document.createElement('div');
    status = document.createElement('span');
    pages = document.createElement('span');

    toggleWrapper = document.createElement('div');
    toggleNormal = document.createElement('div');
    checkboxInput = document.createElement('input');
    toggleLabel = document.createElement('label');

    deleteBtn.classList.add('smaller-cross');
    deleteBtn.textContent = 'X';
    bookContainer.classList.add('book_container');
    title.classList.add('title');
    author.classList.add('author');
    status.classList.add('status');
    if (el.status === 'read') {
      checkboxInput.className = 'active';
    }
    pages.classList.add('pages');
    imageContainer.classList.add('image_container');
    image.classList.add('img');
    bookFooter.classList.add('book-footer-container');

    toggleWrapper.className = 'toggle-wrapper';
    toggleNormal.className = 'toggle normal';
    checkboxInput.setAttribute('type', 'checkbox');
    toggleLabel.className = 'toggle-item';
    toggleLabel.setAttribute('for', 'normal');

    bookContainer.appendChild(deleteBtn);
    imageContainer.appendChild(image);
    bookContainer.appendChild(imageContainer);
    title.textContent = el.title;
    bookContainer.appendChild(title);
    author.textContent = el.author;
    bookContainer.appendChild(author);
    status.textContent = el.status;
    pages.textContent = `${el.pages} pages`;

    toggleNormal.appendChild(checkboxInput);
    toggleNormal.appendChild(toggleLabel);
    toggleWrapper.appendChild(toggleNormal);
    toggleWrapper.appendChild(status);

    bookFooter.appendChild(toggleWrapper);
    bookFooter.appendChild(pages);
    bookContainer.appendChild(bookFooter);

    booksContainer.appendChild(bookContainer);

    deleteBtn.addEventListener('click', () => {
      books = books.filter((book) => book.id !== el.id);
      render();
    });

    toggleLabel.addEventListener('click', (e) => {
      const input = e.target.parentNode.querySelector('input');
      const statusSpan = e.target.parentNode.parentNode.querySelector('.status');

      if (el.status === 'read') {
        el.status = 'unread';
        statusSpan.textContent = 'unread';
      } else {
        el.status = 'read';
        statusSpan.textContent = 'read';
      }

      input.classList.toggle('active');
    });
  });
}

function validate() {
  const titleMsg = document.getElementById('title-length-valid');
  const authorMsg = document.getElementById('author-name-valid');
  titleMsg.style.display = 'none';
  authorMsg.style.display = 'none';
  let validAuthorName = true;
  const letterRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const validAuthor = () => {
    if (bookAuthor.value.length > 0 && letterRegex.test(bookAuthor.value.trim()) !== true) {
      authorMsg.style.display = 'block';
      authorMsg.textContent = 'invalid character detected!';
      validAuthorName = false;
    }
  };

  validAuthor();

  const title = bookTitle.value;
  if (title === '') {
    titleMsg.style.display = 'block';
    titleMsg.textContent = 'title cannot be empty';
    return false;
  } if (title.length > 20) {
    titleMsg.style.display = 'block';
    titleMsg.textContent = 'title cannot be more than 20 characters';
    return false;
  }

  if (validAuthorName) { return true; }
  return false;
}

formButton.addEventListener('click', (e) => {
  e.preventDefault();
  const status = document.querySelector("input[name='status']:checked").value;

  if (validate()) {
    addBookToLibrary({
      title: bookTitle.value,
      status,
      author: bookAuthor.value,
      imageUrl: imageUrl.value,
      pages: bookPages.value,
    });

    formContainer.style.display = 'none';

    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    imageUrl.value = '';
  }
  render();
});

newBookbtn.addEventListener('click', () => {
  formContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  formContainer.style.display = 'none';
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
