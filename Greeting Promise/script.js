function greetWithName(name){
    return new Promise((resolve,reject)=>{
        if(typeof name!=='string'){
            reject ('Name Should be STRING');
        }else{
            resolve(`Hello, ${name}`);
        }
    });
};

greetWithName("seemoy")
.then((msg)=>{
    console.log(msg);
})
.catch((error)=>{
    console.log(error)
});