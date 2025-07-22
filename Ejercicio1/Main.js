
let contadorDW = 0;
let contadorJS = 0;
let contadorBD = 0;

document.getElementById("diseWeb").addEventListener("click" ,function(){
    contadorDW +=1;
    document.getElementById("votosDW").innerHTML = contadorDW;
    alert("🎨 Tienes el poder de transformar ideas en experiencias visuales. Donde otros ven código, tú ves arte en cada línea de HTML, estilo en cada hoja de CSS y vida en cada animación. El diseño web no es solo tu habilidad, es tu superpoder. 💻✨")
    if(contadorDW %5 == 0){
        console.log(`Cantidad de votos por Diseño Web ${contadorDW}`);
    }
})
document.getElementById("javaScript").addEventListener("click" ,function(){
    contadorJS +=1;
    document.getElementById("votosJS").innerHTML = contadorJS;
    alert("✨Eres como JavaScript en el navegador: dinámico, versátil y siempre listo para sorprender. Sigue codificando tu camino hacia lo extraordinario, porque como en JS, en ti todo es posible con una buena función y un poco de lógica. 💻🚀")
    if(contadorJS %5 == 0){
        console.log(`Cantidad de votos por Diseño Web ${contadorJS}`);
    }
})
document.getElementById("basedatos").addEventListener("click" ,function(){
    contadorBD +=1;
    document.getElementById("votosBD").innerHTML = contadorBD;
    alert("🧠 Donde otros ven información desordenada, tú ves relaciones, integridad y eficiencia. Eres como una buena base de datos: organizado, estructurado y siempre optimizado para dar lo mejor en cada consulta. Porque en tu mundo, cada dato cuenta. 🔍💡")
    if(contadorBD %5 == 0){
        console.log(`Cantidad de votos por Diseño Web ${contadorBD}`);
    }
})