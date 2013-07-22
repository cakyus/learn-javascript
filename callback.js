
// CALLBACK
// ========

function e() {
	this.f = function(callback) {
		if (callback != null){
			callback('e.f()');
		}
	}
}

function g() {
	console.log('g()');
}

var o = new e();
o.f(g); // g()

// BY PASS VARIABLES IN CALLBACK
// =============================

function h() {
	this.i = function(callback) {
		if (callback != null){
			
			var args = [];
			for (i = 1; i < arguments.length; i++){
				args.push(arguments[i]);
			}
			
			var result = {
				error: null,
				result: 10,
				arguments: args
			};
			callback(result);
		}
	}
}

function j(reponse) {
	console.log(reponse.error); // null
	console.log(reponse.result); // 10
	console.log(reponse.arguments[0]); // John
}

var o = new h();
o.i(j,'John');

