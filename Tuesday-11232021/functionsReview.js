// 5
//Show 4 ways of emptying an array
let newArray = [1, 2, 3, "a", "b", "c", "and", "if", "but"];



// 6 What are the four features of OOP and please explain each
// one in your own words, metaphors and analogies are welcome


// 7 What are the various ways to create an object




// extra practice

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Explain the difference between forEach, map, filter, and reduce.
//1 Define a callback function before you put them in forEach, map, filter or reduce.
//2 Use forEach to console.log each country in the countries array.
//3 Use forEach to console.log each name in the names array.
//4 Use forEach to console.log each number in the numbers array.
//5 Use map to create a new array by changing each country to uppercase in the countries array.
//6 Use map to create an array of countries length from countries array.
//7 Use map to create a new array by changing each number to square in the numbers array
//8 Use map to change to each name to uppercase in the names array
//9 Use map to map the products array to its corresponding prices.
//10 Use filter to filter out countries containing land.
//11 Use filter to filter out countries having six character.
//12 Use filter to filter out countries containing six letters and more in the country array.
//13 Use filter to filter out country start with 'E';
//14 Use filter to filter out only prices with values.
//15 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
//16 Use reduce to sum all the numbers in the numbers array.
//17 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
//18 Explain the difference between some and every
//19 Use some to check if some names' length greater than seven in names array
//20 Use every to check if all the countries contain the word land
//21 Explain the difference between find and findIndex.
//22 Use find to find the first country containing only six letters in the countries array
//23 Use findIndex to find the position of the first country containing only six letters in the countries array
//24 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
//25 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.



// The Reading List
// An object-oriented book-list!

// Create a class BookList

// Create another class called Book

// BookLists should have the following properties:

// Number of books marked as read
// Number of books marked not read yet
// A reference to the next book to read (book object)
// A reference to the current book being read (book object)
// A reference to the last book read (book object)
// An array of all the Books
// Each Book should have several properties:

// Title
// Genre
// Author
// Read (true or false)
// Read date, can be blank, otherwise needs to be a JS Date() object
// Every Booklist should have a few methods:

// .add(book)
// should add a book to the books list.
// .finishCurrentBook()
// should mark the book that is currently being read as "read"
// Give it a read date of new Date(Date.now())
// Change the last book read to be the book that just got finished
// Change the current book to be the next book to be read
// Change the next book to be read property to be the first unread book you find in the list of books
// Booklists and Books might need more methods than that. Try to think of more that might be useful.