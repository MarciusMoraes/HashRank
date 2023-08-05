/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers. */

function miniMaxSum(arr) {
    let sum=0;
    let small= arr[0];
    let bigger=arr[0];
    for(let i=0;i<arr.length;i++){
        sum= sum + arr[i];
        if(arr[i]<small){
            small=arr[i];
        }
        if(arr[i]>bigger){
            bigger=arr[i];
        }
    }
    
    console.log((sum - bigger), (sum - small));
}
