
// VARIABLE SCOPE
function a() {
	var b = 1; // private variabale
	this.c = 2; // public variable
	this.d = function() { // public function
		console.log('0k');
	}
}

var o = new a();
console.log(o.b); // undefined
console.log(o.c); // 2
console.log(o.d()); // 0k
