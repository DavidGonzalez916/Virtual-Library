const Media = require('./classes/Media.js');
const Book = require('./classes/Book.js');

function main(){
    const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 4.7);
Media.totalMediaCount; // 1
const book2 = new Book('The Bluest Eye', 1970, 'Fiction', 'Toni Morrison', 206, 4.6);
Media.totalMediaCount; // 2
book1.summary(); // "Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960, Page Count: 281, Genre: Fiction, Rating: 4.4"
Book.highestRating([book1, book2]); // Returns book2
}

main();