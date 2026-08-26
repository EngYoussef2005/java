let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let [{ title, age, available, skills: [, skill] }, 
     { title: t2, age: ag2, available: av2, skills: [, sk2] }, 
     { title: t3, age: ag3, available: av3, skills: [, sk3] }] = myFriends;

if (chosen === 1) {
  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Available");
  console.log(skill);
} else if (chosen === 2) {
  console.log(t2);
  console.log(ag2);
  console.log(av2 ? "Available" : "Not Available");
  console.log(sk2);
} else if (chosen === 3) {
  console.log(t3);
  console.log(ag3);
  console.log(av3 ? "Available" : "Not Available");
  console.log(sk3);
}