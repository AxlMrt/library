/* const bookTitle = document.getElementById("titre").value;
const bookAuthor = document.getElementById("auteur").value;
const bookPage = document.getElementById("pages").value;*/
const submitBtn = document.querySelector(".submitBtn");

const display = document.querySelector(".display");

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

function displayBook(){
    //For each books in myLibrary
    myLibrary.forEach(books => {
        //create div for each book
        const card = document.createElement("div");
        card.classList.add("bookDisplay");
        display.append(card);
        //for each infos of the books
        for (let bookInfos in books){
            //display the books infos
            const para = document.createElement("p");
            para.textContent += `${bookInfos}: ${books[bookInfos]}`;
            card.appendChild(para);
        }
    })
}
displayBook();

// Close & Open modal
const newBookBtn = document.querySelector(".button");
const overlay = document.getElementById("popup");

newBookBtn.addEventListener("click", () =>{
    overlay.classList.add("hidden")
})

submitBtn.addEventListener("click", () =>{
    overlay.classList.remove("hidden")
})