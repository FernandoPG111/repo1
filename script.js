function convertToDollars(){
    const botonDolar = document.querySelector('.btn-dolar'); 
    let montoEnDolar = 0; 

    botonDolar.addEventListener('click', () =>{
        let montoEnPesos = Number(document.getElementById('monto').value); // El valor tiene que almacenarse luego de hacer click! 
        montoEnDolar = montoEnPesos * 400; 
        alert(`Su monto en dolares es ${montoEnDolar}`); 
    })
}

function convertToEuro(){
    const botonEuro = document.querySelector('.btn-euro'); 
    let montoEnEuro = 0; 

    botonEuro.addEventListener('click', () =>{
        let montoEnPesos = Number(document.getElementById('monto').value);
        montoEnEuro = montoEnPesos * 425; 
        alert(`Su monto en euros es ${montoEnEuro}`); 
    })
}

convertToDollars(); 
convertToEuro(); 