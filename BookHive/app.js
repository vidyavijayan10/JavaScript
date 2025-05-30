let popupoverlay = document.querySelector(".popup-overlay");
let popupbox = document.querySelector(".popup-box");
let addpopupbtn = document.querySelector(".add-btn");

addpopupbtn.addEventListener("click", ()=>{
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
})

let cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",(event)=>{
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})

let container = document.querySelector(".container");
let addbookbtn = document.getElementById("add-book");
let booktitle = document.getElementById("book-title-input");
let bookauthor = document.getElementById("book-author-input");
let bokdesc = document.getElementById("book-desc-input");




addbookbtn.addEventListener("click", (event) => {
  event.preventDefault();
  let div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h1>${booktitle.value}</h1>
  <h2>${bookauthor.value}</h2>
  <p>${bokdesc.value}</p>
  <button onclick="delbtn(event)">Delete</button>`;
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});


function delbtn(event){
    event.target.parentElement.remove();
}


