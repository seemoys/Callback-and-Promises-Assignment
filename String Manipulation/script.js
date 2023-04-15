let str="the quick brown fox jumps over the lazy dog";

function manipulatedString(str,logString){
    let manipulatedStr=str.toUpperCase();
    return function(){
        logString(manipulatedStr);
    }
}

function logString(manipulatedStr){
    console.log(`The Manipulated String is : ${manipulatedStr}`);
};

let result=manipulatedString(str,logString);
result();


