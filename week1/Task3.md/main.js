function calculateSalary () {
    let hours=prompt("enter working hours");
let rate=prompt("enter rate per hour");
let salary=hours*rate;

if(hours<=7){
    totalSalary=salary;
}else if(hours<=9) {
    bonus=(hours-7)*rate*1/2;
    totalSalary=salary+bonus;
}else {
    bonus=(2*rate*1/2)+((hours-9)*rate*1);
    totalSalary=salary+bonus;
}
}


calculateSalary();