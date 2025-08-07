const calcular = () =>{

    const strW = document.getElementById("valorW").value
    const strH = document.getElementById("valorH").value

    if(strW ===""){
        alert("Los campos de Largo y Ancho no pueden estar vacios")
    }

    else if(strH === ""){
        alert("Los campos de Largo y Ancho no pueden estar vacios")
        
    }
    
    else if(strH <=0 || strW <=0 ){
        alert("Los campos de Largo y Ancho no pueden ser igual o menor a cero")

        return
        
    }
        const W = parseInt(strW)
        const H = parseInt(strH)
        const area = W*H
    
    document.getElementById("resultado").value=area
}

const limpiar = () =>{

    document.getElementById("valorW").value=""
    document.getElementById("valorH").value=""
    document.getElementById("resultado").value=""

}