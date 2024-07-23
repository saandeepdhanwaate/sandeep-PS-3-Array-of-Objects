// Exercise 1
// Given an array of objects where each object represents a project with properties for name, duration, and status.
// Return the names of all ongoing projects.
// Sample data
const projects = [
  { name: 'Project A', duration: 12, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project D', duration: 6, status: 'completed' }
];

function onGoingStatus(){
  let onGoingStatus = [];
  for(let i = 0; i < projects.length; i++){
    if(projects[i].status === 'ongoing'){
      let result = onGoingStatus.push(projects[i].name)
    }
  }
  return onGoingStatus;
}
console.log(onGoingStatus())



// # Exercise 2

// 1. Given an array of objects where each object represents a city with properties for `name`, `population`, and `country`.
// 2. Return all the cities in the country 'USA'.

const cities = [
    { name: 'New York', population: 8000000, country: 'USA' },
    { name: 'Toronto', population: 2800000, country: 'Canada' },
    { name: 'Los Angeles', population: 4000000, country: 'USA' },
    { name: 'London', population: 9000000, country: 'UK' }
];

function citiesUsa(){
  for(let i = 0; i < cities.length; i++){
    let result = cities.filter( (city)=>{
      return city.country === 'USA'
    });
    return result;
  }
}
console.log(citiesUsa())


// Exercise 3
// Given an array of objects where each object represents a song with properties for title, artist, and duration.
// Return the first song that has a duration of more than 5 minutes.
// Sample data
const songs = [
  { title: 'Song A', artist: 'Artist 1', duration: 4.5 },
  { title: 'Song B', artist: 'Artist 2', duration: 5.2 },
  { title: 'Song C', artist: 'Artist 3', duration: 3.8 },
  { title: 'Song D', artist: 'Artist 4', duration: 6.0 }
];

function findDuration(songs){
  for(let i = 0; i < songs.length; i++){
    if(songs[i].duration > 5){
      return songs[i]
    }
  }
}
let resultDuration  =  findDuration(songs)
console.log(`Title: ${resultDuration.title}`);
console.log(`Artist: ${resultDuration.artist}`);
console.log(`Duration: ${resultDuration.duration}`);


// Exercise 4
// Provided an array of objects where each object represents an animal with properties for species, habitat, and population.
// Write a function updateAnimalPopulation that updates the population of an animal given its species & newPopulation.
// Sample data
const animals = [
  { species: 'Tiger', habitat: 'Forest', population: 3000 },
  { species: 'Elephant', habitat: 'Savannah', population: 5000 },
  { species: 'Panda', habitat: 'Bamboo Forest', population: 2000 },
  { species: 'Kangaroo', habitat: 'Grassland', population: 10000 }
];

function updateAnimalPopulation(){
  for(let i = 0; i < animals.length; i++){
    if(animals[i].species === 'Elephant'){
      let newPopulation = animals[i].population = 5500;
      return `The updated population for Elephant is ${newPopulation}`
    }
  }
}

console.log(updateAnimalPopulation())


// Exercise 5
// Given an array of objects where each object represents a player with properties for name, team, and goals_scored.
// Return the names of all players who have scored more than 20 goals.
// Sample data
const players = [
  { name: 'Player A', team: 'Team 1', goals_scored: 22 },
  { name: 'Player B', team: 'Team 2', goals_scored: 18 },
  { name: 'Player C', team: 'Team 1', goals_scored: 25 },
  { name: 'Player D', team: 'Team 3', goals_scored: 15 }
];

function goalScore(){
  let maxGoalScore = [];
  let result = players.filter( (player)=>{
    if(player.goals_scored > 20){
      return maxGoalScore.push(player.name)
    }
  })
console.log(result)
  return maxGoalScore;
}

console.log(goalScore())



// Exercise 6
// Given an array of objects where each object represents a company with properties for name, industry, and employees.
// Return all the companies in the 'Tech' industry.
// Sample data
const companies = [
  { name: 'Company A', industry: 'Tech', employees: 500 },
  { name: 'Company B', industry: 'Finance', employees: 300 },
  { name: 'Company C', industry: 'Tech', employees: 700 },
  { name: 'Company D', industry: 'Healthcare', employees: 400 }
];

function techCompanies(){
  let techCompany = companies.filter((company)=>{
    return company.industry === 'Tech';
  })
  return techCompany
}

console.log(techCompanies())




// Exercise 7
// Given an array of objects where each object represents a book with properties for title, author, and pages.
// Sort the array of books by pages in descending order.
// Sample data
const books = [
  { title: 'Book A', author: 'Author 1', pages: 150 },
  { title: 'Book B', author: 'Author 2', pages: 320 },
  { title: 'Book C', author: 'Author 3', pages: 290 },
  { title: 'Book D', author: 'Author 4', pages: 400 }
];

function sortBooksDesc(){
  let sortBooks = books.sort((b1,b2)=>{
    return b2.pages - b1.pages;
  })
  return sortBooks;
}
console.log(sortBooksDesc())



// Exercise 8
// Given an array of objects where each object represents a person with properties for name, country, and age.
// Return the names of all people who are older than 30 and live in 'India'.
// Sample data
const peoples = [
  { name: 'Person A', country: 'India', age: 35 },
  { name: 'Person B', country: 'USA', age: 28 },
  { name: 'Person C', country: 'India', age: 32 },
  { name: 'Person D', country: 'India', age: 24 }
];

function peopleCountryName(){
  let peopleName = [];
  for(let i = 0; i < peoples.length; i++){
    if(peoples[i].country === 'India' && peoples[i].age > 30){
       peopleName.push(peoples[i].name)
    }
  }
  return peopleName;
}

console.log(peopleCountryName())