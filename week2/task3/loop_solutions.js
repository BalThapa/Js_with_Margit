//Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)
for (let i = 1; i < 100; i += 2) {
    console.log(i);
    
}

//Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

 let answer = '';
 let end =98;

 for (let i = 2; i < 100; i +=2) {
    answer +=' ' + i + ' ';
    answer +=' ' + end + ' ';
    end -= 2;
   
 }

  console.log(answer);


//Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

let distance, time;

while (distance !=0) {
    distance=Number(prompt("enter the distance in km"));

    if (distance == 0) {
      console.log('distance 0 - game over') ;
      break; 
    }
    time=Number(prompt("enter the time in h"));
    let average = distance/time;
    console.log('average is:', average);

}

//Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

let even = 0;

for (let i = 0; i < 20; i++) {
  let input = Number(prompt("enter random number"))

  if (input %2 == 0) {
    even++;
  } 
}
console.log('There was', even, 'even number');
  


//Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

let index;
let sum = 0;
let count = 0;

while (index !=0) {
  index=Number(prompt("enter any number"));
  if (index == 0){
    console.log('0 index')
  }
  sum += index;
  count++;
  }
  let average = sum/count;
  console.log(sum);
  console.log(count);
  console.log(average);



//Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let i;
  sum = 0
  count = 0;

 for (let i = 1; i <= 25; i++) {
  let i = Number(prompt("enter random number"));
  console.log('i');  
  sum += i;
  count++;
  }
  let Average = sum/count;
  console.log(sum);
  console.log(count);
  console.log(Average);




// Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

let = Number(prompt("enter any number" )); {
    console.log('input');
    easy = confirm("Do you want to continue giving numbers");
    
}
while (easy = true) {
  input = Number(prompt("enter any number" ));
  console.log('input');

  if (easy == false) {
    console.log( 'false - gameover');
    break;

  }
}

//Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.
