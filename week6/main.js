const form = document.querySelector('form').value
const licence = document.querySelector('#licence')
const model = document.querySelector('#model')
const make = document.querySelector('#make')
const owner = document.querySelector('#owner')
const price = document.querySelector('#price')
const color = document.querySelector('#color')
const addCar = document.querySelector('.addCar')
const submitCar = document.querySelector('#btn_submit')
const table = document.querySelector('table')


const addedCar = (e) => {
    e.preventDefault();
    localStorage.setItem('Licence Number',licence.value)
    localStorage.setItem('Car Make',make.value)
    localStorage.setItem('Car Model',model.value)
    localStorage.setItem('Car Owner',owner.value)
    localStorage.setItem('Car Price',price.value)
    localStorage.setItem('Car Color',color.value)
};

addCar.addEventListener('click',addedCar);

