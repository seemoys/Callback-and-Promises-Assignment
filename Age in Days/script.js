let person={
    firstName:"Seemoy",
    lastName:"Shome",
    age:27
};

function ageInDay(person,logResult){
    let fullName=`${person.firstName} ${person.lastName}`;
    let ageInDays=person.age*365;
    return function(){
        logResult(fullName,ageInDays);
    }
};

function logResult(fullName,ageInDays){
    console.log(`Full Name of the Person is : ${fullName} & Age is ${ageInDays}.`);
}

let result=ageInDay(person,logResult);
result();
