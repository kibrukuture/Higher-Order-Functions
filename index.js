const animals = [
  {
    name: "dog",
    isDomestic: true,
  },
  {
    name: "cat",
    isDomestic: true,
  },
  {
    name: "cow",
    isDomestic: true,
  },
  {
    name: "horse",
    isDomestic: true,
  },
  {
    name: "fox",
    isDomestic: false,
  },
  {
    name: "snake",
    isDomestic: false,
  },
];

Array.prototype._map = function (callback) {
  //use this keyword to get array object
  const newArray = [];
  console.log(this);
  for (let index = 0; index < this.length; index++) {
    //callback returns a value ;
    newArray.push(callback(this[index], index, this));
  }
  return newArray;
};

const newAnimal = animals._map((animal) => {
  return animal.name;
});

console.log(newAnimal);

//IN ORDER TO MAKE A HIGHER ORDER FUNCTION, MAKE A FUNCTION AND USE ANOTHER FUNCTION'S SIGNATURE
//AS AN ARGUMENT AKA THIS ARGUMENT DOES NOT HAVE A FUNCTION BODY.

//reduce implementation

Array.prototype._reduce = function (callback) {
  // return the total or a single value form the array

  let accumulator = "";

  for (index = 0; index < this.length; index++) {
    //make sure that the type is correct before starting any calculation
    if (accumulator === "") {
      if (typeof this[index] === "string") accumulator = "";
      else if (typeof this[index] === "number") accumulator = 0;
    }

    accumulator = callback(accumulator, this[index]);
    console.log(accumulator);
  }

  return accumulator;
};

//METHOD TWO
Array.prototype._reduce = function (callback, starter = 0) {
  // return the total or a single value form the array

  let accumulator = starter;

  for (index = 0; index < this.length; index++) {
    accumulator = callback(accumulator, this[index]);
  }
  return accumulator;
};

// const profile = [
//   { name: "nomad" },
//   { name: "elson" },
//   { name: "never" },
//   { name: "what" },
//   { name: "test" },
//   { name: "proof" },
// ];

const profile = [1, 2, 3, 4, 5, 6];

const what = profile._reduce((accumulator, current) => {
  return accumulator + current;
});

console.log(what);

// CUSTOM FILTER FUNCTION IN ARRAY

//filter , filters when a condition is true

Array.prototype._filter = function (callback) {
  //new array

  const filteredArray = [];
  for (index = 0; index < this.length; index++) {
    //callback returns booleans
    if (callback(this[index], index, this)) {
      filteredArray.push(this[index]);
    }
  }

  return filteredArray;
};

// const profile = [1, 2, 3, 4, 5, 6];

// // use custom filter array

// profile._filter((item, index, array) => item > 2);

// console.log(profile._filter((item, index, array) => item > 2));
