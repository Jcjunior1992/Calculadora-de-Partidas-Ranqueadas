function saldoRaked(vitoria, derrota) {
    return vitoria - derrota;
}

let resultado = saldoRaked(70, 20);

if (resultado < 10) {
    resultado = "Ferro";
} else if (resultado >= 10 && resultado <= 20) {
    resultado = "Bronze";
} else if (resultado >= 21 && resultado <= 50) {
    resultado = "Prata";
} else if (resultado >= 51 && resultado < 80) {
    resultado = "Ouro";
} else if (resultado >= 81 && resultado < 90) {
    resultado = "Diamante";
} else if (resultado >= 91) {
    resultado = "Lendário";
}

console.log("O Herói tem um saldo de " + saldoRaked(70, 20) + " e está no nível de " + resultado)