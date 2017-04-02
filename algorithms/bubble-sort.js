function bSort(arr, isAsc) {
	for(var i=0; i<arr.length; i++) {
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


/*
* if any outer iteration pass without any swap, it's likely that you don't need anymore iteration.
* In that case array has already been sorted.
*/
function bSort2(arr){
	var swapped, temp;
	do{
		swapped = false;
		for(var i=0; i<arr.length; i++){
			if(arr[i] > arr[i+1] && (typeof arr[i] === 'number') && (typeof arr[i+1] === 'number')) {
				temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;

				swapped = true;
			}
		}
	}while(swapped);

	return arr;
}

var a = [8, 10, 5, 1, 4, 9, 3, 2, -12, -7, -12, 6, 7, 13, 11, 12, -1, 0];

console.log('arr: ', a);
console.log('bSort: ',  bSort(a.slice(), false));
console.log('bSort2: ',  bSort2(a.slice()));