


//OBJECT//

let car = {
    name: "FIAT",
    model: "500",
    color: "white",
    weight: "500kg",
    nameModel: function () {
        return this.name + " " + this.model
    },
    colorWeight: function () {
        return `${this.color} ${this.weight}`
    }
}

console.log(car["color"]);
console.log(car.name);
console.log(car.model);
console.log(car.nameModel());
console.log(car.colorWeight());

let alertName = function () {
    alert("Hi my name is Bassey")
}

function showDate() {
    document.getElementById('demo').innerHTML = Date()
}


let string = "He said 'HallELuyah'  'Halleluyah' ";
console.log(string.replace(/Halleluyah/ig, "Precious"));

let text = "i love a chic style, chic style is what i love to be in everyday";
console.log(text.replaceAll("chic", "doggy"));

let text3 = "Hello ".concat(text);
console.log(text3);

let pad = "we"


let padsStart = pad.padStart(6, "o");
console.log(padsStart);

console.log(padsStart.charAt(3));

console.log(padsStart.charCodeAt(2));

//ig helps the lack of case sensitive existence and ensures the global searches.

let aSentence = "Hello world, welcome to the universe world";
console.log(Array.from(aSentence.matchAll(/world/gi)));
//the above means get the array *from* solution.

console.log(aSentence.includes("world, 12"));
console.log(aSentence.includes("paps"));

console.log(aSentence.startsWith("paps"));
console.log(aSentence.startsWith("Hello"));
console.log(aSentence.endsWith("paps"));
console.log(aSentence.endsWith("world"));
console.log(aSentence.startsWith("welcome", 23));
//the second fugure sets the amount of index in the string that the word either begins or ends it.

let firstName = `Becca`;
let lastName = `Bassey`;
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let principal = 1000;
let rate = 4;
let time = 2;

let prt = `₦${principal * rate * time}`;
console.log(prt);


let cars = ['ford', 'volvo', 'Mercedes', 'Spider', 'Toyota'];
let owner = `rebecca`

let html = `<h2>The following are ${owner}'s vehicles:`

for (i = 0; i < cars.length; i++) {
    console.log(`the following are ${owner}'s ${cars[i]}`);
}
console.log("string ends here");

let x = 10;
let y = 20;
console.log(x + y);

let a = `10`;
let b = `20`;
console.log(a + b);

let z = "30";
console.log(x + z + y);

console.log(a / b);
console.log(a * b);
console.log(b - a);

let nan = isNaN('cow' / x);
console.log(nan);
console.log(typeof (nan));

//NUMBER METHODS

let r = 50;
console.log(r.toString());

//to.Fixed returns a string with a specific number of decimals.

console.log(r.toFixed(2));

//toPrecision() returns the string with a specified length.

let ab = 56.56;
console.log(ab.toPrecision(2));
console.log(ab.toPrecision(3));

let arrayValue = [23, 34, 54, 34];

//float has to do with the decimal number. integer has to do with the positive and negative whole number.

Number("34");

//new Date returns the date on your system.

console.log(new Date());

console.log(Number.isInteger(-234));

console.log(Number.isSafeInteger(-23));
console.log(Number.isSafeInteger(23));

let books = ["", "Odyssey"];
console.log(books);
books[0] = 'Purple Hibiscus';
books[10] = "Harry potter";
books[1] = "avatar";
console.log(books.indexOf("Harry potter"))
console.log(books.length);
console.log(books.length - 1);
console.log(books.valueOf())

let fruits = ["Banana", "Orange", "Apple", "Mango"]

for (let by = 0; by < fruits.length; by++) {
    console.log('This is fruit number ' + (by + 1) + ' and it is ' + fruits[by]);
}
console.log("this are all the fruits");
for (let by = 1; by <= fruits.length; by++) {
    console.log('This is fruit number ' + (by) + ' and it is ' + fruits[by - 1]);
}


fruits.forEach((fruit, index) => {
    console.log("this is fruit number " + (index + 1) + " and it is " + fruit)
});


//ARRAY METHODS
//CONVERTING ARRAYS TO STRINGS

const mildAnimals = [
    "Lion",
    "Sheep",
    "Tiger"
];

console.log(mildAnimals);
console.log(mildAnimals.toString());

//USING .join() TO CONVERT AN ARRAY TO A STRING AND SELECT THE SEPERATOR

console.log(mildAnimals.join(" *"));
console.log(mildAnimals.join(' blah '));

//USING .push() TO ADD A VALUE TO THE END OF AN ARRAY

mildAnimals.push("Aligator");
console.log(mildAnimals);

//USING .pop() TO REMOVE AN ITEM FROM THE END OF AN ARRAY

mildAnimals.pop();
console.log(mildAnimals);

//USING .shift() TO REMOVE THE FIRST ITEM OF AN ARRAY

mildAnimals.shift();
console.log(mildAnimals);

//USING .unshift() TO ADD ITEMS TO THE FRONT OF AN ARRAY

mildAnimals.unshift("Dragon");
console.log(mildAnimals);

//CHANGING ELEMENTS OF AN ARRAY USING INDEXES.

mildAnimals[0] = "Donkey";
console.log(mildAnimals);

//USING ARRAY LENGTH .length() AS AN INDEX VALUE TO ADD NEW ITEMS TO AN ARRAY

mildAnimals[mildAnimals.length] = "rat";
console.log(mildAnimals)

//USING DELETE TO REMOVE ITEMS FROM AN ARRAY. NOTE: IT WILL PRESENT A GAP

delete mildAnimals[2];
console.log(mildAnimals);

//USING .concat() TO ADD ARRAYS AND STRINGS TOGETHER

const wild = ["Giraffe", "Ox", "Bison"];
const wildd = ["Giraffe", "Ox", "Bison"];
const newAnimals = mildAnimals.concat(wild, wildd, "Snake");

console.log(newAnimals);

/*USING .splice() TO SPECIFY WHAT INDEX YOU WANT TO REMOVE AND THE AMOUNT OF ITEMS YOU WANT TO REMOVE
 AND WHAT YOU WOULD LIKE TO REPLACE THEM WITH WITHOUT CREATING ANY HOLES IN YOUR ARRAY*/

newAnimals.splice(9,1, "Camel", "Fish");
newAnimals.splice(2, 1);
console.log(newAnimals);

/*USING .slice() TO REMOVE AN ITEM FROM AN ARRAY AND STORE IN ANOTHER VARIABLE. IT SLICES OUT THE AMOUNT OF
 INDEX IN THE PARAMETERS AND SAVES THE REST IN THE NEW VARIABLE. IT DOESN'T AFFECT THE MAIN ARRAY. THE FIRST 
 DIGIT INDICIATES THE INDEX THAT THE SLICING BEGINS AND THE SECOND DIGIT TELLS YOU THE AMOUNT OF INDEXES IT 
 WILL SLICE*/

 let newBox = newAnimals.slice(1, 6);
console.log(newBox);

//SORTING ARRAYS USING .sort(). THIS HELPS IT TO SORT THE ARRAY ALPHABETICALLY

let sortedArray = newAnimals.sort();
console.log(sortedArray);

//USING .reverse() TO ARRANGE THE ITEMS OF AN ARRAY IN DESCENDING ORDER

let reverseArray = newAnimals.reverse();
console.log(reverseArray);

//SORTING NUMBERS IN ASCENDING ORDER WITH A FUNCTION

const oddNumbers = [27, 3, 33, 9, 121];

let sortedNumbers = oddNumbers.sort(function(a, b){
    return a - b;
});

console.log(oddNumbers);

let decNumbers = oddNumbers.sort(function(a, b){
    return b - a;
});
console.log(decNumbers);


