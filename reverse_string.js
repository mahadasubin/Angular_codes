function reverse_inbuilt(s) {
    
    var arr = s.split('');
    s = arr.reverse().join('');
    console.log(s);
    return s
    
}


function reverse(s) {
    var s = "mahadasubin";
    var arr = s.split('');
    var arr_rev = [];
    while (arr.length > 0) {
        arr_rev.push(arr.pop());
    }
    s = arr_rev.join('');
    return s;

}
