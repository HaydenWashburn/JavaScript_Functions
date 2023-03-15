console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
  for (i = 1; i < count; i++) {
    if (i % 2 === 1) {
      console.log(i, "odd");
    }
  }
}

printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen=`Congrats ${userName}, you can drive!`;
    let belowSixteen=`Sorry ${userName}, but you need to wait until you're 16.`;

    if (age>=16){
        console.log(aboveSixteen)
    }
    else {
        console.log(belowSixteen)
    }
}

checkAge("Hayden", 16);

// Exercise 3
function whichQuadrant(x,y){
    if (x===0){
console.log(`(${x},${y}) is on the x axis.`)
    }
    else if (x>0 && y>0) {
console.log(`(${x},${y}) is in Quadrant 1.`)
    }
    else if (x<0 && y>0){
        console.log(`(${x},${y}) is in Quadrant 2.`)
    }
    else if (x<0 && y<0){
        console.log(`(${x},${y}) is in Quadrant 3.`)
    }
    else if (x>0 && y<0){
        console.log(`(${x},${y}) is in Quadrant 4.`)
    }
}

whichQuadrant(2,-2);

// Exercise 4 

function triangleType(a,b,c){
    if (a===b && b===c && a===c){
        console.log("Equilateral Triangle")
    }
    else if (a===b || b===c || a===c){
        console.log("Isosceles Triangle")
    }
    else if (a != b && a != c && b != c){
        console.log("Scalene Triangle")
    }
}

triangleType(2,1,2);

// BONUS Exercise 5




