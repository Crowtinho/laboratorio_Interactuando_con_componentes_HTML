let precioCasco = 1250000;
let precioMonotraje = 2350000;
let precioGuantes = 750000;
let total = 0;

let contadorCasco = 0;
let contadorMonotraje = 0;
let contadorGuantes = 0;


document.getElementById("casco").addEventListener("click", function(){
    contadorCasco += 1;
    document.getElementById("totalCasco").innerHTML = (precioCasco * contadorCasco);
    document.getElementById("cantidadCascos").innerHTML = contadorCasco;
    total += precioCasco * contadorCasco
    document.getElementById("total").innerHTML = total;
})

document.getElementById("monotraje").addEventListener("click", function(){
    contadorMonotraje += 1;
    document.getElementById("totalMonotraje").innerHTML = (precioMonotraje * contadorMonotraje);
    document.getElementById("cantidadMonotrajes").innerHTML = contadorMonotraje;
    total += precioMonotraje * contadorMonotraje
    document.getElementById("total").innerHTML = total;
})
document.getElementById("guantes").addEventListener("click", function(){
    contadorGuantes += 1;
    document.getElementById("totalGuantes").innerHTML = (precioGuantes * contadorGuantes);
    document.getElementById("cantidadMonotrajes").innerHTML = contadorMonotraje;
    total += precioGuantes * contadorGuantes
    document.getElementById("total").innerHTML = total;
})

