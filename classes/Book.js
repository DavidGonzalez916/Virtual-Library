const Media = require('./Media')

class Book extends Media{
    constructor(title, year, genre, author, numPages, rating){
        super(title, year, genre);
        this.rating = rating;
        this.author = author;
        this.numPages = numPages;
    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
    static highestRating(books){
        let max = 0;
        let result;
        for(let i = 0; i < books.length; i++){
            if(max < books[i].rating){
                max = books[i].rating;
                result = books[i];
            } 
        }
        return result;
    }
}

// don't change below
module.exports = Book;
