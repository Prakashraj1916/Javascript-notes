/*
switch(expression)
{
  case "value1":
    statement(s);
    break;
  case "value2":
    statement(s);
    break;
  case "valueN":
    statement(s);
    break;
  default:
    statement(s);
}
*/
// days in a week example for the switch statement
var day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;


    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("your day is hear");
}


//grade example for the switch statement 
var grade = 89;

switch (true) {
    case (grade >= 90):
        console.log("Excellent!");
        break;
    case (grade >= 80):
        console.log("Good!");
        break;
    case (grade >= 70):
        console.log("Average!");
        break;
    case (grade >= 60):
        console.log("Pass!");
        break;    
    default:
        console.log("your garde is hear");
        break;
}