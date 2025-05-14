import {faker} from "@faker-js/faker";

function getPastYear() {
  return faker.date.birthdate().getFullYear().toString()
  
}

// Example usage
console.log(getPastYear());