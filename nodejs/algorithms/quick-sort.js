function qSort(arr){
	
	if(arr.length <= 1 ){
		return arr;
	}
	var pivot = arr[arr.length-1],
	leftArr = [], rightArr = [];

	for(var i=0; i<arr.length-1; i++){
		if(arr[i] < pivot){
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		}
	}
	console.log(leftArr, pivot, rightArr);
	return qSort(leftArr).concat(pivot).concat(qSort(rightArr));
}


var a = [8, 10, 5, 1, 4, 9, 3, 210, -13, -25, 2, 6, 7, 13, 11, 12, -1, 0];
console.log('arr: ', a);
console.log('qSort: ', qSort(a));
