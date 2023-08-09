/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal. */

function plusMinus(arr) {
    let negNum= 0;
    let posNum=0;
    let zeroNum=0;
    arr.forEach((item) => {
        if(item>0){
            posNum++;
        }
        else if(item<0){
            negNum++;
        }
        else{
            zeroNum++;
        }
    })
    console.log((posNum/arr.length).toFixed(6));
    console.log((negNum/arr.length).toFixed(6));
    console.log((zeroNum/arr.length).toFixed(6));
}