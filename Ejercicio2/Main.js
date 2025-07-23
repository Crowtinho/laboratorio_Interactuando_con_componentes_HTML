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


function formatearCOP(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(valor);
}

document.getElementById("casco").addEventListener("click", function(){
    // contadorCasco += 1;
    contadorCasco = parseInt(document.getElementById("cantidadCascos").value);
     if(contadorCasco === ""|| isNaN(contadorCasco)){
      contadorCasco = 0;
      alert("Dato no válido en la cantidad de items 🚫");
       location.reload();
    }
    console.log(contadorCasco);
    document.getElementById("totalCasco").innerHTML = formatearCOP(precioCasco * contadorCasco);
    totalCasco = precioCasco * contadorCasco;
    total = totalCasco + totalGuantes + totalMonotraje 
    document.getElementById("total").innerHTML = formatearCOP(total);
})

document.getElementById("monotraje").addEventListener("click", function(){
    // contadorMonotraje += 1;
    contadorMonotraje = parseInt(document.getElementById("cantidadMonotrajes").value);
    if(contadorMonotraje === ""|| isNaN(contadorMonotraje)){
      contadorMonotraje = 0;
      alert("Dato no válido en la cantidad de items 🚫");
       location.reload();
    }
    document.getElementById("totalMonotraje").innerHTML = formatearCOP(precioMonotraje * contadorMonotraje);
    totalMonotraje = precioMonotraje * contadorMonotraje
    total = totalCasco + totalGuantes + totalMonotraje 
    document.getElementById("total").innerHTML = formatearCOP(total);
})

document.getElementById("guantes").addEventListener("click", function(){
    // contadorGuantes += 1;
    contadorGuantes = parseInt(document.getElementById("cantidadGuantes").value);
       if(contadorGuantes === ""|| isNaN(contadorGuantes)){
      contadorGuantes = 0;
      alert("Dato no válido en la cantidad de items 🚫");
       location.reload();
    }
    document.getElementById("totalGuantes").innerHTML = formatearCOP(precioGuantes * contadorGuantes);
    totalGuantes = precioGuantes * contadorGuantes
    total = totalCasco + totalGuantes + totalMonotraje 
    document.getElementById("total").innerHTML = formatearCOP(total);
})

document.getElementById("vaciar").addEventListener("click", function(){
  let contaTotal = contadorCasco + contadorGuantes + contadorMonotraje;
  if (contaTotal == 0){
    alert("El carrito está vacio 🚫!!!")  
  }else{
    const confirmar = confirm("¿Estás seguro de que quieres vaciar el carrito? 🛒\nTodos los productos serán eliminados.");
    if (confirmar) {
      alert("Carrito vaciado con éxito. 😢\n¡Esperamos verte pronto y ayudarte a rodar con seguridad!");
      location.reload();
    }
  }
})

document.getElementById("comprar").addEventListener("click", function(){
  if(total > 0){
    location.reload();
    alert("¡Gracias por tu compra! 🛍️" +
        "\nRecuerda que la seguridad nunca está de más. 🏍️💨" + 
        "\nUsar casco, monotraje y guantes puede salvarte la vida." + 
        "\n¡Conduce con responsabilidad! ✅")
  }else{
    alert("No has agregado nada al carrito ❌!!!")
  }
});



