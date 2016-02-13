function bSort(arr, order) {
	for(var i=0; i<arr.length-1; i++) {
		for(var j=0; j<arr.length-i-1; j++) {
			if(arr[j] > arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

var a = [8, 10, 5, 1, 4, 9, 3, 2, 6, 7, 13, 11, 12, -1, 0];

console.log('arr: ' + a);
console.log('bSort: ' + bSort(a));