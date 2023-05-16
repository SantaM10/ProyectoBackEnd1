// Cargar los datos de la cookie
const doctoresCookie = JSON.parse(getCookie('doctores') || "[]");
const pacientesCookie = JSON.parse(getCookie('pacientes') || "[]");

// Buscar la tabla de doctores en el HTML para agregar nuevos doctores
const tablaDoctores = document.getElementById("tabla-doctores");
const cuerpoTabla = tablaDoctores.querySelector("tbody");

for (let i = 0; i < doctoresCookie.length; i++) {
  const doctor = doctoresCookie[i];
  // Insertar fila para agregar doctores
  const fila = cuerpoTabla.insertRow();
  // Insertar celdas para agregar cada uno de los datos de los doctores
  const celdaNombre = fila.insertCell();
  const celdaApellido = fila.insertCell();
  const celdaCedula = fila.insertCell();
  const celdaEspecialidad = fila.insertCell();
  const celdaConsultorio = fila.insertCell();
  const celdaCorreo = fila.insertCell();
  const celdaPacientes = fila.insertCell();
  // Agregar la información a cada una de las celdas de la tabla
  celdaNombre.textContent = doctor.nombreDoctor;
  celdaApellido.textContent = doctor.apellidoDoctor;
  celdaCedula.textContent = doctor.cedula;
  celdaEspecialidad.textContent = doctor.especialidad;
  celdaConsultorio.textContent = doctor.consultorio;
  celdaCorreo.textContent = doctor.correo;

  // Buscar los pacientes asignados al doctor actual y que tengan la misma especialidad
  const pacientesAsignados = pacientesCookie.filter(paciente => paciente.especialidad === doctor.especialidad);

  // Obtener solo los nombres de los pacientes asignados
  const nombresPacientes = pacientesAsignados.map(paciente => paciente.nombrePaciente);

  // Mostrar los nombres de los pacientes asignados en la celda correspondiente
  celdaPacientes.textContent = nombresPacientes.join(", ");
}

// Función para obtener los datos de la cookie
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
