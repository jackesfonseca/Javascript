//OBS: instalado o code runner no vscode usa-se a teclas ctrl + alt + n para executar o programa
/*
    existem três formas de stribuir uma string
    ""
    ''
    `` disponível a partir da versão de 2015 do ECMAscript
*/

const palavra1 = 'escola'
var palavra2 = "casa"
let palavra3 = 'caminho'

var num = 3.14159265

console.log(palavra1.charAt(0))//como no java é o usado a função charAt() para pegar um caractere da string
console.log(num.toFixed(2))//definição do número de casas decimais
console.log(palavra3.indexOf('a'))//exibe o índice do valor informado (numero/caractere)
console.log(palavra1.substring(2))//exibe o substring a parti do índice informado
console.log("estou a " .concat(palavra3) .concat(" da ").concat(palavra1).concat('!'))//concatenar um valor literal (não armazenado em variável/constante)

console.log(palavra2.replace(2, 'e'))

console.log('Ana,Maria,Pedro'.split(','))//gera um array
console.log('3' + 2)//como o 3 foi declarado como uma string e o + faz sentido dentro das string este valor será concatenado