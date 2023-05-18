module.exports.run = function (csv) {
	/*
		A stringified CSV file will be passed into this function.
		Parse the string so it is an array of objects and return the array.
		The object properties are the header of the csv file, and the very first row of the csv file are the headers.

		Example

		function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
			[
				{FirstName: Dan, LastName: Tran, Age: 29},
				{FirstName: Don, LastName: Tran, Age: 25},
				{FirstName: Jasmine, LastName: Tran, Age: 13},
			]

		Write your code below the comment.
	*/

	const rows = csv.split('/n')
	const template = rows[0].split(',')
	const objArray = []

	for (let i = 1; i < rows.length; i++) {
		const obj = {}
		const rowItems = rows[i].split(',')
		for (let j = 0; j < rowItems.length; j++) {
			obj[template[j]] = rowItems[j]
		}
		objArray.push(obj)
	}

	return objArray
};
