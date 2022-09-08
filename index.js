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

function addBookToLibrary(){
//Create newBook, push it in array and take its infos.
    const newBook = new Book("Hobbit", "Tolkien", "432");
    myLibrary.push(newBook)
}
addBookToLibrary()
console.log(myLibrary[0].infos())