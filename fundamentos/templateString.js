//O TEMPLATE é indicado por ${}
//OBS.: As crases no template são chamadas de BACKTICK
const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
const template = `
    Olá
    ${nome}!
`

//Expressões
console.log(concatenacao, template)
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()//Função ARROW
console.log(`Ei... ${up('cuidado')}!`)//função no template

