let bandera=true
let boton=document.getElementById("boton")
 boton.addEventListener("click",function(event){
event.preventDefault()
console.log("click")
let buscador=document.getElementById("busqueda")
if(bandera== true) {
    buscador.classList.remove("invisible")
    
}
else {
    buscador.classList.add("invisible")
}
bandera=!bandera
})