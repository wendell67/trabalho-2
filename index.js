
const prompt = require('prompt-sync')(); // Importa o módulo prompt-sync

while (true) {
  // Lê os números x e y
  const entrada = prompt('Digite os valores de x e y (separados por espaço): ');
  const [x, y] = entrada.split(' ').map(Number); // Divide a entrada e converte para números

  // Verifica se algum dos números é zero
  if (x === 0 || y === 0) {
    console.log('Programa encerrado. Um dos valores é zero.');
    break; // Encerra o loop se algum dos números for zero
  }

  // Verifica em qual quadrante o ponto (x, y) se encontra
  if (x > 0 && y > 0) {
    console.log('Primeiro quadrante');
  } else if (x < 0 && y > 0) {
    console.log('Segundo quadrante');
  } else if (x < 0 && y < 0) {
    console.log('Terceiro quadrante');
  } else if (x > 0 && y < 0) {
    console.log('Quarto quadrante');
  }
}
