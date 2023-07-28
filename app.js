console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
     for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(10);
printOdds(20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {

let aboveSixteen = `Congrats ${userName}, you can drive!`;
let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

if (age < 16) {
    console.log(belowSixteen);
}
else {
    console.log(aboveSixteen);
}
}
checkAge("Brandon", 31);
checkAge("Cate", 30);
checkAge("Siena", 7);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrant(x, y) {
if (x > 0 && y > 0) {
    return "Quadrant 1";
}
else if (x < 0 && y > 0) {
    return "Quadrant 2";
}
else if (x < 0 && y < 0) {
    return "Quadrant 3";
}
else if (x > 0 && y < 0) {
    return "Quadrant 4";
}
}
console.log(quadrant(3, -4));
console.log(quadrant(-2, 3));
console.log(quadrant(-3, -3));


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle (one, two, three) {
if (one + two > three && one + three > two && two + three > one) {
    if(one == two && two == three) {
    return "This is an equilateral triangle.";
    }
    else if (one == two || two == three || one == three) {
        return "This is an isosceles triangle.";
    }
    else if (one != two && two != three && one != three) {
        return "This is a scalene triangle.";
    }
}
else {
    return "This is an invalid triangle.";
}
}
console.log(triangle(2, 2, 3));
console.log(triangle(5, 5, 5));
console.log(triangle(4, 1, 7));
console.log(triangle(3, 5, 2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

    function phoneData(planLimit, day, usage) {
        let totalDays = 30;
        let daysLeft = totalDays - day;
        let average = usage / day;
        let projectedAvg = planLimit / totalDays;
        let remainingData = planLimit - usage;
        let projectedUsage = daysLeft * average;
        let message;


        console.log(`${day} days used, ${daysLeft} days remaning`);
        console.log(`Average use daily: ${projectedAvg} GB per day`);

        if (average > projectedAvg) {
            message = "EXCEEDING";
        } 
        else if (average < projectedAvg) {
            message = "UNDER";
        }
        else {
            message = "AT";
        }

        console.log(`You are ${message} your daily usage of ${average} GB per day.`);
        console.log(`If you continue this amount of usage, you will end up using ${planLimit - (usage + projectedUsage)} GB from your max data limit`);
        console.log(`In order to keep your data below your limit, do not use more than ${remainingData / daysLeft} GB per day`);

    }
    phoneData(30, 3, 15);