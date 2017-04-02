function mSort(arr, asc) {

    /*
    *   if 'asc' is true or not supplied sort in ascending order; descending otherwise
    */
    asc = (typeof asc !== 'boolean') ? true : asc ;

    var leftHalf, rightHalf, mergedArray;

    if(arr.length < 2 ) {
        return arr;
    } else {
        /*
        *   Divide the array in two half
        */
        leftHalf = arr.slice(0, arr.length/2);
        rightHalf = arr.slice(arr.length/2, arr.length);

        /*
        *   Merge the divided array
        */
        mergedArray = mergeElements( mSort(leftHalf, asc), mSort(rightHalf, asc) );
        return mergedArray;
    }

    function mergeElements(a, b) {
        var result = [];

        function compare(x,y){
            return (x <= y);
        }

        while(a.length && b.length) {
            if(asc){
                compare(a[0], b[0]) ? result.push(a.shift()) : result.push(b.shift());
            } else {
                compare(a[0], b[0]) ? result.push(b.shift()) : result.push(a.shift()); 
            }
        }

        while(a.length) {
            result.push(a.shift());
        }

        while(b.length) {
            result.push(b.shift());
        }
        return result;
    }
}

var a = [8, 10, 5, 1, 4, 9, 3, 210, -13, Math.PI, Math.E, -25, 2, 6, 7, 13, 11, 12, -1, 0];

console.log('arr: ' + a);
console.log('mSort: ' + mSort(a));
console.log('mSort (desc): ' + mSort(a, false));

