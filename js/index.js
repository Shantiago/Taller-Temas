function numeros(e) {

    var key = e.keyCode;

    var teclado = String.fromCharCode(key);

    var numero = "0123456789";

    var especiales = "8-37-38-46"

    var teclado_especial = false;

    for (var i in especiales) {

        if (key == especiales[i]) {

            teclado_especial = true;


        }

        if (numero.indexOf(teclado)==-1 && !teclado_especial) {
            return false;


        }
    }

}



function guardar() {
    var codigo = document.getElementById("cod").value;
    var descripcion = document.getElementById("desc").value;
    var f_registro = document.getElementById("f_reg").value;
    var f_modificacion = document.getElementById("f_mod").value;

    console.log(codigo)
    console.log(descripcion)
    console.log(f_registro)
    console.log(f_modificacion)
    location.replace("Index.html")

    const details = document.createElement('details')
    details.appendChild('summary')
    
}