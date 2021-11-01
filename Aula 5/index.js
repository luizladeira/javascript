function Somar(x1, x2){
    return x1+x2;
}

function calcular(x1, x2, operador){
    return eval(`${x1} ${operador} ${x2}`);
}

let resultado = Somar(2,3);

let resultado_calculo = calcular(9,2, "*");

console.log(resultado);
console.log(resultado_calculo);