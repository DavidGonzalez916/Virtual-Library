const Media = require('./Media')


class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static longestMovie(movies){
        let longest = 0;
        let answer;
        for (let i = 0; i < movies.length; i++){
           if (movies[i].duration > longest){
            longest = movies[i].duration;
            answer = movies[i];
           }
          
        }
        return answer;
    }

}



// don't change below
module.exports = Movie;