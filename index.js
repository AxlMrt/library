const display = document.querySelector(".display");
const submitBtn = document.querySelector(".submitBtn");

let myLibrary = [];

// Constructor - store the book infos
function Book(title, author, pages, read){
    this.Titre = title;
    this.Auteur = author;
    this.Pages = pages;   
    if (read === true){
        this.Lu = "Déjà lu";
    }else{
        this.Lu = "Pas encore lu";
    }
}

//Create newBook, push it in Library array
function addBookToLibrary(){
    const title = document.getElementById("titre").value;
    const author = document.getElementById("auteur").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById('isRead').checked;

    // Store the values
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("pages").value = "";

    //If one of the input is empty, return an alert
    if(title === "" || author === "" || pages === ""){
        return alert("Les champs doivent être remplis");
    }

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBook(){
    display.innerHTML = "";
    //For each books in myLibrary
    myLibrary.forEach(books => {
        //create div for each book
        const card = document.createElement("div");
        card.classList.add("bookDisplay");
        display.append(card);
        //create a delete button for each card
        const closeBtn = document.createElement("button");
        closeBtn.setAttribute("id", "closeBtn");
        closeBtn.textContent = "Delete"
        card.appendChild(closeBtn)
        //Make the button work
        closeBtn.addEventListener("click", function() {
            this.parentElement.remove()
        })
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
    displayBook();
})

// Close & Open modal
const newBookBtn = document.querySelector(".button");
const overlay = document.getElementById("popup");

newBookBtn.addEventListener("click", () =>{
    overlay.classList.add("hidden");
})

submitBtn.addEventListener("click", () =>{
    overlay.classList.remove("hidden");
})