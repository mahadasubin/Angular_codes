var s="thequickbrownfoxjumpsoverthelazydog";
var final=[];
function f(s){
    var arr=s.split("");
    
    while(arr.length>0){
        var temp = arr.shift();
            final.push(temp);
        while (arr.indexOf(temp)>=0){
            arr.splice((arr.indexOf(temp)),1);
            };
        console.log(arr.join(''));
       
        };
       

    return final.join('');
    };


console.log(f(s));
