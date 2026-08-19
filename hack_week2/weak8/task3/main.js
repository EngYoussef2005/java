function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Months Example => ${theAge * 12} Months`);
    console.log(`Weeks => ${theAge * 12 * 4} Weeks`);
    console.log(`Days => ${theAge * 365} Days`);
    console.log(`Hours => ${theAge * 365 * 24} Hours`);
    console.log(`Minutes => ${theAge * 365 * 24 * 60} Minutes`);
    console.log(`Seconds => ${theAge * 365 * 24 * 60 * 60} Seconds`);
  } else {
    console.log(`Age Out Of Range`);
  }
}


// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months