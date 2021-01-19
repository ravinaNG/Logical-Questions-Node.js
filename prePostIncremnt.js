// post increment - first evaluats and then increment.
a = 5
b = a++
console.log(a) // 6
console.log(b) // 5

// pre increment - first increment then evaluat.
i = 5
j = ++i
console.log(i) // 6
console.log(j) // 6

// How we understood this is -

// post increment works like creating a function but not returning anything.
function postInc(){
	a = 5;
	console.log(5);
}

postIncremnt = postInc() //5
console.log(postIncremnt) // undefined

// So here postInc is consoling the value but it is not returning, basically 
// we can console using this function but we can't store it and do other executions.

// pre increment in works like creating a function and retuning as well
function preInc(){
	a = 5
	console.log(a)
	return a
}

preIncrmnt = preInc() // 5
console.log(preIncrmnt) // 5

// Here this function is consoling and returning as well, meams we can use 5 for the other execution also.
