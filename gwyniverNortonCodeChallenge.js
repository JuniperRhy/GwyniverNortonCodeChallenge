/*----------------------------------------------------------------------------------------------------------------
 General Notes
 
 * For all exercises, please prefer readability/expressiveness over maximum algorithmic efficiency.
 
 * You may add any other code such as functions, data structures, etc. that you may want in order to better complete
 an exercise, beyond what is explicitly asked for. Feel free to reuse code for multiple exercises as well.
-----------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------
1) Create a function that takes an array of integers as its lone argument and returns an array containing
 the square of each value in the input.
 
 For example, an input of `[2, 4, 6, 8, 10]` should result in an output of `[4, 16, 36, 64, 100]`.
-----------------------------------------------------------------------------------------------------------------*/

const squareNumberInArr = (inputArr) => {
  const newArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    let squaredValue = inputArr[i] ** 2;
    newArr.push(squaredValue);
  }
  return newArr;
};

/*----------------------------------------------------------------------------------------------------------------
 2) Create a function that takes an array of counter objects (see example) as its lone argument and returns
 the sum of all of the counters' `count` properties.
 
 For example, an input of `[{count: 1}, {count: 2}, {count: 3}]` should result in an output of `6`.
-----------------------------------------------------------------------------------------------------------------*/
const countTotaler = () => {
  const countArr = [{ count: 1 }, { count: 2 }, { count: 3 }];

  let totalCount = 0;

  for (let i = 0; i < countArr.length; i++) {
    let countVal = countArr[i].count;
    totalCount = totalCount + countVal;
  }
  return totalCount;
};
/*----------------------------------------------------------------------------------------------------------------
 3) Create a function that takes an object in the general shape of `movies` (see below) as the first argument,
 and the name of an actor as the second argument. The function should return an object that is equivalent to
 the input, only with the given actor's name included in each movie's `actors` array. If the name is already
 present, it should not be added again. The function should not mutate the input object, or any of its sub-structures.
 
 Note: `movies` is just an example, the function should not assume that the movies in the object will be hard-coded.
-----------------------------------------------------------------------------------------------------------------*/
const movies = {
  theGoonies: {
    actors: ["Josh Brolin", "Corey Feldman", "Kerri Green"],
  },

  momento: {
    actors: ["Guy Pearce", "Carrie-Anne Moss"],
  },
};

const movieFunction = (movies, actorToAdd) => {
  const moviesCopy = {};
  Object.keys(movies).forEach((key) => {
    moviesCopy[key] = { ...movies[key] };
    const movieCopy = moviesCopy[key];
    movieCopy.actors = [...movieCopy.actors];
    if (!movieCopy.actors.includes(actorToAdd)) {
      movieCopy.actors.push(actorToAdd);
    }
  });
  return moviesCopy;
};

/*----------------------------------------------------------------------------------------------------------------
 4) Create a procedure that takes an object in the general shape of `movies` as its lone argument and appends
 an unordered list of every actor's name to the DOM's `body` element.
 
 The names in the list should be unique (no actor's name should appear in the list more than once).
 If the list element already exists in the DOM, the procedure should replace the existing list with a new one.
 
 Bonus points if the names are alphabetically sorted :)
-----------------------------------------------------------------------------------------------------------------*/
const movieFunction = () => {
  const allActors = [];
  Object.values(movies).forEach((movie) => {
    allActors.push(...movie.actors);
  });
  const uniqueSortedActors = [...new Set(allActors)].sort((a, b) => {
    var nameA = a.toUpperCase();
    var nameB = b.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  const oldList = document.querySelector("ul");
  if (oldList) oldList.remove();
  const ul = document.createElement("ul");
  uniqueSortedActors.forEach((actor) => {
    const li = document.createElement("li");
    li.innerText = actor;
    ul.append(li);
  });
  document.body.append(ul);
};
/*----------------------------------------------------------------------------------------------------------------
5) Create a procedure that retrieves the data from the REST API endpoint hosted here: https://jsonplaceholder.typicode.com/posts.
The procedure should then log the id of the first post with a userId of 7 and a title that begins with the letter "e"
(or undefined if it does not exist). It should also log any potential retrieval errors using `console.error`.
-----------------------------------------------------------------------------------------------------------------*/
const postFetch = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((posts) => {
      let eachPost = posts;
      console.log(eachPost.find((Object) => Object.userId === 7));
      console.log(eachPost.find((Object) => Object.body.charAt(0) === "e"));
    })
    .catch((error) => console.error(error));
};
