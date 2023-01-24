function checkAge(){
    let age = prompt("Enter your age");
    if (age<18) {
        alert("too young");
     }else if (age<27) {
        alert("Right age for military");  
     }else if (age<41) {
        alert("reserve");  
     }else if (age<55) {
        alert("backup reserve");
     }else {
        alert("too aged");
     }

}