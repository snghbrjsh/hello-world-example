function mSort(arr) {
    if(arr.length < 2 ) {
        return arr;
    } else {
        var leftHalf = arr.slice(0, arr.length/2);
        var rightHalf = arr.slice(arr.length/2, arr.length);

        return mergeElements(mSort(leftHalf), mSort(rightHalf));
    }

    function mergeElements(a, b) {
        var result = [];
        while(a.length && b.length) {
            if(a[0] <= b[0]) {
                result.push(a.shift());
            } else {
                result.push(b.shift());
            }
        }

        while(b.length) {
            result.push(b.shift());
        }

        while(a.length) {
            result.push(a.shift());
        }

        return result;
    }
}

var a = [8, 10, 5, 1, 4, 9, 3, 2, 6, 7, 13, 11, 12, -1, 0];

console.log('arr: ' + a);
console.log('mSort: ' + mSort(a));
