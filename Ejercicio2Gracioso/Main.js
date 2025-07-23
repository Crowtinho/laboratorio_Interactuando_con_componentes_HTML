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

    Swal.fire({
      title: '¡No hay nada en el carrito 🚫!',
      // text: 'Recuerda que la seguridad nunca está de más. ¡Disfruta tu equipo de moto!',
      imageUrl: 'https://i.pinimg.com/736x/ad/d6/71/add6713be17ca808bef9ce16da906031.jpg',
      imageWidth: 200,
      imageHeight: 200,
      confirmButtonText: '¡volver!🤦‍♂️'
    });

  }else{
    Swal.fire({
          title: '¡Carrito vaciado con éxito!',
          // text: 'Recuerda que la seguridad nunca está de más. ¡Disfruta tu equipo de moto!',
          imageUrl: 'https://i.pinimg.com/474x/cf/73/e3/cf73e3ed2b9a3056702efcc2cb5868be.jpg',
          imageWidth: 300,
          imageHeight: 200,
          confirmButtonText: '¡volver!😒'
        }).then(() =>{
          location.reload();
        })
  }


  // const confirmar = confirm("¿Estás seguro de que quieres vaciar el carrito? 🛒\nTodos los productos serán eliminados.");
  // if (confirmar) {
  //   alert("Carrito vaciado con éxito. 😢\n¡Esperamos verte pronto y ayudarte a rodar con seguridad!");
  //   location.reload();
  // }
})

document.getElementById("comprar").addEventListener("click", function(){

  if(total > 0){
    Swal.fire({
      title: '¡Gracias por tu compra!',
      text: 'Recuerda que la seguridad nunca está de más. ¡Disfruta tu equipo de moto!',
      imageUrl: 'https://i.pinimg.com/564x/e1/4a/0a/e14a0a27d6a741261eb84e4829d93794.jpg',
      imageWidth: 200,
      imageHeight: 200,
      confirmButtonText: '¡Genial! 🏍️'
    }).then(() =>{
      location.reload();
    })
  }else{
        Swal.fire({
      title: '¡No hay nada en el carrito🚫!',
      // text: 'Recuerda que la seguridad nunca está de más. ¡Disfruta tu equipo de moto!',
      imageUrl: 'https://i.pinimg.com/736x/06/5e/54/065e54a424ab52c7b43aa3fdb92276c5.jpg',
      imageWidth: 350,
      imageHeight: 200,
      confirmButtonText: '¡volver! 🛒'
    })
  }

      
    // location.reload();
    // alert("¡Gracias por tu compra! 🛍️" +
    //     "\nRecuerda que la seguridad nunca está de más. 🏍️💨" + 
    //     "\nUsar casco, monotraje y guantes puede salvarte la vida." + 
    //     "\n¡Conduce con responsabilidad! ✅")
    
    
});



