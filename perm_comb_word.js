function combination(s) {

    var arr=s.split('');
    var new_arr=[];

    for (var i=0; i<arr.length; i++){

        for (var j=i+1; j<=arr.length; j++){

            new_arr.push(arr.slice(i,j).join(''));
        }
    }
    return new_arr;
}

console.log(combination("dog"));
