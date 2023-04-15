let arr=[1,2,3,4,5];

function multiplyByTwo(elem){
    return elem*2;
}

function double(arr,multiplyByTwo){
    let double=arr.map(elem=>{
        return multiplyByTwo(elem);
    });
    return double;
}

console.log(double(arr,multiplyByTwo));