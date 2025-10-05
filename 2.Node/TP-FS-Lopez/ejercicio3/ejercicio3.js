const fs = require('fs');

const RUTA = 'contactos.json';

function leerContactos() {
  if (!fs.existsSync(RUTA)) {
    return [];
  }
  const texto = fs.readFileSync(RUTA, 'utf8');
  const datos = JSON.parse(texto);
  return datos;
}

function guardarContactos(contactos) {
  const texto = JSON.stringify(contactos, null, 2); 
  fs.writeFileSync(RUTA, texto, 'utf8');
}

function agregarContacto(nombre, telefono, email) {
  const contactos = leerContactos();
  const nuevo = { nombre, telefono, email };
  contactos.push(nuevo);
  guardarContactos(contactos);
  console.log('Agregado:', nombre);
}

function mostrarContactos() {
  const contactos = leerContactos();
  console.log('Listado de contactos:');
  for (let i = 0; i < contactos.length; i++) {
    const c = contactos[i];
    console.log(`${i + 1}. ${c.nombre} | ${c.telefono} | ${c.email}`);
  }
}

function eliminarContacto(nombre) {
  const contactos = leerContactos();
  const filtrados = contactos.filter(c => c.nombre !== nombre);
  if (filtrados.length === contactos.length) {
    console.log('No se encontro el contacto:', nombre);
  } else {
    guardarContactos(filtrados);
    console.log('Eliminado:', nombre);
  }
}

// Pruebas
agregarContacto('Carlos López', '987-654-3210', 'carlos@example.com');
mostrarContactos();
eliminarContacto('Juan Pérez');
mostrarContactos();
