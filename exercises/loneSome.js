const { set } = require("lodash");

module.exports.run = function (a, b, c) {
	/*
	Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

	Examples:
		function(1, 2, 3) => 6
		function(3, 2, 3) => 2
		function(3, 3, 3) => 0

	Write your code below the comment.

	*/

	const intCount = {}
	let sum = 0

	for (int of [a, b, c]) {
		if (!intCount[int]) intCount[int] = 1
		else intCount[int]++
	}

	for (key of Object.keys(intCount)) {
		if (intCount[key] === 1) sum += parseInt(key)
	}

	return sum
};
