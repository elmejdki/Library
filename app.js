const firebaseConfig = {
  apiKey: 'AIzaSyB9h-hEbWsJ7wRjflGISx8D2AltVhfofVg',
  authDomain: 'librarybooks-13be3.firebaseapp.com',
  databaseURL: 'https://librarybooks-13be3.firebaseio.com',
  projectId: 'librarybooks-13be3',
  storageBucket: 'librarybooks-13be3.appspot.com',
  messagingSenderId: '459091533981',
  appId: '1:459091533981:web:839fb561e89b2e55c17474'
};

// TODO: please fix the rendring later

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const booksRef = database.ref('books');

booksRef.on('value', (dataSnapshot) => {
  render(dataSnapshot.val());
});

function Book(title, status, author, imageUrl, numPages) {
  this.title = title;
  this.status = status;
  this.author = author;
  this.imageUrl = imageUrl || 'https://www.brantlibrary.ca/en/resourcesGeneral/default-river.png';
  this.pages = numPages;
}

function addBookToLibrary({ title, status, author, imageUrl, pages }) {
  const book = new Book(title, status, author, imageUrl, pages);
  const newRef = booksRef.push();
  newRef.set(book);
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

function render(books) {
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

  for(let bookKey in books) {
    const key = bookKey;

    bookContainer = document.createElement('span');
    deleteBtn = document.createElement('div');
    imageContainer = document.createElement('div');
    image = document.createElement('img');
    image.setAttribute('src', books[bookKey].imageUrl);
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
    if (books[bookKey].status === 'read') {
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
    title.textContent = books[bookKey].title;
    bookContainer.appendChild(title);
    author.textContent = books[bookKey].author;
    bookContainer.appendChild(author);
    status.textContent = books[bookKey].status;
    pages.textContent = `${books[bookKey].pages} pages`;

    toggleNormal.appendChild(checkboxInput);
    toggleNormal.appendChild(toggleLabel);
    toggleWrapper.appendChild(toggleNormal);
    toggleWrapper.appendChild(status);

    bookFooter.appendChild(toggleWrapper);
    bookFooter.appendChild(pages);
    bookContainer.appendChild(bookFooter);

    booksContainer.appendChild(bookContainer);

    deleteBtn.addEventListener('click', () => {
      database.ref(`books/${key}`).remove();
    });

    toggleLabel.addEventListener('click', (e) => {
      const input = e.target.parentNode.querySelector('input');
      const statusSpan = e.target.parentNode.parentNode.querySelector('.status');
      
      if (statusSpan.textContent === 'read') {
        database.ref(`books/${key}/status`).set('unread');
      } else {
        database.ref(`books/${key}/status`).set('read');
      }

      input.classList.toggle('active');
    });
  }
}

formButton.addEventListener('click', (e) => {
  e.preventDefault();

  const status = document.querySelector("input[name='status']:checked").value;

  addBookToLibrary({
    title: bookTitle.value,
    status,
    author: bookAuthor.value,
    imageUrl: imageUrl.value,
    pages: bookPages.value,
  });

  bookTitle.value = '';
  bookAuthor.value = '';
  bookPages.value = '';
  imageUrl.value = '';

  formContainer.style.display = 'none';
});

newBookbtn.addEventListener('click', () => {
  formContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  formContainer.style.display = 'none';
});
