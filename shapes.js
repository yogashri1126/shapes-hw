//Step 1

var shape = new Shape(Triangle)

function Shape(get_type){
	this.get_type=get_type
	return get_type
	//console.log(get_type)
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

//Step 4

homework= Object.setPrototypeOf(triangle, Shape)
homework2= Object.setPrototypeOf(square, Shape)
test=Object.getPrototypeOf(triangle)
testing= Object.getPrototypeOf(square)
question4=Object.getPrototypeOf(Shape)

console.log(shape.prototype.constructor)

console.log(homework)
console.log(homework2)
console.log(test)
console.log(testing)
console.log(question4.get_type)

