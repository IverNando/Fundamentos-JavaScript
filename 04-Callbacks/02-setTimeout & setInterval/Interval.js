const display = document.getElementById("display");
const boton = document.getElementById("start")


let contador = 0;


boton.addEventListener("click", () => {
    console.log("Se hizo clic");
    boton.disabled = true 
    contador = 0
    
    const temporizador = setInterval(() => {
        
        contador++;
        display.textContent = contador
        
        
        if (contador === 3) {
            clearInterval(temporizador); 
            setTimeout(()=>{
                display.textContent = "listo"
                boton.disabled = false
            },1000)
        }
        
    }, 1000);
    
});



