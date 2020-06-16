/*
ORGANIZAÇÃO DO CÓDIGO
*/

//código de sentençs
console.log("código de sentença")//o ponto e vírgula é opcional

//bloco de instruções
{
    {
        console.log("Olá")
        console.log("mundo");
    }
}

/*
TIPAGEM DE DADOS (DINÂMICA/FRACA)
*/

//VARIÁVEIS

var idade = 18
let altura = 1.80

//OBS: em javascript é possível redeclarar uma variável dentro de um escopo
var idade = 20 //exceto quando for do tipo let

//CONSTANTE

const pi = 3.14

//tipagem dinâmica

var dinamico = 'Bom dia'
console.log(dinamico)
console.log(typeof dinamico)
var dinamico = 1000
console.log(dinamico)
console.log(typeof dinamico)