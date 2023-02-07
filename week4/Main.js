const form= document.querySelector('form');

const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');

const directions = document.querySelectorAll(`input[name="direction"]`) 
// cssCode come from javascript°

const text = document.querySelector(`#cssCode`)

const backgroundColorGenerator = () => {
    let dirValue, code;

    for(const item of directions){
  if (item.checked) {
    dirValue=item.value
    }      
 }

    code = `linear-gradient(${dirValue}, ${color1.value}, ${color2.value})`; 
    document.body.style.background = code;
    text.textContent = code;
};

form.addEventListener('change', backgroundColorGenerator);

