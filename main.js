const Media = require('./classes/Media.js');
const Book = require('./classes/Book.js');
const Movie = require('./classes/Movie.js');

function main(){
    const movie1 = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', 148, 4.5);
const movie2 = new Movie('The Godfather', 1972, 'Crime', 'Francis Ford Coppola', 175, 4.7);
Media.totalMediaCount; // 2
movie1.summary(); // "Title: Inception, Director: Christopher Nolan, Year: 2010, Genre: Sci-Fi, Rating: 4.5"
Movie.longestMovie([movie1, movie2]); // Returns movie2
}

main();