// Program that returns string with letters arranged in alphabetical order using in built

function sort_letters_inblt(s){
    var arr = s.split('');
    return arr.sort().join('');
}

console.log(sort_letters_inblt("webmaster")); 

//without inbuilt

function sort_letters(s){
    var arr = s.split('');
    var temp;
    for (var i=0; i<arr.length; i++){
        for (j=i+1; j<arr.length;j++){
            if (arr[i]>arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
                continue;
            }
        }
        return arr.join('');
    }


console.log(sort_letters("webmaster"));
