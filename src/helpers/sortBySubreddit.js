// if subreddit contains the name of the chosen crypto, bring the news item to top of the page
export default function sortBySubreddit(redditArr, cryptoName) {
	redditArr.forEach(function(obj) {
		// if subreddit name contains chosen 'cryptoName'
		if (obj.data.subreddit.match(new RegExp(cryptoName, 'i'))) {
			let objMatch = redditArr.splice(redditArr.indexOf(obj), 1); // remove news item
			redditArr.unshift(objMatch[0]); // add to start of the array
		}
	});
	return redditArr;
}
