// Mensaje de entrada

var Nombre = prompt("Ingrese su nombre para saber si es alumno o profesor");

switch (Nombre.trim()) {
  case "Yvan":
    alert("¡Bienvenido Yvan!");
    console.log("Mensaje mostrado: !Bienvenido Yvan!");
    break;

  case "Catherin":
    alert("¡Bienvenida Cati!");
    console.log("Mensaje mostrado: !Bienvenida Cati!");
    break;

  case "Vannesa":
    alert("¡Bienvenida Vanne!");
    console.log("Mensaje mostrado: !Bienvenida Vane!");
    break;

  case "Gerson":
    alert("¡Bienvenido Profesor Gerson!");
    console.log("Mensaje mostrado: ¡Bienvenido Profesor Gerson!");
    break;

  default:
    alert("No registramos si es alumno o profesor, pero igual sea bienvenido.");
    console.log("Mensaje mostrado: No registramos si es alumno o profesor, pero igual sea bienvenido.");
    break;
}

// Subscripcion al newsletter

var form = document.getElementById('subscribe-form');
var emailInput = document.getElementById('input-email');
var confirmationMessage = document.getElementById('mensaje-confirmacion');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var email = emailInput.value;

  form.style.display = 'none';
  confirmationMessage.style.display = 'block';

  emailInput.value = '';

});

// Formulario de Contacto 

document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
  event.preventDefault();

  var nombre = document.getElementsByName("Nombre")[0].value;
  var email = document.getElementsByName("Email")[0].value;
  var mensaje = document.getElementsByName("mensaje")[0].value;
  var emoji = "\uD83D\uDC35";

  var mensajeConfirmacion = ("¡Tu monito ha sido enviado!" + (emoji));
  alert(mensajeConfirmacion);

  document.getElementById("formulario-contacto").reset();
});

