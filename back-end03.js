//1
const texto = 'Gol do corinthians';
console.log('Comprimento do texto:', texto.length);
console.log('Texto em maiúsculas:', texto.toUpperCase());

//2
let variavelNull = null;
let variavelUndefined;
console.log('Valor da variável null:', variavelNull);
console.log('Valor da variável undefined:', variavelUndefined);

//3
const number = 3;
const string = 'cabra';
const boolean = true;
const juntos = `Número:${number} Texto:${string} Booleano ${boolean}`;
console.log(juntos);

//4
const numero = 123;
const textor = '456';
const numeroParaString = numero.toString();
const textoParaNumero = Number(textor);
console.log('Tipo da variável número convertido para string:', typeof numeroParaString);
console.log('Tipo da variável string convertido para número:', typeof textoParaNumero);

//5
const textin = 'bagre alberto';
console.log('Texto em maiúsculo:', textin.toUpperCase());
console.log('Comprimento do texto:', textin.length);

//6
let saldo = 1000;        
const deposito = 200;   
const saque = 150;
let saldoAposDeposito = saldo + deposito;
let saldoFinal = saldoAposDeposito - saque;
console.log('Saldo inicial:', saldo);
console.log('Valor do depósito:', deposito);
console.log('Valor do saque:', saque);
console.log('Saldo após depósito:', saldoAposDeposito);
console.log('Saldo final após saque:', saldoFinal);

//7
const número = 4;
const resultado = (número% 2 === 0) ? 'Par' : 'Impar';
console.log(resultado)

//8
const temPermissao = true
const estaLogado = false

if (temPermissao && estaLogado) {
    console.log("Seu acesso foi liberado!!");
} else {
    console.log("Acesso negado!!");
}

//9
//yuri alberto é bagre?
const fazMuitoGol = false
const atrapalhaOtime = true

if (fazMuitoGol === false || atrapalhaOtime === true) {
    console.log('Bagre Alberto');
} else {
    console.log('Yuri Craque Alberto');
}

//10
const idadeMIN = 18;
const idadeUSU = 17;
if (idadeUSU >= idadeMIN) {
    console.log('Quantos ingressos vai querer?');
} else {
    console.log('Você não tem a idade minima!')
}

//11
const nome = "Diogo";
function cumprimentar(){
    console.log(`Olá, ${nome}!`);
}
cumprimentar();

//12
function verificarMaiorIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
  }
  const idade = 20;
  const resultados = verificarMaiorIdade(idade);
  console.log(`A pessoa com ${idade} anos é ${resultados}.`);

//13
function isPalindromo(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  const teste = 'socorram me subi no onibus em Marrocos';
  const resultadin = isPalindromo(teste);
  console.log(`A string "${teste}" ${resultadin ? 'é' : 'não é'} um palíndromo.`);

//14
const num1 = 17;
const num2 = 33;
const num3 = 7;

function maiorNumero(num1, num2, num3){
    let maior = num1;
    if ( maior < num2){
        maior = num2;
    }else if(maior < num3){
        maior = num3;
    };
    console.log(`O maior número é ${maior}.`);
}

//15
const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

console.log(calculaPotencia(2,3));