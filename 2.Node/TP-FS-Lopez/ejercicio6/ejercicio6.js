const fs = require('fs');

const carpeta = 'logs';
const archivo = 'logs/app.log';

function fechaHora() {
  const date = new Date();
  const dos = n => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${dos(date.getMonth() + 1)}-${dos(date.getDate())} ${dos(date.getHours())}:${dos(date.getMinutes())}:${dos(date.getSeconds())}`;
}

// Crear carpeta y archivo si no existen
if (!fs.existsSync(carpeta)) {
  fs.mkdirSync(carpeta);
}
if (!fs.existsSync(archivo)) {
  fs.writeFileSync(archivo, '', 'utf8');
}

const linea = `${fechaHora()} - Ejecucion exitosa\n`;
fs.appendFileSync(archivo, linea, 'utf8');
console.log('Se registró una ejecución.');


const texto = fs.readFileSync(archivo, 'utf8');
const lineas = texto.split('\n').filter(l => l.trim() !== '');
const ultimas5 = lineas.slice(-5);

console.log('Ultimas ejecuciones (max 5):');
for (let i = 0; i < ultimas5.length; i++) {
  console.log(ultimas5[i]);
}
