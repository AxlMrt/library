const display = document.querySelector(".display");
const submitBtn = document.querySelector(".submitBtn");

let myLibrary = [];

// Constructor - store the book infos
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;   
    if (read === true){
        this.read = "Already read";
    }else{
        this.read = "Not read yet"
    }

    //this.infos = function(){
        //return `${title} by ${author}, ${pages} pages and is ${read}.`
    //}
}

//Create newBook, push it in Library array
function addBookToLibrary(){
    const title = document.getElementById("titre").value;
    const author = document.getElementById("auteur").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById('isRead').checked;

    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("pages").value = "";

    if(title === "" || author === "" || pages === ""){
        return alert("Field cannot be empty");
    }

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

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
            para.textContent = `${bookInfos}: ${books[bookInfos]}`;
            card.appendChild(para);
        }
    })
}

submitBtn.addEventListener("click", () =>{
    addBookToLibrary();
    display.innerHTML = "";
    displayBook();
})

// Close & Open modal
const newBookBtn = document.querySelector(".button");
const overlay = document.getElementById("popup");

newBookBtn.addEventListener("click", () =>{
    overlay.classList.add("hidden")
})

submitBtn.addEventListener("click", () =>{
    overlay.classList.remove("hidden")
})