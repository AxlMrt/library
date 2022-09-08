const auteur = document.getElementById("auteur");
const titre = document.getElementById("titre");
const nbPage = document.getElementById("pages");
const submitBtn = document.querySelector(".submit")

let myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.infos = function(){
        return `${title} by ${author}, ${pages} pages.`
    }
}

//Create newBook, push it in array and take its infos.
//Need to make a function from it
const newBook = new Book("Hobbit", "Tolkien", "452");
myLibrary.push(newBook)
console.log(myLibrary[0].infos())



function addBookToLibrary(){

}

