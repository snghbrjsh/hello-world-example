function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    var series = [1],
    series2 = [1],
    series3 = [1],
    series23 = [6],
    idx2 = 0,
    idx3 = 0,
    sLast = 1;
    
    while( series.length < N ) {
        var el2 = series2[series2.length - 1] * 2;
        var el3 = series3[series3.length - 1] * 3;
        var el23 = 
         
        if(el2 < el3) {
            series[series.length] = el2;
            series2[series2.length] = el2; 
            idx2 = idx2 + 1;
        } else {
            series[series.length] = el3;
            series3[series3.length] = el3;
            idx3 = idx3 + 1;
        }         
    }
    console.log('series ' + series.toString());
    return series[series.length - 1];
}