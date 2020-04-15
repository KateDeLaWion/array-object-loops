
let cities =[ "Miami", "los Angeles", " New york"]
console.log(cities);

// let cars = [ "BMW", "Volvo", "Mini"];
// for ( car in cars){
//     car = cars[car];
//     console.log(car);
// }

// let cars = [ "BMW", "Volvo", "Mini"];
// for ( car of cars){
    
//     console.log(car);
// }

// let dishes=["pizza", "pizza with extra cheese", "chicken", "chicken on pizza"];
// for (index in dishes){
//   let dish = dishes[index];
//   console.log(dish);
// }


// let menu=[
//   {protein: "chicken", price: 5},
//   {protein: "steak", price: 8},
//   {protein: "fish", price: 10}
// ];
// for (index in menu){
//     let plate = menu[index];
//     console.log(`${plate.protein} cost ${plate.price}`);
// }
// for (index in menu){
//     let plate = menu[index];
//     console.log(plate.protein);
// }
// for (index in menu){
//       let plate = menu[index];
//       console.log(plate);
//   }
// for (index of menu){
//       console.log(index.price);
//   }
// for (index of menu){
//         console.log(index);
//     }


// let dishes= [
//     {name: "mac & cheese", price: 5},
//     {name: "salad", price: 3}
// ]
// for (index in dishes){
//     let dish = dishes[index];
//     console.log(dish.name)
// }
// for (index in dishes){
//       let dish = dishes[index];
//       console.log(dish.name);
//       console.log(dish.price);
//   }
// for (index in dishes){
//         let dish = dishes[index];
//         console.log(`${dish.name} costs ${dish.price}`);
//     }


// let spaceship = {
//   location: "Earth",
//   launch: function(){
//     this.location = "Outer space";
//   },
//   flyTo: function (param){
//     this.location = param;
//   }  
//   }

// console.log("Your location " + spaceship.location);

// spaceship.launch();
// console.log("Your location " + spaceship.location);

// spaceship.flyTo("Mars");
// console.log("Your location " + spaceship.location);


// let robot = {
//   name: "",
//   x: 0,
//   y: 0,
//   move: function(steps, direction){
   
//     this.x = steps;
//     this.y = direction;
//   },
//   location: function(){
//     console.log("### Robot coordinates ###");
//     console.log("x:", this.x, "y:", this.y);
//   }
// }
// robot.move(2,3);
// robot.location();


// const object = {a: 1, b: 2, c: 3};

// for (property in object) {
//   console.log(`${property}: ${object[property]}`);
// }


// let oldCar = {
//     make: 'Toyota',
//     model: 'Tercel',
//     year: '1996'
//   };
  
//   for (let key in oldCar) {
//     console.log(`${key} --> ${oldCar[key]}`);
//   }
  
  

//   let animals = ['🐔', '🐷', '🐑', '🐇'];
//   let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];
  
//   for (let animal of animals) {
//     // Random name for our animal
//     let nameIdx = Math.floor(Math.random() * names.length);
  
//     console.log(`${names[nameIdx]} the ${animal}`);
//   };






// //An object is a code block
// var person = {}

// var person = {
//    name: "Your name",
//    age: 100,
//    location: "Santa Monica"
// }
// console.log(person.age);

// Values can be strings, numbers, booleans, functions and...other objects! :)
// var person = {
//    name: "Your name",
//    age: 100,
//    isAlive: true,
//    speak: function() {
//        console.log("Hello");
//    },
//    pet: {
//        kind: 'cat',
//        name: "penelope",
//        age: 7,
//        meow: function(){
//          console.log('no thanks');
//        }
//    }
// }
// console.log(person.pet.name);//returns penelope
// console.log(person.pet.meow());//returns 'no thanks'


// //There are three ways to access the key of an object:
// //Dot Notation
// person.name;

// //Key Reference
// person["name"];
// person['pet']["name"];
// person["speak"](); //don't do

// //this - internal to an object only
// this.name;

// //Example:
// var person = {
//    name: "Your name",
//    age: 100,
//    speak: function(){
//        return "Hello my name is " + this.name; // has access to the person obj
//    }
// }

// //Which one is better? Depends!
// //As a general rule we use dot notation
// person.name
// person.speak();

// //Does this work?
// person["speak"]();

// //It does! But this looks so much nicer :)

// person.speak();

// //Why would we ever use key reference?
// //So you can access the key with a variable:
// keyToAccess = "age";
// person[keyToAccess]; //the value would be 100

// //So you can do awesome stuff like this:
// var car = {
//    isMoving: false,
//    color: "black",
//    doors: 4,
//    wheels: 3
// }
// console.log("### Describe my car ###");
// for(key in car)
// {
//    console.log(key, car[key]);
//    //because car.key wouldn't work :)
// }



// let cities = [
//   {
//     name: 'london',
//     year: 2017,
//     attractions: [
//       {
//         name: 'london eye'
//       },
//       {
//         name: 'Shoreditch'
//       },
//       {
//         name: 'Buckingham Palace'
//       }
//     ]
//   },
//   {
//     name: 'Mexico',
//     year: 2018,
//     attractions: [
//       {name: 'Mayan Pyramids'},
//       {name: 'Cenote'},
//     ]
//   },
//   {
//     name: 'Miami',
//     year: 2016,
//     attractions: [
//       {name: 'Little Havana'},
//       {name: 'South Beach'},
//     ]
//   }
//  ];
 
//  for(index in cities){
//   let location = cities[index];
//   console.log(location.name); // prints name of cities

//  //iterate through attractions
//   for(attractionIndex in location.attractions){
//     let sights = location.attractions[attractionIndex];
//     console.log(`site see: ${sights.name}`);
  
//   };
//   };
  


// let stations = [{
//   name: "Pop",
//   song: {
//       title: "Hello",
//       artist: "Adele"
//   }
// },
// {
//   name: "Country",
//   song: {
//       title: "Breathe",

//       artist: "Faith Hill"
//   }
// },
// {
//   name: "RandB",
//   song: {
//       title: "Emotions",

//       artist: "Mariah Carey"
//   }
// },
// {
//   name: "Grunge",
//   song: {
//       title: "Smell like teen spirit",

//       artist: "Havana"
//   }
// }
// ];

// let stationIdx = Math.floor(Math.random() * stations.length);

// let nameStation = stations[stationIdx];

// console.log("Now Playing: " + nameStation.song.title +
// " by " + nameStation.song.artist);




// let arrTEst = ["one", "two", "three"];
// arrTEst.forEach(function(el){
//   console.log(el);
// });


// const arr = ["a", "b", "c", "d", "e"]
// arr.forEach((d,i,a) => {
//   console.log(`this is ${d}, this is the index ${i}, this is 
//   the array being traversed: ${a}`)
// })
 





