/* const bookTitle = document.getElementById("titre").value;
const bookAuthor = document.getElementById("auteur").value;
const bookPage = document.getElementById("pages").value;

const submitBtn = document.querySelector(".submit"); */
const displayBooks = document.querySelector(".displayBook")

let myLibrary = [];

// Constructor - store the book infos
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    //this.infos = function(){
        //return `${title} by ${author}, ${pages} pages and is ${read}.`
    //}
}

//Create newBook, push it in Library array
function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const hobbit = addBookToLibrary("Hobbit", "Tolkien", "452", "not read yet");
const harryP = addBookToLibrary("Harry Potter", "J.R ", "764", "read");

console.log(myLibrary[0]);
console.log(myLibrary[1]);

function displayBook(){
    //For each books in myLibrary
    myLibrary.forEach(books => {
        //for each infos of the books
        for (let bookInfos in books){
            //display the books infos
            console.log(`${bookInfos}: ${books[bookInfos]}`)
        }
    })
    
}
displayBook();