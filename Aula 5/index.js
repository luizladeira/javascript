function Somar(x1, x2){
    return x1+x2;
}

let resultado = Somar(2,3);
console.log(resultado);

//FUNÇÃO CALCULAR
function calcular(x1, x2, operador){
    return eval(`${x1} ${operador} ${x2}`);
}

let resultado_calculo = calcular(9,2, "*");
console.log(resultado_calculo);

//função anonima eu posso invocar ela no momento da criação
(function (x1, x2, operador){
    console.log(eval(`${x1} ${operador} ${x2}`));
})(2,2,"*");

//Arrow_functions
let subtrair = (x1, x2) => { 
    return x1-x2;
}

let resultado_sub = subtrair(6,1);
console.log(resultado_sub);



