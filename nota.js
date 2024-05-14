let notas = [4.5, 5.6, 7.8, 8.9, 9.0];

let totalNotas = 0
let quantidade = 0
let i = 0;

while( i < notas.length) {
    totalNotas += notas[i]
    quantidade++
    i++

}

media = totalNotas / quantidade

console.log(totalNotas, quantidade, media)