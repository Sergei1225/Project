"use strict";

let numberOfFilms = +prompt('How much films you watched?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    }, 
    actors: {},
    genres: [],
    privat: false
};

let firstAnswer = prompt('One of last films?');
let firstAnswerTwo = prompt('One of last films?');
let secondAnswer = +prompt('Do you like this film?');
let secondAnswerTwo = +prompt('Do you like this film?');

let movies = {
    logan: 8.1
};
personalMovieDB.movies[firstAnswer] = secondAnswer; 
personalMovieDB.movies[firstAnswerTwo] = secondAnswerTwo; 

