/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
const display = document.querySelector('.display');
const submitBtn = document.querySelector('.submitBtn');
const newBookBtn = document.querySelector('.button');
const overlay = document.getElementById('popup');
const form = document.getElementById('makeBook');

const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

// Constructor - store the book infos
class Book {
  constructor(title, author, pages, read) {
    this.Titre = title;
    this.Auteur = author;
    this.Pages = pages;

    if (read === true) {
      this.Lu = 'Lu';
    } else {
      this.Lu = 'Non lu';
    }
  }
}

function displayBook() {
  display.innerHTML = '';

  // For each books in myLibrary
  myLibrary.forEach((books) => {
    // create div for each book
    const card = document.createElement('div');
    const deleteX = document.createElement('span');
    const modifyBtn = document.createElement('button');

    card.classList.add('bookDisplay');
    modifyBtn.setAttribute('id', 'modifyBtn');
    modifyBtn.textContent = 'status';
    deleteX.textContent = 'x';

    card.append(deleteX);
    // eslint-disable-next-line func-names
    deleteX.addEventListener('click', function () {
      myLibrary.splice(this.parentElement.getAttribute('data-index'), 1);
      this.parentElement.remove();
      localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    });

    // eslint-disable-next-line no-restricted-syntax
    for (const bookInfos in books) {
      // display the books infos
      const para = document.createElement('p');
      para.textContent = `${bookInfos}: ${books[bookInfos]}`;
      para.classList.add('bookText');
      card.append(para);
    }

    // Modify the read line
    modifyBtn.addEventListener('click', () => {
      if (books.Lu === 'Lu') {
        books.Lu = 'Non lu';
      } else {
        books.Lu = 'Lu';
      }
      localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
      displayBook();
    });
    display.append(card);
    card.append(modifyBtn);
  });
}

// Create newBook, push it in Library array
// eslint-disable-next-line consistent-return
function addBookToLibrary() {
  const title = document.getElementById('titre').value;
  const author = document.getElementById('auteur').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('isRead').checked;

  // Reset the values
  document.getElementById('titre').value = '';
  document.getElementById('auteur').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('isRead').checked = false;

  // If one of the input is empty, return an alert
  if (title === '' || author === '' || pages === '') {
    // eslint-disable-next-line no-alert
    return 'Nope';
  }

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  displayBook();
}

function handleForm(event) {
  event.preventDefault();
}

// ADDEVENTLISTENER //
form.addEventListener('submit', handleForm);

newBookBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

submitBtn.addEventListener('click', () => {
  addBookToLibrary();
  overlay.classList.remove('hidden');
});

window.addEventListener('load', displayBook);
