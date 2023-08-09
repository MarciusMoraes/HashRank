/* Given a square matrix, calculate the absolute difference between the sums of its diagonals. */

function diagonalDifference(arr) {
    var n= arr.length;
    var dlr=0;
    var drl=0;
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            if(i === j) {
                dlr += arr[i][j];
            }
            
            if(i + j === n - 1){
                drl+=arr[i][j];
            }
        }
    }
    return Math.abs(dlr - drl);
}