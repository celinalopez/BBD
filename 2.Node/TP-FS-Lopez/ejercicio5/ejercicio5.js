const fs = require('fs');

const origen = process.argv[2];
const destino = process.argv[3];

if (!origen || !destino) {
  console.log('Uso: node ejercicio5.js [origen] [destino]');
  process.exit(1);
}

if (!fs.existsSync(origen)) {
  console.log(`Error: el archivo de origen "${origen}" no existe.`);
  process.exit(1);
}

try {
  const contenido = fs.readFileSync(origen); 
  fs.writeFileSync(destino, contenido);      
  console.log(`Copia realizada: "${origen}" hacia "${destino}"`);
} catch (e) {
  console.log('No se pudo copiar:', e.message);
}
