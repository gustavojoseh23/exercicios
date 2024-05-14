function calcularJurosSimples(capital, taxa, tempo) {
    let montante = capital * (1 + taxa * tempo);
    return console.log(montante);
}

calcularJurosSimples(1, 5, 40)