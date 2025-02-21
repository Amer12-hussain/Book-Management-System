const readline = require('readline');

function question(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

const Book1 = {
  Author: 'Bill Gates',
  Content: "Life of Author",
  Title: "The Road Ahead"
}

const Book2 = {
  Author: 'Steve Jobs',
  Content: "Life of experience",
  Title: "Walter Isaacsion"
}

const Book3 = {
  Author: 'Suzanne Collins',
  Content: "Author Describe Life Beauty",
  Title: "The Final Book of The Hunger Games"
}
//this function is used to check itle in our library or not 
function check_Titleinlibrary(book) {
  for (let i = 0; i < library.length; i++) {
    const element = library[i];
    if (library[i].Title === book) {
      return 1;
    }
  }
}
const library = [Book1, Book2, Book3];
//THis function is used to check title step 1 of program.
function check_Title(newBook) {
  let a = 0
  a = check_Titleinlibrary(newBook.Title)
  if (a === 1) {
    console.log("-Book is already Exicited-")
  }
  else {
    console.log("++--new -Book is added in our Library--++")
    library.push(newBook);
  }
  Menu();
}

//this function is used to add a book from user step 1 of program. .
async function Add() {
  console.log("--You Select add option-- ");
  let author = await question
    ("Enter Author Name::");
  let content = await question
    ("Enter Content::");
  let title = await question
    ("Enter a Title::");
  const newBook = {
    Author: author,
    Content: content,
    Title: title
  }
  // library.push(newBook);
  check_Title(newBook);
  // console.log(library)
Menu();
}
//This function is used to filter book by user input title step 2 program.
function Filter_T(a) {
  let b = 0
  b = check_Titleinlibrary(a)
  if (b === 1) {
    let filteredArray = library.filter((item) => item.Title !== a)
    console.log(filteredArray)
  }
  else {
    console.log("------Book is Not Found---------- ")
  }
Menu();
}
//this function is used to search a book from title user input step 3 of porgram.
function search_Book(a) {
  let b = 0
  b = check_Titleinlibrary(a)
  if (b === 1) {
    let filteredArray = library.filter((item) => item.Title == a)
    console.log(filteredArray)
  }
  else {
    let filterArray = library.filter((item) => item.Title !== a)
    console.log("---Book Is Not Found ----")
  }
Menu();
}
//This function is used to check array index from object details used in 4 step edit book details
function findObjectIndex(library, filteredArray) {
  for (let i = 0; i < library.length; i++) {
    if (library = (library[i], filteredArray)) {
      return i;
    }
  }
}
//this function is used to edit book in 4 step 
async function Eidit_Book(a) {
  let b = 0
  b = check_Titleinlibrary(a)
  if (b === 1) {
    console.log("**--Book is Found in our Library---**:")
    let filteredArray = library.filter((item) => item.Title == a)
    console.log(filteredArray)


    const v = findObjectIndex(library, filteredArray);
    let author = await question
      ("Enter Author Name::");
    let content = await question
      ("Enter Content::");
    let title = await question
      ("Enter a Title::");
    library[v] = {
      Author: author,
      Content: content,
      Title: title
    }
    console.log(library)

  }
  else {
    console.log("----Book is Not Found In Our Library-----")
  }
Menu();
}
//the above is menu functi
async function Menu() {
  console.log(library)
  console.log("1)-------- You want to add a book--");
  console.log("2)-------- You want to remove a book--");
  console.log("3)-------- You want to search for a book--");
  console.log("4)-------- You want to update book details--");
console.log ("5_____Enter for Exit")
  var Num = await question("Enter Any Number from Menu::")

  if (Num == 1) {

    Add();
  }
  else if (Num == 2) {
    console.log("-*You Select 2  to Remove a Book*-")
    let a = await question("Enter Title For Remove::")
    Filter_T(a);
  }
  else if (Num == 3) {
    console.log("**You Select 3  to search a book**")
    let a = await question("Enter Title To search a book::")
    search_Book(a);
  }
  else if (Num == 4) {
    console.log("**You Select 4  to Update details  a book**")
    let a = await question("Enter Title to Update a Book::")

    Eidit_Book(a);
  }
  else if (Num==5){
      console.log ("Exited  ")
     }
  else {
    console.log("You Entered Wrong Selection")
  }
}


Menu();