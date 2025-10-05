const fs = require('fs/promises');

function fechaHora() {
  const date = new Date();
  const dos = n => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${dos(date.getMonth()+1)}-${dos(date.getDate())} ${dos(date.getHours())}:${dos(date.getMinutes())}:${dos(date.getSeconds())}`;
}

(async () => {
  try {
    //Crear archivo
    const contenido = "Nombre: Celina\n Edad: 26 \nCarrera: Tecnictura Universitaria en Programacion";
    await fs.writeFile('datos.txt', contenido, 'utf8');
    console.log('Se crea datos.txt');

    const leido = await fs.readFile('datos.txt', 'utf8');

    // Agregar fecha
    await fs.appendFile('datos.txt', `Fecha de modificacion: ${fechaHora()}\n`, 'utf8');
    console.log('Se agrega fecha de modificacion');

    // Renombrar
    await fs.rename('datos.txt', 'informacion.txt');
    console.log('Se renombra datos.txt a informacion.txt');

    // Eliminar despues de 10 seg
    console.log('Se eliminara informacion.txt en 10 segundos');
    setTimeout(async () => {
      try {
        await fs.unlink('informacion.txt');
        console.log('Archivo eliminado.');
      } catch (e) {
        console.log('Error al eliminar:', e.message);
      }
    }, 10000);
  } catch (e) {
    console.error('Ocurrio un error:', e.message);
  }
})();
