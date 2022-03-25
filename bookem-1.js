class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn
  }
}

class Library {
  constructor(){
    this.books = []
  }

  add_book(book){
    console.log(this.books)
    this.books.push(book)
    console.log(this.books)
  }

  save_books(){
    localStorage.setItem('library', JSON.stringify(this.books))
  }

  load_books(){
    if (localStorage.getItem('library') !== null){
      this.books = JSON.parse(localStorage.getItem('library')) 
    } else {
      this.books = []
    }
  }

  delete_book(bookname){
    // find book and delete
    this.save_books()
  }

  display_library(ele){
    let output = '<table class="tableClass"><tr><th>Title</th><th>Author</th><th>ISBN</th><th>Action</th></tr>';
    console.log(this.books)

    if (this.books.length > 0){
      
      this.books.forEach(book =>{
        output += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td>`
        output += `<td>`
        if (employees.is_authorized(user, 'delete')) {
          output += `<button onclick="library.delete_book('${book.isbn}')">Delete</button>`
        }
        output += `</td></tr>`
      })
      
    }

    output += '</table>';

    ele.innerHTML = output;
  }
}

library = new Library()

// we are logged in!!! as user

// this section loading the library
library.load_books()
console.log(library.books)
library.display_library(document.getElementById('library'))

// this section limiting access
//
// add code to confirm which section are available.
if (!employees.is_authorized(user, 'edit')) {
  // document.getElementById('box1').style.display = "none";
} else {
  let submit_btn = document.getElementById('submit_book')
  submit_btn.addEventListener('click', add_book)
}

document.getElementById('reset_add_book').addEventListener('click', reset_add_book_form);

// this section adding event


// this section is the action buttons on form
function add_book(){

  let authorized = employees.is_authorized(user, 'edit')

  if (authorized){
    console.log("adding book")
    // author = document.getElementById('input_name').value
    book_title = document.getElementById('book_title').value
    book_author = document.getElementById('book_author').value
    book_isbn = document.getElementById('book_isbn').value
    
    
    book1 = new Book(book_title, book_author, book_isbn);
    
    library.add_book(book1)
    library.save_books()
    library.display_library(document.getElementById('library'))

    reset_add_book_form()
    
  } else {
     console.log("not allowed to add")
  }
}

function delete_book(){
  
  let authorized = employees.is_authorized(user, 'delete')

  if (authorized){
    console.log("deleting book")
  } else {
     console.log("not allowed to delete")
  }
}

function reset_add_book_form(){
    document.getElementById('book_title').value = ""
    document.getElementById('book_author').value = ""
    document.getElementById('book_isbn').value = ""
}