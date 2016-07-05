// COMM644
// Assignment 4
// Manuchehr Riazati

/*syntax to create new object
var variableName = new ObjectType(arguments);   new object using generic Object type;
var car = new Object();

*/
/*
		// STEP 1
		// 1.	Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog. 

	var Animmal = Animmal || {};
	Animmal.Cat = function() {};
	Animmal.Dog = function() {};
*/

// or

/*
var Animmal = Animmal || {};
var cat = new Animmal();
var dog = new Animmal();
//create 2 subclasses; cat and dog
*/


		// STEP 2
/*
		//2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.	
	var cat = {
    type: "persian",
    color: "white",
    getInfo: function () {
        return this.color + ' ' + this.type + ' ' + 'cat';
    }
	function Dog(){
    var type  = "germanSheperd";
    var color = "brown";
		this.getInfo = function(){
			return color + ' ' + type + ' ' + 'dog';
		}  
	}
	var dog = new Dog();
*/


		// STEP 3
/*
		// 3.	Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
	var marley = new Dog();
	var cat = {
    type: "persian",
    color: "brown",
		getInfo: function () {
			return this.color + ' ' + this.type + ' ' + 'cat';
		}
	}
	var dog = new Dog("germanSheperd", "black");
*/

		// STEP 4
/*
		// 4.	Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.
	var Animmal = function(type, color) {
		this._type = type;
		this._color = color;
		this._object = "Animmal";
		this.getInfo = function(){
			return color + ' ' + type + ' ' + 'Animmal';
		} 
		window.console.log("The Animmal has been created");
	}
	var cat = new Animmal();
*/

		// STEP 5
/*
		// 5.	Now, change the above code so that it uses constructor notation instead. The class should accept a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated
	var Animmal = function(species) {
		var _type = "animal";
		this._species = species;
		window.console.log("Object is a "+ this._species + ' ' + _type);
	}
	var cat = new Animmal("feline");
*/

		// STEP 6
/*
		// 6.	Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 
	var Animmal = function(type,breed,color,height,length){
	var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;
    this.getInfo = function(){
        return (type + " is " + breed + " " + color + ' ' + height + " high " + length + " long.");
	} 
	}
	var cat = new Animal("cat","persian","black","6 inches","11 inches");
*/

		// STEP 7
/*
	// 7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
	
	var Animal = function(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length; 
	}
	var cat = new Animal("cat","persian","black","6 inches","11 inches");

	for(var property in cat){
    document.write(property + ': ' + cat[property] + "<br>");
*/

		// STEP 8
/*
		// 8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
		
	var Animal = function(type, color) {
    this.type = type;
    this.color = color;
	}
	Animal.prototype.speak = function() {
		if (this.type == "dog"){
		   return("The " + this.color + " dog is barking!");
		}else { 
		   return("The " + this.color + " cat is meowing!");
		}
	};
	var dog = new Animal("dog","black");
	var cat = new Animal("cat","white");

	window.console.log(dog.speak()); // barking
	window.console.log(cat.speak()); // meowing
*/

		// STEP 9
/*
		// 9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
		
	var Animal = function(type, breed, color, height, length) {
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;
    getInfo = function(){
        return (type + " is " + breed + " " + color + ' ' + height + " high " + length + " long.");
    } 
    this.checkType = function() {
       if (type == "dog"){
          return("Dog");
       }else { 
          return("Cat");
       }
    }
	};
	
	Animal.prototype.speak = function(type) {
		   window.console.log("The " + type + " has made a sound");    
	};

	var dog = new Animal("dog","germanSheperd","black","10in","20in");
	var cat = new Animal("cat","persian","white","6in","12in");    
		
	var soundType = dog.checkType();
	dog.speak(soundType);
	var soundType = cat.checkType();
	cat.speak(soundType);         
*/

*/

		// STEP 10 	
/*
		// 10.	Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.

	String.prototype.findWords = function(word, paragraph){
    var numCount = 0;
    var soundWord = word;
    var soundParagraph = paragraph;
 
    var reg = new RegExp(soundWord, 'auh');
    numCount = soundParagraph.match(reg).length;
    
    alert(numCount); 
	}
	var paragraph = "paragraph, moosh, home, dog, horse, gorbeh, cat, khaneh, home";
	paragraph.findWords("home", paragraph);
*/

		// THE RECIPE CARD	
		////Create recipe object
/*

	var myFavRecipe = new Object;
	myFavRecipe.strTitle = "Guacamole";
	myFavRecipe.numServings = 4;
	myFavRecipe.arrIngredients = [
	   "3 Avacados"               ,
	   "1 Lime"                   , 
	   "1 Teaspoon Salt"          , 
	   "1/2 Cup Onion"            , 
	   "3 Tablespoons Cilantro",
	   "2 Diced Tomatoes"         , 
	   "1 Teaspoon Garlic"        , 
	   "1 Pinch Ground Pepper"    
	];
	myFavRecipe.showRecipe = function(){
	   window.console.log("Title: " + this.strTitle);
	   window.console.log("Serves: "+ this.numServings);
	   window.console.log("Ingredients:");
	   for (var i = 0; i < this.arrIngredients.length; i++){
		  window.console.log("- " + this.arrIngredients[i]);
	   }
	};
	console.log(myFavRecipe.showRecipe());
*/

		// THE READING LIST
/*
		//array of objects:
	var books = [
		book1 = {
			'title': 'Harry Potter and the Cursed Child',
			'author': 'J. K. Rowling',
			'read': true
		},
		book2 = {
			
			'title': 'Night',
			'author': 'Elie Wiesel',
			'read': true
		},
		book3 = {
			'title': 'The Night Trilogy: Night, Dawn',
			'author': 'Elie Wiesel',
			'read': false
		},
		book4 = {
			'title': 'The Black Widow',
			'author': 'Daniel Silv',
			'read': false
		},
		book5 = {
			'title': 'Gone Girl',
			'author': 'Gillian Flynn',
			'read': false
		}
	];
	function readBooks() {
		var result = '';
		
		for (var i = 0; i < books.length; i++ ) {
			if (books[i].read === true) {
				return  'You already read ' + books[i].title + ' by ' + books[i].author + '.';
			} else {
				return  'You still need to read ' + books[i].title + ' by ' + books[i].author + '.';
			}
		
		}
	}
	console.log(readBooks());

*/