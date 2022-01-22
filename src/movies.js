// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require('./data');

function getAllDirectors(movies) {
  const directorsArr = movies.map((movie) => {
    return movie.director;
  });

  return directorsArr;
}

// console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (!movies.length) return 0;

  const dramaArr = movies.filter((dir) => {
    return dir.director === 'Steven Spielberg' && dir.genre.includes('Drama');
  }).length;

  return dramaArr;
}

// console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) return 0;

  const scoresAvg = movies.reduce((acc, score) => {
    if (score.score) {
      return (acc += score.score);
    } else {
      return acc;
    }
  }, 0);

  const finalScore = scoresAvg / movies.length;

  return Math.round(finalScore * 100) / 100;
}

// console.log(scoresAverage(movies))
// console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  return scoresAverage(
    movies.filter((movi) => {
      return movi.genre.includes('Drama');
    })
  );
}

// console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const copyOfMovies = movies.map((movi) => movi);
  const sortedByYear = copyOfMovies.sort((ele1, ele2) => {
    if (ele1.year === ele2.year) return ele1.title.localeCompare(ele2.title);
    else return ele1.year - ele2.year;
  });
  return sortedByYear;
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const copyOfMovies2 = movies.map((movi) => movi.title);
  return copyOfMovies2
  .sort()
  .slice(0, 20);
}

// console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  
  }




// console.log(convertHours(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {

  if(!movies.length) return null

  let masterObject = {}

  movies.forEach(movie => {
    if(!masterObject[movie.year]){
      masterObject[movie.year] = [movie]
    }else {
      masterObject[movie.year].push(movie)
    }

  });

  let highest = 0
  let actualYear ;

  for(let i in masterObject){
    if(scoresAverage(masterObject[i]) > highest) {
      highest = scoresAverage(masterObject[i])
      actualYear = i;
    }
  }
  return `The best year was ${actualYear} with an average score of ${highest}`;
}

console.log(bestYearAvg(movies))

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
