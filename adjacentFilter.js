//Filter function that takes a sorted array and a value within the array and returns adjacent values as key, value pairs
//test: [1,4,6,7,10,15] && 1 -> [1,4]
//[1,4,6,7,10,15] && 7 -> [6,7][7,10]

angular.module("addApp")
.filter('adjacent',function(){
    return
function getAdjacentValues(arr, val) {

    var firstPosition = arr.indexOf(val);

    if(firstPosition < 0) {
        return [];
    }
    
    var positionsArr = [];
    
    while(firstPosition >= 0) {
    
     var insideArr = [];
    
    if(firstPosition - 1 >= 0) {
        insideArr.push(arr[firstPosition - 1]);
    }
    
    if(firstPosition + 1 < arr.length) {
        insideArr.push(arr[firstPosition + 1]);
    }
    
    positionArr.push(insideArr);
    
    delete arr[firstPosition];
    
    firstPosition = arr.indexOf(val);
    
    }
    
    return positionArr;

}
});
