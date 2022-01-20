const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
alert(`${numberOfFilms} вы так шутите?`);
const oneOfLastMovie1 = prompt("Один из последних просмотренных фильмов?", "");
const howMuchYouRate1 = prompt("На сколько оцените его?", "");
const oneOfLastMovie2 = prompt("Один из последних просмотренных фильмов?", "");
const howMuchYouRate2 = prompt("На сколько оцените его?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// personalMovieDB.count= numberOfFilms;
personalMovieDB.movies[oneOfLastMovie1] = howMuchYouRate1;
personalMovieDB.movies[oneOfLastMovie2] = howMuchYouRate2;

// personalMovieDB.movies.oneOfLastMovie[howMuchYouRate];
//  alert(`${personalMovieDB.movies}`);
console.log(personalMovieDB);
