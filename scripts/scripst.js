var Nombre = prompt("Ingrese su nombre para saber si es alumno o profesor, gracias!");

switch (Nombre.trim()) {
  case "Yvan":
    alert("Bienvenido Yvan!");
    console.log("Mensaje mostrado: Bienvenido Yvan!");
    break;

  case "Catherin":
    alert("Bienvenida Cati!");
    console.log("Mensaje mostrado: Bienvenida Cati!");
    break;

  case "Vannesa":
    alert("Bienvenida Vane!");
    console.log("Mensaje mostrado: Bienvenida Vane!");
    break;

  case "Gerson":
    alert("Bienvenido Profesor Gerson!");
    console.log("Mensaje mostrado: Bienvenido Profesor Gerson!");
    break;

  default:
    alert("No registramos si es alumno o profesor, pero igual sea bienvenido.");
    console.log("Mensaje mostrado: No registramos si es alumno o profesor, pero igual sea bienvenido.");
    break;
}