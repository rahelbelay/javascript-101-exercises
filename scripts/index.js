// 1
function hello(name) {
    console.log(`Hello, ${name} !`)       
}

hello("Mustache");

// 2. 

hello();

//3. 

//madlib('Anushka', 'Art')

// madlib =('Anushka', 'art') 

function madlib(name,subject) {
    return `${name}'s favorite sunject in school is ${subject} `
}
console.log(madlib('Anushka', 'Art'))

// 4 Tip calculator

function tipAmount(bill, level_of_service) {

    if (level_of_service === "good" ) {
        return (bill * .2)
    }
    else if (level_of_service === "fair") {
        return(bill * .15)
    }
    else if (level_of_service === "bad"){
        return(bill * .1)
    }
        
}

console.log(tipAmount(20, "bad"))

// 5 bill plus tip

function totalAmount(bill, level_of_service){

    if (level_of_service === "good" ) {
        return ((bill * .2) + bill)
    }
    else if (level_of_service === "fair") {
        return((bill * .15 )+ bill)
    }
    else if (level_of_service === "bad"){
        return((bill * .1 )+ bill)
    }
        
    
}

console.log(totalAmount(20, "bad"))

//6. amount per person

function splitAmount(bill, level_of_service, no_of_people){

    // if (level_of_service === "good" ) {
    //     return (((bill * .2) + bill)/ no_of_people)
    // }
    // else if (level_of_service === "fair") {
    //     return(((bill * .15 )+ bill)/no_of_people)
    // }
    // else if (level_of_service === "bad"){
    //     return(((bill * .1 )+ bill)/no_of_people)
    // }

    return totalAmount(bill,level_of_service)/no_of_people
        
    
}

console.log(splitAmount(100, "good", 5))

// excecise 2


// 1 print numbers 1-10

for (let i = 1; i < 10; i++){
    console.log(i)

}

// 2 print * square
   




function mySquare(size) {

    for (let i = 0; i < size; i++) { 
        myArray =[];
        for (let j = 0; j < size; j++) {
            myArray.push('*');
           
        }
        
        console.log(myArray.join(" "))    
    } 
} 
mySquare(5) 

// 3 print

// function printBox(row,column) {
//     for (let i = 0; i < row; i++){
//         myBox = [];
//         for ( let j = 0; j < column; j++) {
//             if (i === 0 || i === row-1 || j === 0 || j === column-1) {
//                 myBox.push('*');
//             } else 
//                 myBox.push('');
            
//         }
//         console.log(myBox.join(" "))
//     }

// }

// printBox(6,4)










