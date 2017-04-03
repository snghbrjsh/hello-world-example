function qSort(arr){
	
	if(arr.length <= 1 ){
		return arr;
	}
	var pivot = arr[arr.length-1], // partition index is the last value of the array
	leftArr = [], rightArr = [];

	for(var i=0; i<arr.length-1; i++){
		if(arr[i] < pivot){
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		}
	}

	return qSort(leftArr).concat(pivot).concat(qSort(rightArr));
}

function qSortHoare(arr, low, high){
	low = low || 0;
	high = high || arr.length-1;
	
	var pivot = partitionHoare(arr, low, high);
	// console.log(low, high, pivot);
	console.log(arr);
	if(low < pivot - 1) {
		qSortHoare(arr, low, pivot - 1);
	}
	if(high > pivot) {
		qSortHoare(arr, pivot, high);
	}

	return arr;

	function partitionHoare(arr, low, high){
		var pivot = Math.floor( (low + high)/2 );
		while(low <= high){
			while(arr[low] < arr[pivot]){
				low++;
			}
			while(arr[high] > arr[pivot]){
				high--;
			}
			if(low<=high){
				temp = arr[low]
				arr[low] = arr[high];
				arr[high] = temp;

				low++;
				high--;
			}
		}

		return low;
	}
}


var a = [8, 10, 5, 1, 4, 9, 3, 210, -13, -25, 2, 6, 7, 13, 11, 12, -1, 0];
console.log('arr: ', a);
console.log('qSort: ', qSort(a.slice()));
console.log('qSortHoare: ', qSortHoare(a.slice()));