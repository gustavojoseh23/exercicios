function triangulos(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3) {
        return console.log("Equilatero");
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        return console.log("Isoceles");
    } else {
        return console.log("Escaleno");
    }
}

triangulos(1, 2, 3);

