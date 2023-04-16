function saludar() {
    alert("Buen día, Bienvenidos a un nuevo día de trabajo");
}

saludar();



let nombreIngresado = prompt("Ingrese su Nombre: ");
let apellidoIngresado = prompt("Ingrese su Apellido: ");
if ((nombreIngresado != "") && (apellidoIngresado != "")) {
    alert("Buen día, que tengas buena jornada")

    switch (nombreIngresado, apellidoIngresado) {
        case "Nombre":
            console.log("nombreIngresado");
            break;
        case "Apellido":
            console.log("apellidoIngresado");
            break;
        default:
            console.log("Ingrese datos correctos")
            break;
    }
}
else {
    alert("Datos mal ingresados, no puedes comenzar tu jornada laboral");
}






