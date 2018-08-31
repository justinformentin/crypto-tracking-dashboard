export default function sortNumberData(currentArr, headerName) {
	// sort column of numbers largest to smallest
	const sortedArr = currentArr.sort(function(a, b) {
		return b[headerName] - a[headerName];
	});
	return sortedArr;
}
