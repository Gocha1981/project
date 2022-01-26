'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрел?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрел?', '');
    }
}
// start();

function detectPersonalLevel() {
    if (numberOfFilms < 10 && numberOfFilms > -1) {
        alert(`${numberOfFilms} вы так шутите? просмотрено довольно мало фильмов`);
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        alert(`Вы классический зритель`);
    } else if (numberOfFilms > 30) {
        alert(`Вы киноман?`);
    } else {
        alert(`произошла ошибка`);
    }
}
// detectPersonalLevel();

function rememberMyfilms() {
    let count = 0;
    while (count < 2) {
        const oneOfLastMovie1 = prompt("Один из последних просмотренных фильмов?", "");
        if (oneOfLastMovie1.length === 0 || oneOfLastMovie1.length > 50) {
            count = 0;
        }
        const howMuchYouRate1 = prompt("На сколько оцените его?", "");
        count += 1;
        if (howMuchYouRate1.length === 0 || howMuchYouRate1.length > 50) {
            count = 0;
        }
    }
}
// rememberMyfilms();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    let count = 1;
    while (count <= 3) {
    // for (let i = 1; i <= 3; i += 1) {
     const genre = prompt(`Ваш любимый жанр под номером ${count}`);
         personalMovieDB.genres[count - 1] = genre;
         count += 1;
    }
}
writeYourGenres();
// personalMovieDB.count= numberOfFilms;
// personalMovieDB.movies[oneOfLastMovie1] = howMuchYouRate1;
// personalMovieDB.movies[oneOfLastMovie2] = howMuchYouRate2;

// personalMovieDB.movies.oneOfLastMovie[howMuchYouRate];
// alert(`${personalMovieDB.movies}`);
// console.log(personalMovieDB);