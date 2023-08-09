/* In this challenge, you are required to calculate and print the sum of the elements in an array, 
keeping in mind that some of those integers may be quite large.*/

function aVeryBigSum(ar) {
    let sum=0;
    
    for(let i=0;i<ar.length;i++){
        sum += ar[i];
    }
    
    return sum;
}