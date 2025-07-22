let precioCasco = 1250000;
let precioMonotraje = 2350000;
let precioGuantes = 750000;

let totalCasco = 0; 
let totalMonotraje = 0; 
let totalGuantes = 0; 

let total = 0;

let contadorCasco = 0;
let contadorMonotraje = 0;
let contadorGuantes = 0;


document.getElementById("casco").addEventListener("click", function(){
    // contadorCasco += 1;
    contadorCasco = parseInt(document.getElementById("cantidadCascos").value);
    console.log(contadorCasco);
    document.getElementById("totalCasco").innerHTML = (precioCasco * contadorCasco);
    totalCasco = precioCasco * contadorCasco;
    total = totalCasco + totalGuantes + totalMonotraje 
    document.getElementById("total").innerHTML = total;
})

document.getElementById("monotraje").addEventListener("click", function(){
    // contadorMonotraje += 1;
    contadorMonotraje = parseInt(document.getElementById("cantidadMonotrajes").value);
    document.getElementById("totalMonotraje").innerHTML = (precioMonotraje * contadorMonotraje);
    totalMonotraje = precioMonotraje * contadorMonotraje
    total = totalCasco + totalGuantes + totalMonotraje 
    document.getElementById("total").innerHTML = total;
})
document.getElementById("guantes").addEventListener("click", function(){
    // contadorGuantes += 1;
    contadorGuantes = parseInt(document.getElementById("cantidadGuantes").value);
    document.getElementById("totalGuantes").innerHTML = (precioGuantes * contadorGuantes);
    totalGuantes = precioGuantes * contadorGuantes
    total = totalCasco + totalGuantes + totalMonotraje 
    document.getElementById("total").innerHTML = total;
})

