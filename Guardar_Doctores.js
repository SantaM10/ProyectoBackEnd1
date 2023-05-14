//obtenemos el formulario
const formularioDoctores = document.getElementById("Registro-doctores-from");
//Cuando el formulario se envie va hacer lo que esta entre corchetes (5-21)
formularioMascota.addEventListener("submit", (event) => {
  event.preventDefault(); //quietara por defecto el envio del formulario
  const datosDoctores = {
    //definiendo un objeto
    //atributo = informacion del campo
    NombreDoctor: document.getElementById("nombre").value,
    ApellidoDcotor: document.getElementById("apellido").value,
    cedulaDoctor: document.getElementById("cedula").value,
    especialidad: document.getElementById("especialidad").value,
    Consultorio: document.getElementById("consultorio").value,
    CorreoDoctor: document.getElementById("correo").value,
  };
  guardarEnCookie(datosDoctores);
  const confirmacion = confirm(
    "¿Desea ver los datos o seguir añadiendo medicos?"
  );
  if (confirmacion) {
    window.location.href = "ListadoDoctores";
  } else {
    console.log("Continuando en el formulario");
    formularioMascota.reset();
  }
});
// Función para guardar un doctor en la cookie
function guardarEnCookie(doctor) {
  // Obtener los datos de la cookie actual de doctores
  let datosDoctores = getCookie("doctores");
  // Si la cookie está vacía, inicializarla como un arreglo vacío
  if (datosDoctores === "") {
    datosDoctores = "[]";
  }
  // Convertir la cookie en un arreglo de objetos
  const doctores = JSON.parse(datosDoctores);
  // Agregar el nuevo doctor al arreglo
  doctores.push(doctor);
  // Convertir el arreglo de doctores de nuevo a un JSON
  const nuevoJSON = JSON.stringify(doctores);
  // Guardar el JSON en la cookie
  setCookie("doctores", nuevoJSON);
}

// Función para obtener los datos de la cookie
function getCookie(nombre) {
  //separa las cookies y las guarda en un arreglo
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === nombre) {
      // devolver la infromacion de la cookie que se llama igual
      return decodeURIComponent(cookie[1]);
    }
  }
  //devolver vacio si no encuentra cookie
  return "";
}

// Función para guardar datos en la cookie
function setCookie(nombre, valor) {
  document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}
