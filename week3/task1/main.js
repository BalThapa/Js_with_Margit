const calcGasoline =() => {
    const price = Number(document.getElementById('price').value); 
    /* const money =document.getElementById('money').value;'*/
    const money = +document.getElementById('money').value; 
     const answer = document.querySelector('#answer');
    //  const answer = document.querySelector('#answer'); if we do querySelector fo id we have to put# and class . infront
    let text;
    
    const amount = Math.floor(money/price);

    if (amount >= 10) {
        text = `You could get about ${amount} litres, good now you can go`;
    }else {
        text = `You could get about ${amount} litres, Sorry you have to stay ; ()`;
    }

    answer.textContent = text;
   

};



const convertTemperature = (id, value) => {
 const val = parseFloat(value);   
    
   // const celcius = document.getElementById('celcius'); 
   // const fahrenheit = document.getElementById('fahrenheit'); 
    // const kelvin = document.getElementById('kelvin'); 
     // upper commented out part can be deleted if id, value is included //
    
      

    if (id === "celcius") {
        fahrenheit.value = (val * 1.8 + 32).toFixed (2);
        kelvin.value = (val + 273.15).toFixed (2);  
    }
    if (id === "fahrenheit") {
        celcius.value = ((val -32) / 1.8).toFixed(2);
        kelvin.value =  ((val -32) / 1.8 + 273.15).toFixed(2); 
    }
    
    
    if (id === "kelvin") {
        celcius.value = (value - 273.15).toFixed(2);
        fahrenheit.value = ((value - 273.15) * 1.8 + 32).toFixed(2);    
    }
       

}

