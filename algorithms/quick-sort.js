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
	low = (typeof low === 'number') ? low : 0;
	high = (typeof high === 'number') ? high : (arr.length - 1);
	
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

function qSortLomuto(array, start, end){
	start = (typeof start === 'number') ? start : 0;
	end = (typeof end === 'number') ? end : (array.length - 1);

	/*
	* Utility function to swap elements at given index.
	*/
	function swap(a, i, j){
		var temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}

	/*
	* Core logic
	* take last element as the pivot value
	* all values less than pivot should be before pivot greater than it should be after pivot.
	*/
	function partition(arr, start, end){
		var pIndex = start;
		var pivot = arr[end];

		for(var i=start; i<end; i++){
			if(arr[i] <= pivot){
				swap(arr, pIndex, i);
				pIndex++;
			}
		}
		swap(arr, pIndex, end); // swap the last element(pivot in this case) with the first element of right sub-array

		return pIndex;
	}

	/*
	* partition the array around the pivot value,
	* call the qSort on the resulting subarrays
	* Base Case: 'start' index becomes equal or greater than 'end' index
	*/
	if(start < end){
		var index = partition(array, start, end);
		// console.log(start, index, end, "::::", array);
		qSortLomuto(array, start, index-1);
		qSortLomuto(array, index+1, end);
	}
	return  array;
}
var a = [8, 10, 5, 1, 4, 9, 3, 210, -13, -25, 2, 6, 7, 13, 11, 12, -1, 0];
console.log('arr: ', a);
console.log('qSort: ', qSort(a.slice()));
console.log('qSortHoare: ', qSortHoare(a.slice()));
console.log('qSortLomuto: ', qSortLomuto(a.slice()));