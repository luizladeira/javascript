
/**********
FUNÇÃO SOMAR
**********/
function Somar(x1, x2){
    return x1+x2;
}

let resultado = Somar(2,3);
console.log(resultado);


/**********
FUNÇÃO CALCULAR
**********/
function calcular(x1, x2, operador){
    return eval(`${x1} ${operador} ${x2}`);
}

let resultado_calculo = calcular(9,2, "*");
console.log(resultado_calculo);


/**********
FUNÇÃO ANONIMA
**********/
//função anonima eu posso invocar ela no momento da criação
(function (x1, x2, operador){
    console.log(eval(`${x1} ${operador} ${x2}`));
})(2,2,"*");


/**********
Arrow_functions
**********/
let subtrair = (x1, x2) => { 
    return x1-x2;
}

let resultado_sub = subtrair(6,1);
console.log(resultado_sub);

/**********
EVENTS
**********/
window.addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log('clique');
});


/**********
DATES
**********/
let ago_1 = Date.now(); 
console.log(ago_1);

let ago_2 = new Date();
console.log(ago_2);

console.log('Dia: '+ ago_2.getDate());
console.log('MêS: '+ ago_2.getMonth());
console.log('Ano: '+ ago_2.getFullYear());

//Pegar a data pela localização do usuário
let ago_geo = new Date();
console.log(ago_geo.toLocaleDateString('pt-BR'));

/**********
ARRAYS
**********/
