alert('Vamos fazer alguns calculos!!')
let number1 = Number(prompt('Digite o primeiro número: '))
let number2 = Number(prompt('Digite o segundo número: '))

let sum = number1 + number2
alert(`O resultado da soma de ${number1} + ${number2} é ${sum}!`)
let sub = number1 - number2
alert(`o resultado da subtração de ${number1} - ${number2} é ${sub}!`)
let multi = number1 * number2
alert(`O resultado da multiplicação de ${number1} x ${number2} é ${multi}!`)
let div = number1 / number2
alert(`O resultado da divisão de ${number1} / ${number2} é ${div}!`)
let restDiv = number1 % number2
alert(`O Resultado do resto da divisão de ${number1} % ${number2} é ${restDiv}!`)

if (sum % 2 == 0){
  alert(`A soma de ${number1} + ${number2} é par!`)
}else{
  alert(`A soma de ${number1} + ${number2} não é par!`)
}

if(number1 == number2){
  alert('Os números inseridos são iguais.')
}else{
  alert('Os números inseridos são diferentes.')
}