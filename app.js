var homework = [6,9,4,2,0, 'dude', 'what', 69,420,'nice'];

console.log(homework)


function exampleOne (arg1,arg2){
    arg1.push(arg2);
    return arg1;
    
};

console.log(exampleOne(homework,'totally'));

function exampleTwo (arg1){
    arg1.splice(7,2,69420);
    return arg1
};

console.log(exampleTwo(homework));

function exampleThree(arg1){
    var newArray = arg1.slice(1,4);
    return newArray
};

console.log(exampleThree(homework))

