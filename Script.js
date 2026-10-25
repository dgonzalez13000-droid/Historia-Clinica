
const formulario = document.getElementById("formulario");

const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;

    let documento = document.getElementById("documento").value;

    let telefono = document.getElementById("telefono").value;

    let motivo = document.getElementById("motivo").value;
    
let personales = document.getElementById("personales").value;

let familiares = document.getElementById("familiares").value;

let quirurgicos = document.getElementById("quirurgicos").value;

let alergias = document.getElementById("alergias").value;

let medicamentos = document.getElementById("medicamentos").value;

console.log("Antecedentes personales:", personales);

console.log("Antecedentes familiares:", familiares);

console.log("Antecedentes quirúrgicos:", quirurgicos);

console.log("Alergias:", alergias);

console.log("Medicamentos:", medicamentos);



    if (nombre.trim() !== "" &&
        documento.trim() !== "" &&
        telefono.trim() !== "" &&
        motivo.trim() !== "") {

        mensaje.textContent = "Formulario validado correctamente";

        formulario.reset();

    } else {

        mensaje.textContent = "Debe completar todos los campos";

    }

});
