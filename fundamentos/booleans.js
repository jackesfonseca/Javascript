let isAtivo = true
console.log(isAtivo)

isAtivo = false
console.log(isAtivo)

isAtivo = 1 //true

console.log(!!isAtivo)//uma negação anula a outra tornando verdadeiro
console.log(!isAtivo)
console.log(isAtivo)//retorna valor numérico

//OBS.: Outras formas de representar true e false em ECMAScript
console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!{})//objeto literal
console.log(!![])//array vazio
console.log(!!' ')//espaço em branco (\0)
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))//quando a atribuição é resolvida para verdadeiro

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')//string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

//Uso de contexto de true e false em expressões
console.log('Expressão')
console.log(!!('' || null || 0 || ' '))//como há pelo menos um verdadeiro retorna true

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Lucas'
console.log(nome || 'Desconhecido')