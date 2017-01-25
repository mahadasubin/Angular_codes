var arr =[3,5,1,8,4,7,9];
function bubblesort(arr) {


    for (i = 0; i < (arr.length - 1); i++) {
        for (j = (i + 1); j < (arr.length); j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }
    };
return arr;
}
console.log(arr);
