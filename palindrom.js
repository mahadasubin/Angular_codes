/* check given word is palindrome or not */

// using inbuilt

function palindrom_inblt(s){
    var arr = s.split('');
    if (arr == arr.reverse()){
        console.log("This given word "+s+" is palindrom");
    }
}

//without usin inbuilt

function palindrom(s){
    var arr = s.split('');
    var arr_rev=[];
    for(var i=0; i<arr.length; i++)
    {
    arr_rev.push(arr[arr.length-(1+i)]);
    }
    //console.log(arr);
   // console.log(arr_rev);
    if (arr.join('') == arr_rev.join('')){
        console.log("This given word "+s+" is palindrom");
    }
}
palindrom("malayalam");
