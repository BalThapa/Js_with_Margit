const form = document.querySelector('form')
const licence = document.querySelector('#licence')
const model = document.querySelector('#model')
const make = document.querySelector('#make')
const owner = document.querySelector('#owner')
const price = document.querySelector('#price')
const color = document.querySelector('#color')
const addCar = document.querySelector('.addCar')


const newCar = [];




function Car(licence,model,maker,owner,price,color,){
    this.licence = licence;
    this.model = model;
    this.maker = maker;
    this.owner = owner;
    this.price = price;
    this.color = color;
      
}


const addedCar = (e) => {
    e.preventDefault()
console.log("add");

}

const table = document.querySelector("table");
const row = table.insertRow(-1);

let licenceNumber = row.insertCell(0);


form.addEventListener("submit",addedCar)

// document.querySelector("addCar").click = function() {
//     document.querySelector("table").style.display = "block";

//     const table = document.querySelector("table");
//     const row = table.insertRow(-1);
//     const licence = row.insertCell(0);
//     const model = row.insertCell(1);
//     const make = row.insertCell(2);
//     const owner = row.insertCell(3);
//     const price = row.insertCell(4);
//     const color = row.insertCell(5);
//     licence.textContent = document.querySelector("licence").value;
//     model.textContent = document.querySelector("model").value;
//     make.textContent = document.querySelector("make").value;
//     owner.textContent = document.querySelector("owner").value;
//     price.textContent = document.querySelector("price").value;
//     color.textContent = document.querySelector("color").value;
    
//     return false;
// }


