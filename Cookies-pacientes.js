// Cargar los datos de la cookie
const pacientesCookie = JSON.parse(getCookie('pacientes') || "[]");
const doctoresCookie = JSON.parse(getCookie('doctores') || "[]");

// Buscar la tabla de pacientes en el HTML para agregar nuevos pacientes
const tablaPacientes = document.getElementById("tabla-mascotas");
const cuerpoTabla = tablaPacientes.querySelector("tbody");

for (let i = 0; i < pacientesCookie.length; i++) {
  const paciente = pacientesCookie[i];
  // Insertar fila para agregar pacientes
  const fila = cuerpoTabla.insertRow();
  // Insertar celdas para agregar cada uno de los datos de los pacientes
  const celdaNombre = fila.insertCell();
  const celdaApellido = fila.insertCell();
  const celdaCedula = fila.insertCell();
  const celdaEdad = fila.insertCell();
  const celdaTelefono = fila.insertCell();
  const celdaEspecialidad = fila.insertCell();
  // Agregar la información a cada una de las celdas de la tabla
  celdaNombre.textContent = paciente.nombrePaciente;
  celdaApellido.textContent = paciente.apellidoPaciente;
  celdaCedula.textContent = paciente. cedulaPaciente;
  celdaEdad.textContent = paciente.edadPaciente;
  celdaTelefono.textContent = paciente.telefonoPaciente;
  celdaEspecialidad.textContent = paciente.especialidad;
  // Colocar el doctor que atenderá al paciente
  // Buscar el doctor que tenga la especialidad requerida
  const doctorEspecialidad = doctoresCookie.find(doctor => doctor.especialidad === paciente.especialidad);
  // Crear la celda
  const celdaDoctorPaciente = fila.insertCell();
  // Si se encuentra un doctor, mostrar el nombre del doctor; de lo contrario, mostrar "Por asignar"
  celdaDoctorPaciente.textContent = doctorEspecialidad ? doctorEspecialidad.nombre : "Por asignar";
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
