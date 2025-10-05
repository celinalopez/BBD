const fs = require('fs');

const archivo = process.argv[2]; 
const palabra = process.argv[3]; 

if (!archivo || !palabra) {
  console.log('Se debe pasar como argumentos el nombre del archivo y la palabra a buscar: \n"node ejercicio4.js [archivo.txt] [palabra]"');
  process.exit(1);
}

let texto;
try {
  texto = fs.readFileSync(archivo, 'utf8');
} catch (e) {
  console.log('No se pudo leer el archivo:', e.message);
  process.exit(1);
}

const limpio = texto.toLowerCase().replace(/[^a-záéíóúñü0-9\s]/gi, ' ');

const palabras = limpio.split(/\s+/);

const objetivo = palabra.toLowerCase();
let contador = 0;
for (let i = 0; i < palabras.length; i++) {
  if (palabras[i] === objetivo) {
    contador++;
  }
}

console.log(`La palabra "${palabra}" aparece ${contador} veces en el archivo "${archivo}".`);
