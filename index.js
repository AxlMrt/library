const display = document.querySelector(".display");
const submitBtn = document.querySelector(".submitBtn");
const newBookBtn = document.querySelector(".button");
const overlay = document.getElementById("popup");

let myLibrary = [];


// Constructor - store the book infos
class Book {
    constructor(title, author, pages, read){
        this.Titre = title;
        this.Auteur = author;
        this.Pages = pages;

        if (read === true){
            this.Lu = "Lu";
        }else{
            this.Lu = "Non lu";
        }
 }
}

//Create newBook, push it in Library array
function addBookToLibrary(){
    const title = document.getElementById("titre").value;
    const author = document.getElementById("auteur").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("isRead").checked;

    // Reset the values
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("isRead").checked = false;

    //If one of the input is empty, return an alert
    if(title === "" || author === "" || pages === ""){
        return alert("Les champs doivent être remplis");
    }

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook()
}

function displayBook(){
    display.innerHTML = "";

    //For each books in myLibrary
    myLibrary.forEach(books => {

        //create div for each book
        const card = document.createElement("div");
        card.classList.add("bookDisplay");
        display.append(card);

        //Create a delete button for each card
        const deleteX = document.createElement("span");
        deleteX.textContent = "x";
        card.append(deleteX);

        //make span work as delete button
        deleteX.addEventListener("click", function() {
            myLibrary.splice(this.parentElement.getAttribute("data-index"), 1);
            this.parentElement.remove();
        })

        //for each infos of the books
        for (let bookInfos in books){
            //display the books infos
            const para = document.createElement("p");
            para.textContent = `${bookInfos}: ${books[bookInfos]}`;
            para.classList.add("bookText")
            card.append(para);
        }

        //create a modify button for each card
        const modifyBtn = document.createElement("button");
        modifyBtn.setAttribute("id", "modifyBtn");
        modifyBtn.textContent = "status";
        card.append(modifyBtn);

        //Toggle the read line
        const readText = card.querySelector(".bookDisplay :nth-child(5)")
        //Modify the read line
        modifyBtn.addEventListener("click", () => {
             if (readText.textContent === "Lu: Lu"){
                readText.textContent = "Lu: Non lu";
            }else{
                readText.textContent = "Lu: Lu";
            }
        })
    })
}

// Close & Open modal
newBookBtn.addEventListener("click", () =>{
    overlay.classList.add("hidden");
})

submitBtn.addEventListener("click", () =>{
    addBookToLibrary();
    overlay.classList.remove("hidden"); 
})
