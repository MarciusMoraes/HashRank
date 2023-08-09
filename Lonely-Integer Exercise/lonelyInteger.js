/* Given an array of integers, where all elements but one occur twice, find the unique element. */


function lonelyinteger(a) {
    
    for(var i=0;i<a.length;i++){
        var count=0;
        for(var j=0;j<a.length;j++){
            if(a[i]==a[j]){
                count++;
            }
        }
        
        if(count==1){
            return a[i];
        }
    }
}