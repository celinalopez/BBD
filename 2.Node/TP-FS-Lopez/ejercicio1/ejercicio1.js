const fs = require('fs/promises');

function fechaHora() {
  const date = new Date();
  const dos = n => String(n).padStart(2, '0');
  return `[${date.getFullYear()}-${dos(date.getMonth()+1)}-${dos(date.getDate())} ${dos(date.getHours())}:${dos(date.getMinutes())}:${dos(date.getSeconds())}]`;
}

async function escribirLinea(texto) {
  const linea = `${fechaHora()} - ${texto}\n`;
  await fs.appendFile('log.txt', linea, 'utf8');
}

(async () => {
  await escribirLinea('Inicio del programa');
  await escribirLinea('Ejecutando tarea');

  setTimeout(async () => {
    await escribirLinea('Tarea completada');
    console.log('Programa finalizado');
  }, 5000);
})();
