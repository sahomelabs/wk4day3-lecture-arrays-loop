// Write a for loop that will log the numbers 1 through 20.
// for (let i = 1; i <= 20; i++){
//     console.log(i);
// }

//Write a for loop that will log only the even numbers in 0 through 200.Write a for loop that will log only the even numbers in 0 through 200.
// for (let i = 0; i <= 200; i += 2){
//     console.log(i);
// }

// 1. Write a javascript application that logs all numbers from 1 - 100.
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// for (let i =1; i <=100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//         } else {
//             console.log(i); 
//         }
// }
// 3. If a number is divisible by 5 log "Buzz" instead of the number
// for (let i=1; i<=100; i++) {
//     if (i % 5 === 0) {
//         console.log("Buzz");
//         } else {
//             console.log(i);
//     }
// }    
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
                } else {
                    console.log(i);
                    }
}


