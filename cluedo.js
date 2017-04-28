var suspects = [
  { name: "Jacob Green", color: "green" },
  { name: "Doctor Orchid", color: "white" },
  { name: "Victor Plum", color: "purple" },
  { name: "Kasandra Scarlet", color: "red" },
  { name: "Eleanor Peacock", color: "blue" },
  { name: "Jack Mustard", color: "yellow" }
];

var weapons = [
  "rope",
  "knife",
  "candlestick",
  "dumbbell",
  "poison",
  "axe",
  "bat",
  "trophy",
  "pistol"
  ];
  
var rooms = [
  "dining room",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiard room",
  "lounge",
  "ballroom",
  "hall",
  "a spa",
  "living room",
  "observatory",
  "theater",
  "guest house",
  "a patio"
  ];
  

var suspectCard = [];
for (i=0; i<suspects.length; i++){
  suspectCard.push(suspects[i].name);
}

var cards = suspectCard.concat(weapons, rooms);

function oneCard() {
   var randomNumber = Math.random();
   randomNumber = randomNumber * cards.length;
   randomNumber = Math.floor(randomNumber);
   return cards[randomNumber];
 }
 var oneRandomCard = oneCard();

 function whoIsASuspect() {
   var randomNumber = Math.random();
   randomNumber = randomNumber * suspects.length;
   randomNumber = Math.floor(randomNumber);
   return suspects[randomNumber];
 }
 var x = whoIsASuspect().name;

 
 function whatIsAWeapon() {
   var randomNumber = Math.random();
   randomNumber = randomNumber * weapons.length;
   randomNumber = Math.floor(randomNumber);
   return weapons[randomNumber];
 }
 var y = whatIsAWeapon();

 
  function whatIsARoom() {
   var randomNumber = Math.random();
   randomNumber = randomNumber * rooms.length;
   randomNumber = Math.floor(randomNumber);
   return rooms[randomNumber];
 }
 var z = whatIsARoom();
 
var caseFileConfidencial = prompt("Who do you think the killr is??? Jacob Green, Doctor Orchid, Victor Plum, Kasandra Scarlet, Eleanor Peacock or Jack Mustard");

if (caseFileConfidencial===x){
  console.log("YESSSSS!!!! You are right!!");
  console.log("The killer is "+ x +".");
  console.log("The murder weapon: "+ y +".");
  console.log("The crime sceen: "+ z +".");
} else {
  console.log("Noooo, it is not the killer");
  console.log("The killer is "+ x +".");
  console.log("The murder weapon: "+ y +".");
  console.log("The crime sceen: "+ z +".");
}
