//                                         1) ALERT

//Q1).	Write a script to greet your website visitor using JS alert box.

//alert("Welcome...!!!");

//Q2).	Write a script to display following message on your web page: Error! Please enter a valid password

//alert("Error! Please enter a valid Password");

//Q3).	Write a script to display following message on your web page: (Hint : Use line break)

//alert("Welcome to JS Land...\nHappy Coding");

//Q4). Write a script to display following messages in sequence:

// alert("Welcome to JS Land...");
// alert("Happy Coding");

//Q5).	Generate the following message through browser’s developer console:

//Q6).	Make use of alerts in your new/existing HTML & CSS project.

//Q7.	Practice placement of <script></script> element in following sections of your project in exercise 6:
// a.	Head
// b.	Body (before your page’s HTML)
// c.	Body (inside your page’s HTML)
// d.	Body (after your page’s HTML)


//                                         2) VARIABLE FOR STRINGS

//Q1) Declare a variable called username.

//var username;

//Q2) Declare a variable called myName & assign to it a string that represents your Full Name.

//var myName = "Sherbaz Khan";

// Q3) Write a script to
// a. declare a JS variable, titled message
// b. assign “Hello World” to the variable message
// c. display the message in alert box

// var titled = "Hello World";
// alert(titled);


//Q4) Write a script to save student’s bio data in JS variables and show the data in alert boxes. Example:

// var name = "Sherbaz Khan";
// var Age = 22;
// var Education = "MCS";
// alert("Name is: "+name);
// alert("Age is: "+Age)
// alert("Education: "+Education);

//Q5) Write a script to display the following alert using one JS variable:

// alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

//Q6) Fortune Teller: Why pay a fortuneteller when you can just program your fortune yourself?
//Store the following into variables: number of children, partner’s name, geographic location, and job title.

// var numberOfChildren = 4;
// var partnersName = "OOPS...ITS PERSONAL...!!";
// var geographicLocation = "DUBAI";
// var Profession = "CRICKETER";

// alert("You will be a "+Profession+", You'll live in "+geographicLocation+", Your partner will be "+partnersName+" & you'll have "+numberOfChildren+" Children");

//Q7) Declare a variable called email & assign to it a string that represents your Email Address (e.g. abc@xyz.com). 
//Show the below mentioned message in an alert box. (Hint: use string concatenation)

// var email = "shaby.ak47@hotmail.com";
// alert("Your Email id is: "+email);

//Q8) Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following
//message in an alert box:

// var book = "A smarter way to learn JavaScript";
// alert(book);

//Q9) Use the variables, declared in exercise 4 & show the details giving meaning to data. like 
//“My name is Ali Khan”, “I am 17 years old”, “I study in SSUET”, “I take Mobile & Cloud Computing, Module A classes”


// var name = "Sherbaz Khan";
// var age = 22;
// var Education = "MCS";
// var currentActivities = "Web Development Course From Saylani Welfare";

// alert("My Name is: "+ name);
// alert("My Age is: "+age);
// alert("I have done: "+Education);
// alert("Currently doing: "+currentActivities);

//Q10) Write a script to display this in browser through JS
// document.write("HURRRRAAAHHH! I can write HTML code through JAVASCRIPT");



//                                    3) VARIABLE FOR NUMBERS

//Q1. Declare a variable called age & assign to it your age. Show your age in an alert box.

// var age = 22;
// alert(age);

//Q2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
//number of visits on your web page. For example: “You have visited this site N times”.

// var a = 6;
// alert("You have visited this site "+a+" times");

//Q3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

// var birthYear = 1995;
// alert("My birth year is "+birthYear);


//Q4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables
//the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


// var visitorsName = "Sherbaz Khan";
// var productTitle = "J.";
// var quantity = 5;
// alert(visitorsName+" Ordered "+quantity+" T-shits on "+productTitle+" store.");


//                                   4)  VARIABLE NAMES:	LEGAL	&	ILLEGAL


//Q1. Declare 3 variables in one statement.

//var firstName, lastName, fullName;


//Q2. Declare 5 legal & 5 illegal variable names

//LEGAL
// var a;
// var a5;
// var _abc;
// var $abc;
//var myVar;

//ILLEGAL
// var 5a;
// var /abcs;
// var .Khan;
// var &fcd;
// var !fvc;


//Q3. 3. Display this in your browser
// a. A heading stating “Rules for naming JS variables”
// b. Variable names can only contain ______, ______,______ and ______.
// For example $my_1stVariable
// c. Variables must begin with a ______, ______ or_____. For example $name, _name or name
// d. Variable names are case _________
// e. Variable names should not be JS _________


// document.write("<h1>Rules for Naming JS Variables</h1><br>");
// document.write("<br>Variable names can only contain 'letters','numbers','dollarSign' & 'underscore'<br>");
// document.write("<br>Variables must begin with a Letter, UnderScore or dollarSign. For example $name, _name or name<br>");
// document.write("<br>Variable names are case Sensitive<br>");
// document.write("<br>Variable names should not be JS KeyWord");



//                                          MATH EXPRESSIONS

//Q1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var a = 5;
// var b = 9;
// var c = a+b;
// alert("Sum of "+a+" and "+b+" is equal to: "+c);

//Q2. Repeat task1 for subtraction, multiplication, division & modulus. E.g.


// var a = 16;
// var b = 9;
// var c = a-b;
// alert("Result of Subtracting "+b+" from "+a+" is equal to: "+c);


// var a = 16;
// var b = 9;
// var c = a*b;
// alert("Result of Multiplying "+b+" and "+a+" is equal to: "+c);

// var a = 16;
// var b = 2;
// var c = a/b;
// alert("Result of Dividing "+a+" by "+b+" is equal to: "+c);

// var a = 16;
// var b = 9;
// var c = a%b;
// alert("Remaminder of Dividing "+a+" by "+b+" is equal to: "+c);

//Q3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 3”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 4”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 11”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 10”.
// k. Show the remainder after dividing the variable’s value by 3. Output : “The remainder is : 1”


// var a;
// document.write("Value after variable decleration is: ??")
// a = 14;
// document.write("<br>Initial value is "+a);
// a = ++a;
// document.write("<br>Value after Increament is "+a);
// a = 7+a;
// document.write("<br>Value after Adding 7 is "+a);
// a = --a;
// document.write("<br>Value after decreament is "+a);
// a = a%3;
// document.write("<br>Remainder after dividing by 3 is "+a);


//Q4 Cost of one movie ticket is 600 PKR. Write a script to store
//ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// var a = 600;
// var b = a*5;
// document.write("The Cost Of buying 5 tickets is "+b);

//Q5 Write a script to display multiplication table of any number in your browser. E.g.

// var a = +prompt();
// for (var i=1;i<=10;i++)
// {
//     document.write(a+" x "+i+" = "+ a*i+"<br>");
// }

//Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


/*var cel = +prompt("Enter Celcius is Numeric Form");
var farhenheit = cel*9/5+32;
document.write("CELCIUS TO FARHENHEIT:<br>"+cel+"\xBa C is "+farhenheit+"\xBa F <br>");

var farhenheit = +prompt("Enter Farhenheit in Numeric Form");
var Celsius = ((farhenheit-32)*5/9);
document.write("<br><br><br><br>FARHENHEIT TO CELCIUS:<br>"+farhenheit+"\xBa F is "+Celsius+"\xBa C");*/


/* Q7. Write a program to implement checkout process of a shopping
cart system for an e-commerce website. Store the following in
variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges 


var price1 = 30;
var price2 = 40;

var quan1 = 3;
var quan2 = 2;

var shipCharges = 1000;

var total = (price1*quan1)+(price2*quan2)+shipCharges;

document.write("<h1>Shopping Cart</h1><br>");
document.write("<br>Price Of Item 1: "+price1+"Rs");
document.write("<br><br>Price of Item 2: "+price2+"Rs");
document.write("<br><br><br><br>Quantity of Item 1: "+quan1+"Rs");
document.write("<br><br>Quantity of Item 2: "+quan2+"Rs");
document.write("<br><br><br><br>Shipping charges: "+shipCharges+"Rs");
document.write("<br><br><br><br><h2>Total Cost Of Your Order is: "+total+"Rs");*/

//Q8. Write a script to take total marks & marks obtained by a student. Compute the percentage & 
// show the result in your browser.


// var a = +prompt("Enter Value 1");
// var b = +prompt("Enter Value 2");
// var c = +prompt("Enter Value 3");
// var d = +prompt("Enter Value 4");
// var e = +prompt("Enter Value 5");
// var g = a+b+c+d+e;
// var f = (g/500)*100;




// if (f >= 40 && f <50)
// {
//     document.write("Your Grade is *D* & Your Marks = " + g);
//     document.write("<h2><br>Your Percentage is : " + f + "%");
// }
// else if (f >= 50 && f<60)
// {
//     document.write("Your Grade is *C* & Your Marks = " + g);
//     document.write("<h2><br>Your Percentage is : " + f + "%");
// }
// else if (f >= 60 && f <70)
// {
//     document.write("Your Grade is *B* & Your Marks = " + g);
//     document.write("<h2><br>Your Percentage is : " + f + "%");
// }
// else if (f >= 70 && f <80)
// {
//     document.write("Your Grade is *A* & Your Marks = " + g);
//     document.write("<h2><br>Your Percentage is : " + f + "%");
// }
// if (f >= 80 && f <=100)
// {
//     document.write("Your Grade is *A+* & Your Marks = " + g);
//     document.write("<h2><br>Your Percentage is : " + f + "%");
// }
// else if (f < 40)
// {
//     alert("YOU ARE FAIL becoz your Marks = " + g);
// }

/* Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script
to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee?*/


// var a =10*104;
// var b =25*28;
// var c = a+b;
// document.write("Total Rupees We Have: "+c);


/* Q10. Write a program to initialize a variable with some number
and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression.*/

// var a = ((16+5)*10)/2;
// document.write(a);

/* Q11. The Age Calculator: Forgot how old someone is? Calculate
it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: “They are either NN or NN
years old”.*/


// var cy = 2017;
// var by = 1995;

// var age = cy-by;
// var age2 = age+1;
// document.write("Age is Either "+age+" or "+age2);


/*12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The area is
NN”. (Hint : Area of a circle = π r2, π = 3.142)*/

// var radius = 25;

// var circumference = 2*3.142*radius;
// document.write("Cicumference is "+circumference);

// var area = (3.142)*(25*25);

// document.write("<br><br>Area of Circle is: "+area);



/* Q13. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser:*/

// var a =14;

// document.write("The Value of a = "+a);

// document.write("<br><br>*********************************************<br><br>")
// ++a;
// document.write("Value of ++a = "+a);
// document.write("<br>Now the Value of a = "+a+"<br><br>");

// a=a++;
// document.write("Value of a++ is = "+a);
// a++;
// document.write("<br>Now the Value of a = "+a);
// --a;
// document.write("<br><br>The Value of --a = "+a);
// document.write("<br>Now the Value of a = "+a);

// a=a--;
// document.write("<br><br>The Value of a-- = "+a);

// a--;
// document.write("<br>Now The Value of a = "+a);


/* Q14. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; */

//          EXPLAINATION    --a     -   --b   +    ++b     +      b-- 
//                            1     -    0    +      1     +      1  =  3


// var a = 2;
// var b =1;
// var result = --a - --b + ++b +b--;
// document.write(result);


/*Q15. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is? Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.*/

// var a = "Lays";
// var age1 = 22;
// var age2 = 60;
// var days = (60-22)*365;
// var amountOfSnacksPerDay = 3*days;

// document.write("Favourite Snacks "+a);
// document.write("<br>Current Age "+age1);
// document.write("<br>Max Age "+age2);
// document.write("<br>Amount Of Snacks Per Day 3");
// document.write("<br><br><h2>You will need *"+ amountOfSnacksPerDay +" Lays* to last you until the ripe old age of "+age2);




//                              USER INPUT & CONDITIONAL STATEMENTS

// Q1. Write a program that takes input a name from user & greet the user like this:

// var a = prompt("Please Enter Your Name");
// alert("Hi "+a+"\nWelocme!!!");


/*Q2. Write a program to take input a number from user & display
it’s multiplication table on your browser. If user does not enter
a new number, multiplication table of 5 should be displayed by
default.*/

// var a = +prompt("Enter a Number to Print Table",5);
// for(var i = 1; i <=10; i++)
// {
//     document.write(a+" x "+i+" = "+ a*i+"<br>");
// }


/* Q3. Write a program to take “city” name as input from user. If user
enters “Karachi”, welcome the user like this: “Welcome to city
of lights”*/

// var a = prompt("Enter a City Name");
// if (a=="Karachi")
// {
//     alert("Welocme To City Of Lights");

// }
// else
// {
//     alert("Welcome to "+a);
// }


/* Q4. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the user is
female, give the message: Good Morning Ma’am.*/

// var a = prompt("Enter Gender MALE or FEMALE");
// if(a=="MALE")
// {
//     alert("Good Morning Sir");
// }
// else if (a=="FEMALE")
// {
// alert("Good Morning Ma'am");
// }


/*
Q5. Write a program to take input color of road traffic signal from
the user & show the message according to this table:*/

// var a = prompt();

// if(a=="Red")
// {
//     alert("Vehicles must Stop")
// }
// else if (a=="Green")
// {
//     alert("Vehicles can Move Now");
// }
// else if (a=="Yellow")
// {
//     alert("Vehicles should get ready to move");
// }

/* Q6. Write a program to take input max age & current age from
user. If the current age is less than or equal to max age, show the message “You are welcome”*/

// var a = +prompt("Enter Current Age");
// var b = +prompt("Enter Max Age");
// if(a<b)
// {
//     alert("You are Welcome");
// }


//Q7. Write a program to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”

// var a = +prompt("Enter Remaining Fuel in Numeric form");
// if(a<0.25)
// {
//     alert("Please Refill the Fuel in your car");
// }
// else
// {
//     alert("There is enough fuel in the car s you don't need to refill right now");
// }


// // Q8. Run this script, & check whether alert message would be
// //displayed or not. Record the outputs.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // var b = 82;
// //if (b++ === 83){
// //alert("given condition for variable b is true");
// //}
// // var c = 12;
// //if (c++ === 13){
// //alert("condition 1 is true");
// //}
// if (c === 13){
// alert("condition 2 is true");
// }
// //if (++c < 14){
// //alert("condition 3 is true");
// //}
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// //if (false){
// //alert("False");
// //}
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }


/*Q9. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute grade as
per following table:*/

// var a = +prompt("Enter Value 1");
// var b = +prompt("Enter Value 2");
// var c = +prompt("Enter Value 3");
// var d = +prompt("Enter Value 4");
// var e = +prompt("Enter Value 5");
// var g = a+b+c+d+e;
// var f = (g/500)*100;




// if (f >= 40 && f <50)
// {
//     document.write("Your Grade is *D* & Your Marks = " + g);
//     document.write("<h2><br>Your Percentage is : " + f + "%");
//      document.write("<br>Remarks:  You need to foucs alot");
// }
// else if (f >= 50 && f<60)
// {
//     document.write("Your Grade is *C* & Your Marks = " + g);
//     document.write("<h2><br>Your Percentage is : " + f + "%");
//     document.write("<br>Remarks:  You need to Improve");
// }
// else if (f >= 60 && f <70)
// {
//     document.write("Your Grade is *B* & Your Marks = " + g);
//     document.write("<h2><br>Your Percentage is : " + f + "%");
//      document.write("<br>Remarks:  Keep it up");
// }
// else if (f >= 70 && f <80)
// {
//     document.write("Your Grade is *A* & Your Marks = " + g);
//     document.write("<h2><br>Your Percentage is : " + f + "%");
//      document.write("<br>Remarks:  GOOD PEERFORMANCE");
// }
// if (f >= 80 && f <=100)
// {
//     document.write("Your Grade is *A+* & Your Marks = " + g);
//     document.write("<h2><br>Your Percentage is : " + f + "%");
//      document.write("<br>Remarks:  TREMENDOUS");
// }
// else if (f < 40)
// {
//     alert("YOU ARE FAIL becoz your Marks = " + g);
//document.write("<br>Remarks:  You are Suspended");
// }


/*Q10. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Take input
from users, the following:
a. Name of item1
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount & show the receipt in your browser.*/

// var price1 = 30;
// var price2 = 40;

// var quan1 = 3;
// var quan2 = 2;

// var shipCharges = 2000;

// var total = (price1*quan1)+(price2*quan2)+shipCharges;

// document.write("<h1>Shopping Cart</h1><br>");
// document.write("<br>Price Of Item 1: "+price1+"Rs");
// document.write("<br><br>Price of Item 2: "+price2+"Rs");
// document.write("<br><br><br><br>Quantity of Item 1: "+quan1+"Rs");
// document.write("<br><br>Quantity of Item 2: "+quan2+"Rs");
// document.write("<br><br><br><br>Shipping charges: "+shipCharges+"Rs");
// var dis = total/10;
// var newcost = total-dis;
// if(total>2000)
// {
//     document.write("<br><br><br><br><h2>Total Cost Of Your Order is: "+total+"Rs");
//     document.write("<br><h2>After Discount: "+newcost);
// }


/*11. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/

// var a = 8;
// var b = +prompt();
// if(b==a)
// {
//     document.write("Bingoo..!! Correct");
// }
// else if (b == 9)
// {
//     document.write("Close enough to the correct answer");
// }


/* Q12. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number is
divisible by 3.*/

// var a =+prompt();

// var b = a%3;

// if (b==0)
// {
//     document.write("It is divisible by 3");
// }
// else
// {
//     document.write("Not Divisible");
// }


/*Q13. Names & Total scores of two teams are taken as input. Write
a program that shows which team has won the game or show if
there is a tie. (Team A or Team B)*/

// var name = prompt();
// var score1 = +prompt();
// var nameb = prompt();
// var score2 = +prompt();

// if(score1>score2)
// {
// document.write(name+" have won");
// }
// else 
// {
//     document.write(nameb+" have Won");
// }


/*Q14. Take a string, a number and a Boolean in three variables.
Write a program that checks the type of variables & responds
accordingly. Like*/

// var a = prompt("Enter a string");
// var b = +prompt("Enter a number");
// var c =prompt("Enter Boolean(True or False");

// alert(a+" is a string");
// alert(b+" is a number");
// alert(c+"is boolean");


/*Q15. Write a program that checks whether the given input is an
even number or an odd number.*/

// var a = +prompt();
// var b = a%2;

// if(b==0)
// {
//     document.write("Even Number");
// }
// else
// {
//     document.write("Odd Number");
// }

/*Q16. Weather in Karachi nowadays is too cool, write a program
that takes temperature as input and shows a message based on
following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/



// var a = +prompt();
// if(a>40)
// {
//     document.write("It is Hot Outside");
// }
// else if (a>30 && a<40)
// {
//     document.write("The Weather today is normal");
// }
// else if (a>20 && a<30)
// {
//     document.write("Today's Weater is cool");
// }
// else if(a>10 && a<20)
// {
//     document.write("OMG! Today's Weather is so Cool");
// }


/*Q17 17. Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/

// var a = +prompt("First Number");
// var b = +prompt("Second Numebr");

// var c = prompt("Press A for ADD, B for Suctract, C for Multiply & D for Divide");
// if(c=="A")
// {
//     document.write(a+b);
// }


/*Q18. Write a program that takes user input day name. If the day is
Monday, Tuesday, Wednesday, Thursday or Friday, then show
“It’s a week day”. If the day is Saturday then show “It’s
weekend”. If the day is Sunday then show “Yay! It’s a holiday”.*/

// var a = prompt();
// if(a == "Monday" || a == "Tueday" || a == "Wednesday" || a == "Thursday" |a == "Friday")
// {
//     alert("It's a Week Day");
// }
// else if (a == "Saturday")
// {
//     alert("It's a Weekend");
// }
// else if (a=="Sunday")
// {
//     alert("Yay! It's a Holiday");
// }


//Q 19. Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again

// var a = +prompt();
// if(a>50)
// {
//     alert("You are passed");
// }
// else
// {
//     alert("Try Again");
// }


//Q20. Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal
// Show the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// var a =+prompt();
// var b = +prompt();

// if (a>b)
// {
//     alert(a+" is greater than "+b);
// }
// else if (b>a)
// {
//     alert(b+" is greater than "+a);
// }
// else if (a==b)
// {
//     alert(a+" and "+b+" are Equal");
// }


/*Q21. The Translator:
Write a program that:
a. takes 1 input, a language code (e.g. "es", "de", "en")
b. tells "Hello, World" for the given language, for atleast 3
languages. It should default to returning English.
(Hint: use translate.google.com to check the translation of
hello world in different languages)*/

// var a = prompt();
// if (a=="en")
// {
//     alert("Hello World");
// }
// else
// {
//     alert("Hello World");
// }


/*Q22. Write a program to take input a number & tell whether it’s a
positive or negative number.*/

// var a  =+prompt();

// if (a>0)
// {
//     alert("Psoitive Number");
// }
// else
// {
//     alert("Negative Number");
// }


/*Q23. The Pluralizer: Write a program that:
a. takes 2 inputs, a noun and a number.
b. tells the number and pluralized form, like "5 cats" or "1
dog".
Run the program for a few different inputs and show the result
to make sure it works.*/


// var noun = prompt("Enter a Noun");
// var num = +prompt("Enter a number");

// alert(num+" "+noun+"s");




//                    IF…ELSE & ELSE IF STATEMENTS, TESTING SET OF CONDITIONS & SWITCH STATEMENTS


/*1. Write a program to check whether the given input number is
divisible by 3 or else show a message “Number is not divisible
by 3”.*/


// var a =+prompt();

// var b = a%3;

// if (b==0)
// {
//     document.write("It is divisible by 3");
// }
// else
// {
//     document.write("Not Divisible");
// }


/*2. Write a program that checks whether the given input is an even
number or an odd number.*/

// var a =+prompt();
// var b = a%2;
// if(b==0)
// {
//     alert("Number is Even");
// }
// else
// {
//     alert("Number is Odd");
// }




/*3. Write an if/else statement with the following condition:
If the variable age is greater than 18, output "Old enough",
otherwise output "Too young".*/


// var age = +prompt();
// if(a>18)
// {
//     alert("Old Enough");
// }
// else
// {
//     alert("Yoo Young");
//}




/*4. Write a program that prompts the user for their name, and then
displays a special greeting to that person if their name is the
same as yours. If the name entered by the user is anything
other than your name, your code should not produce any
output.*/