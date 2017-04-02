function iSort(array){
	var current, j;

	for(let i=1; i<array.length; i++){
		current = array[i];
		j = i-1;

		while(j>=0 && array[j] > current){
			array[j+1] = array[j];
			j--;
		}
		array[j+1] = current;
	}
	return array;
}


var a = [8, 10, 5, 1, 4, 9, 3, 2, -12, -7, -12, 6, 7, 13, 11, 12, -1, 0];

console.log('arr: ', a);
console.log('iSort: ',  iSort(a.slice()));