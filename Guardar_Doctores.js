const formularioDoctores = document.getElementById("Registro-doctores-from");
formularioDoctores.addEventListener("submit", (event) => {
  event.preventDefault();
  const datosDoctor = {
    nombreDoctor: document.getElementById("nombre").value,
    apellidoDoctor: document.getElementById("apellido").value,
    cedula: document.getElementById("cedula").value,
    especialidad: document.getElementById("especialidad").value,
    consultorio: document.getElementById("consultorio").value,
    correo: document.getElementById("correo").value,
  };
  const doctoresCookie = getCookie("doctores")
    ? JSON.parse(getCookie("doctores"))
    : [];
  doctoresCookie.push(datosDoctor);
  guardarEnCookie(doctoresCookie);
  
  const confirmacion = confirm(
    "¿Desea ver los datos o seguir añadiendo doctores?"
  );
  if (confirmacion) {
    window.location.href = "ListadoDoctores.html";
  } else {
    console.log("Continuando en el formulario");
    formularioDoctores.reset();
  }
});

function guardarEnCookie(doctores) {
  const nuevoJSON = JSON.stringify(doctores);
  setCookie("doctores", nuevoJSON);
}

function getCookie(nombre) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === nombre) {
      return decodeURIComponent(cookie[1]);
    }
  }
  return "";
}

function setCookie(nombre, valor) {
  document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}
