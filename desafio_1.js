function operacoes(valor1, valor2) {
    
    console.log( valor1 + valor2);

    console.log( valor1 - valor2);

    console.log( valor1 * valor2);

    if (valor2 != 0) 
    {
        console.log(valor1 / valor2);
    } else 
    {
        console.log("coloque um numero valido por favor");
    }
}

operacoes (20, 0)