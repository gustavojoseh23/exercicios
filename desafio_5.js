function dinheiro(valor) {
    
    valor = Math.round(valor * 100) / 100;

    let valorTexto = valor.toFixed(2);

    valorTexto = valorTexto.replace('.', ',');

    valorTexto = 'R$' + valorTexto;

    return valorTexto;
}

let valor = 134.3434343;
console.log(dinheiro(valor)); // Saída: R$0,30
