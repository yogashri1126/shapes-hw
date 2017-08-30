//Step 1

var shape = new Shape(Triangle)

function Shape(get_type){
	this.get_type=function(){

	Object.getPrototypeof(this)
	}
	console.log("Step 4 below:")
	console.log(get_type)
	console.log("When I do Shape.get_type:")
	console.log(Shape.get_type)
	return get_type
	
}

//Question 4
//Whenever I do "Shape.get_type I get undefined. I think this happens because for a 
//constructor function, I would not be able to use .getPrototypeOf

Shape.prototype.get_type = function(){
    return this.constructor;
    console.log(this.constructor)
}

console.log(shape)

//Steps 2 & 3

var triangle = new Triangle(3,4,5)

function Triangle(side1, side2, side3){
	this.side1= side1
	this.side2= side2
	this.side3= side3

}
console.log(triangle)

var square = new Square(5,5,5,5)

function Square(side1, side2, side3, side4)
{

	this.side1= side1
	this.side2= side2
	this.side3= side3
	this.side4= side4
}

console.log(square)

var pentagon= new Pentagon(5,5,5,5,5)
function Pentagon(side1, side2, side3, side4, side5)
{

	this.side1= side1
	this.side2= side2
	this.side3= side3
	this.side4= side4
	this.side5= side5
}

console.log(pentagon)

//Step 4

homework= Object.setPrototypeOf(triangle, Shape)
homework2= Object.setPrototypeOf(square, Shape)
homework3= Object.setPrototypeOf(pentagon, Shape)
test=Object.getPrototypeOf(triangle)
testing= Object.getPrototypeOf(square)
testaholic= Object.getPrototypeOf(pentagon)
question4=Object.getPrototypeOf(Shape)

console.log(shape.prototype.constructor)

console.log("Set prototype of triangle:")
console.log(homework)
console.log("Set prototype of square:")
console.log(homework2)
console.log("Set prototype of pentagon:")
console.log(homework3)
console.log("Get prototype of triangle:")
console.log(test)
console.log("Get prototype of square:")
console.log(testing)
console.log("Get prototype of pentagon:")
console.log(testaholic)

//get type shape
console.log(question4)

