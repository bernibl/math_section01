var math = require('../math');

describe("A math program that does arithmetic", function(){
	it("adds two integers together", function(){
		expect(math.add(3,5)).toBe(8);
	});
});

describe("A math program that does arithmetic", function(){
	it("multiplies two integers together", function(){
		expect(math.multiply(3,5)).toBe(15);
	});
});

describe("A math program that does arithmetic", function(){
	it("divided two integers together", function(){
		expect(math.multiply(5,1)).toBe(5);
	});
});

describe("A math program that does arithmetic", function(){
	it("subtracts two integers together", function(){
		expect(math.subtract(3,5)).toBe(-2);
	});
});