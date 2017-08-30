//Step 1

function Shape(get_type){
	//this.type= type;
	this.get_type=function(){

	return this.constructor
	//Object.getPrototypeof(this)
	console.log(this.constructor)
	}
	//console.log("Step 4 below:")
	
	
	return get_type
	console.log(get_type)
}

var shape = new Shape()

console.log("When I do Shape.get_type:")
console.log(shape.get_type)
console.log(" ")
//Question 4
//Whenever I do "Shape.get_type I get undefined. I think this happens because for a 
//constructor function, I would not be able to use .getPrototypeOf. I instead did Shape.prototype.get_type


Shape.prototype.get_type = function(){
    return this.constructor;
    console.log(this.constructor)
}

console.log(Shape.prototype.get_type)
console.log(" ")

//Steps 2 & 3

var triangle = new Triangle(3,4,5)

function Triangle(side1, side2, side3){
	this.side1= side1
	this.side2= side2
	this.side3= side3
	//Shape.call(this, arguments)
}

console.log("triangle.prototype:")
console.log(triangle.prototype= new Shape())
console.log(" ")

console.log("Proof the constructor is working")
console.log(Shape(triangle))
console.log(" ")

console.log("triangle:")
console.log(triangle)
console.log(" ")
Triangle.prototype= new Shape()

//Reporting the instance of a triangle to Triangle
//triangle.prototype= new Shape(Triangle)
triangle.prototype.constructor= Triangle

//I'm having trouble getting this to return the type of function being Triangle instead of just Function
triangle.get_type = function(){

    return this.constructor;
    console.log(this.constructor)
}

console.log(triangle.get_type)

var square = new Square(5,5,5,5)

function Square(side1, side2, side3, side4)
{

	this.side1= side1
	this.side2= side2
	this.side3= side3
	this.side4= side4
}

console.log("square")
console.log(square)
console.log(" ")
Square.prototype= new Shape()

//Reporting the instance of a square to Square
square.prototype= new Shape(Square)
//square.prototype.constructor= Square <--THIS SAYS UNDEFINED FOR SOME REASON. HENCE ABOVE CODE LINE 90

square.get_type = function(){

    return this.constructor;
    console.log(this.constructor)
}

var pentagon= new Pentagon(5,5,5,5,5)
function Pentagon(side1, side2, side3, side4, side5)
{

	this.side1= side1
	this.side2= side2
	this.side3= side3
	this.side4= side4
	this.side5= side5
}

console.log("pentagon")
console.log(pentagon)
console.log(" ")
Pentagon.prototype= new Shape()

//Reporting the instance of a pentagon to Pentagon
pentagon.prototype= new Shape(Pentagon)
//pentagon.prototype.constructor= Pentagon <--THIS SAYS UNDEFINED FOR SOME REASON. HENCE ABOVE CODE LINE 116

pentagon.get_type = function(){

    return this.constructor;
    console.log(this.constructor)
}
//Step 4

homework= Object.setPrototypeOf(triangle, Shape)
homework2= Object.setPrototypeOf(square, Shape)
homework3= Object.setPrototypeOf(pentagon, Shape)
test= Object.getPrototypeOf(triangle)
testing= Object.getPrototypeOf(square)
testaholic= Object.getPrototypeOf(pentagon)
question4= Object.getPrototypeOf(Shape)

Shape.call(triangle, get_type)
Shape.call(square, get_type)
Shape.call(pentagon, get_type)

Triangle.call(triangle, arguments)
Square.call(square,arguments)
Pentagon.call(pentagon, arguments)

//call function works here!
console.log(triangle.get_type())
console.log(" ")
//console.log(shape.prototype.constructor)


// console.log("Set prototype of triangle:")
// console.log(homework)
// console.log(" ")
console.log("checking instance of triangle as a part of the Triangle constructor")
console.log(Shape instanceof Triangle)
console.log(" ")
console.log("triangle get type:")
console.log(triangle.get_type())
//console.log(triangle.prototype.get_type())

// console.log("Set prototype of square:")
// console.log(homework2)
// console.log(" ")
// console.log("Set prototype of pentagon:")
// console.log(homework3)
// console.log(" ")
console.log("Get prototype of triangle:")
console.log(triangle.prototype)
console.log(" ")
console.log("Get prototype of square:")
console.log(square.prototype)
console.log(" ")
console.log("Get prototype of pentagon:")
console.log(pentagon.prototype)
console.log(" ")

//get type shape
console.log(question4)

