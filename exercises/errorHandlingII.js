const axios = require('axios');

module.exports.run = function (url) {
	/*
		You are given a url. Make a GET call with axios using the given url.
		However, there is something wrong with the url, and it throws an error.
		This error will have a property 'message'. Properly return the message, adding 'Error: ' to the beginning of the message.

		You are welcome to change this function to an async/await.

		Write your code below the comment.
	*/

	return axios.get(url)
		.then(response => response)
		.catch(error => `Error: ${error.message}`)
};

// async/await version of the above function
//
// module.exports.run = async function (url) {
// 	try {
// 		const response = await axios.get(url);
// 		return response;
// 	}
// 	catch (error) {
// 		return `Error: ${error.message}`;
// 	}
// };
