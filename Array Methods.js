/* 
1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
2. Does it edit the current array?
3. What does it return?
4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
5. Build your real world example. 
*/


/*
.push()
1. It adds another element to the end of an existing array. The new element is taken as a parameter, and the name of the array precedes the .push()
2. Yes, it adds something to the end of it, changing the length as well
3. It returns the array with the element pushed at the end of it. If push() is used inside a console.log, the new length is returned
4. I could use this if I need to add something else to an array and I don't want to create an entirely new one. For example, if I had an array that held the names
   of all the students in a classroom. If a new student is registered at the school after the original array is created, it would be easier to simply add him to 
   the array than create a whole new one and have to re-type hundreds of student names.
5. (see below)
*/ 
var students = ["John", "Tim", "Bethany", "Amanda", "James", "Ruth"];
students.push("Luke");

// Then, if another student comes along I can easily add them too
students.push("Emma");


/*
.pop()
1. This removes the last element of an array. It has no parameters and the name of the array precedes the .pop()
2. It does edit the current array by removing the last element of it
3. It returns the already existing array minus the last element of it. If .pop() is used inside a console.log, the element removed is logged
4. I could use this if, building off my previous example, I needed to remove a student I just added because they won't be attending the school after all. That way 
   I could easily remove them without affecting the other students' names
5. (see below)
*/ 
students.pop(); // Emma won't be attending school here


/*
.shift()
1. This removes the first element in an array. It doesn't take any parameters and the name of the array wanting to be modified precedes the .shift()
2. It does edit the array by removing the first element of it
3. It returns the array without its first element. If used inside a console.log, the element removed is logged
4. I could use this if I was keeping track of orders to be shipped. Once the first one was shipped, I could remove it to make the next one to be shipped
   the first item and priority.
5. (see below)
*/ 
var orders = ["Order 1", "Order 2", "Order 3", "Order 4"];
orders.shift();

/*
.unshift()
1. This adds elements (1 or more) to the beginning of an array. Its parameters are the elements that are to be added, and the name of the array precedes 
   the .unshift()
2. It does edit the array by adding elements to the front of it
3. It returns the given array plus any parameters of .unshift(). If used inside console.log, the new length of the array is returned
4. I could use this method if I was keeping track of orders, as in the example previous. If some orders of highest priority were brought to my attention, I 
   could add those directly to the front of the line so they would be shipped first
5. (see below)
*/ 
orders.unshift("Order 5-Priority", "Order 6-Priority");

/*
.sort()
1. It sorts an array according to Unicode points unless otherwise specified by a function. Then, it can be sorted in whatever way the function specified. If 
   a function is used, it will take that function as a parameter.
2. It does edit the array by switching the order of its elements, but does not add or remove any pieces
3. It returns the existing array in the order specified, or if unspecified, in the order dictated by Unicode
4. I could sort tasks by their urgency using this method, putting the most urgent tasks firsts. 
5. (see below)
*/ 
// Example with function
var tasks = [
    {name: "Take out the trash", value: 2},
    {name: "Write essay", value: 1},
    {name: "Research jobs", value: 3}
]

function sortPriority(a, b) {
    return a.value - b.value;
}

tasks.sort(sortPriority);

// Example without function
var toDo = ["3-vaccuum", "1-do laundry", "2-email professor"];
toDo.sort();

/*
.concat()
1. This method combines two arrays into a new array. It takes in parameters of whichever arrays are to be combined, with one of those arrays preceding the .concat()
   method. It can also take values as a parameter that are to be added to the new array
2. This does not edit any of the arrays being combined, it simply creates a new one
3. It returns a new array with all the values from any values or values inside arrays that were passed in as parameters
4. I could use this method to take all the assignments from seperate classes and combine them in one place, like an agenda that lists all assignments.
5. (see below)
*/ 
var history = ["Essay", "Reading", "Discussion Board"];
var math = ["Word Problems", "Chapter Quiz"];
var computerScience = ["Project", "Group Activity", "Debug Code", "Practice Pointers"]

var agenda = history.concat(math, computerScience);
computerScience.pop();


/*
.forEach()
1. It carries out a specified task for each element in an array. Its parameters are the function that specifies what will be done with each element
2. It can edit the array, but doesn't necessarily. It all depends on what function you are passing in and what that function does.
3. It returns whatever the function specifies (it can log on the console, add the numbers together, delete an element)
4. I could use this if I was keeping track of how many points each of my students had, and was going to add 20 points to the people who are failing 
   so I don't look like a bad teacher. Instead of going through each grade individually, I can do it all much faster using a forEach method.
5. (see below)
*/ 
var grades = ["90", "83", "70", "100", "45", "87", "54"];

grades.forEach(function(grade, index) {
    if (grade < 60) {
        grade[index] += 20;
    }
})

/*
.includes()
1. It searches an array to find if a parameter exists in the array. It can take one or two parameters, either what to search for and the index of it, or just 
   what to search for. If a negative number is given as the index, the whole array will be searched
2. It does not edit the array
3. It returns either true or false. True if it found the thing you search for and in the place specified (if applicable), or false if not found
4. I would use this if I was a doctor and had a very large list of patients, and wanted to know if a specific patient had been in my office before (so I could
   pull up her records).
5. (see below)
*/ 
var patients = ["Mary", "Kate", "Elizabeth", "Brittany", "Jake", "Ryan", "Pablo", "Denise", "Linda", "Carrie"];
if (patients.includes("Denise") == false) {
    console.log("New patient");
}
else {
    console.log("Existing Patient");
}

/*
.every()
1. It checks if every element in an array meets a specific requirement or standard put in place by the user. It takes in a function or an arrow function as 
   its parameters. That function is what sets the rules that the elements must be following in order to return true
2. It does not edit the array
3. It either returns true or false, depending if every element meets the standards or not
4. I would use this if I was a business owner and wanted to see if any of my customers gave me a review below 3 stars, so I could know that I was either doing a 
   pretty good job or maybe I needed to improve my business
5. (see below)
*/ 
var reviews = [5, 5, 5, 4, 3, 5, 3, 4, 4, 3, 3]; //I'm a pretty good business owner
reviews.every(x=> x >= 3);

/*
.some()
1. It sees if any of the elements in an array follow a certain guidline. Its parameter is a function, which sets what the rules are. The parameters that the function takes in is the current element being processed.
2. It does not edit the current array
3. It returns either true or false, depending on if at least one element in the array meets the condition or not
4. I could use this method if I was creating a display board in front of a restaurant and wanted to check if I have any letters besides the ones I'm not going to use (w, x, y, z) so I can spell what I want
5. (See below)
*/
var letters = ["a", "e", "f","q", "r", "w", "w", "x","y", "z"];

function searchLetters(letter) {
	return letter < "x";
}

letters.some(searchLetters);


/*
.filter()
1. It creates a new array with all the elements of another array that pass a sort of screening, which is up to the user to create. Its parameter is a function, and the parameter of the function is whatever the current element being processed is.
2. It does not edit the current array, it creates a new one
3. It returns a new array that contains only the elements that met the requirements of the function
4. I would use this if I was picking out a name for my child to make sure their name would fit completely on a driver's license, since their last names are super long (20 characters combined) and the driver's license can hold 26 characters
5. (See below)
*/
var names = ["Benjamin", "Joe", "Buddy", "Jose", "Luke", "Joseph", "Arthur"];

var options = names.filter(word => word.length <= 4);

console.log(options); // all possible Boy's names


/*
.map()
1. It makes a new array with the results of a function called on every element in an array. Its parameters are (if using arrow notation) the element being processed and what is to be returned
2. It doesn't edit the current array, it simply creates a new one
3. It returns a new array filled with values produced from each element of the original array being passed through the function
4. I would use this method if I was wanting to convert a set of numbers from decimals to percentages
5. (See below)
*/
var decimals = [0.8, 0.4, 0.35, 0.23, 0.9, 0.76];

var percents = decimals.map(decimal => decimal * 100);
console.log(percents);

/*
.reduce()
1. It takes all the numbers in an array and combines them to one value, or counts instances of an element. It takes in a variable that is equal to an arrow notation function
2. It doesn't
3. It returns a single value which is a combination of all the elements of the array, or an object noting the instances of each item in the array
4. I would use this if I was trying to add a bunch of scores together from my golf tournament to see my overall score
5. (See below)
*/
var golfScores = [3, 2, 1, 4, 2, 1, 5, 4, 2, 1];
var reducer = (accumulator, currentValue) => accumulator + currentValue;
golfScores.reduce(reducer);

var golfScores2 = [3, 2, 1, 4, 2, 1, 5, 4, 2, 1];
golfScores2.reduce(
    (accumulator, currentValue)=> accumulator + currentValue, 0
);


/*
.splice()
1. It can either replace an element in an array or add one to the array. Its parameters are the position to be inserted into, the number of items to replace, and what value to put into the array
2. It does edit the array by replacing or adding pieces to it
3. It returns the edited array
4. I would use this if I was planning my courses by semester and I needed to switch a class from one semester to another
5. (See below)
*/
var semester1 = ["CS 124", "FDREL 225", "FDSCI 101", "FDWLD 101"];
var semester2 = ["CS 165", "ECEN 160", "CS 235", "CS 237", "FDREL 250"];
var semester3 = ["CS 237", "CHEM 105", "FDREL 275","FDWLD 201"];

// Now I decided I want to take FDREL 275 my second semester and FDREL 225 my third semester, and I also want to add ENG 301 to my third semester instead of FDWLD 201
semester1.splice(1, 1, "FDREL 275");
semester3.splice(2, 2, "FDREL 225", "ENG 301");


/*
.from()
1. It creates an array out of a string, which each letter a different element of the array, or creates a new array from another array, modifying it for the new array. Its parameters are either a string or an array and an arrow notation function
2. It creates a new array that didn't exist, so yes
3. It returns a new array
4. I would use this method if I was trying to take an assignment out of 25 that is actually worth 100 points and convert each classmate's test to the correct score
5. (See below)
*/
Array.from([25, 15, 23, 19, 24.5, 21], x=> x * 4);

/*
.toLocaleString()
1. It turns an array of information into a single string. It doesn't necessarily have any parameters
2. Yes, it does edit the array
3. It returns a string
4. I would use this method if I was wanting to put some basic user information of my patients into a single line for my records
5. (See below)
*/
var name = ["Emma", "Anna", "Jake", "Adrian"];

var age = [18, 32, 24, 22];

var insurance = ["Anthem", "Medicare", "none", "BYUI"];

for(var i = 0; i < name.length; i++) {

var info = [name[i], age[i], insurance[i]];

var string = info.toLocaleString();

console.log(string);

}