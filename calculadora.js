
var valor1 = 0
var calculo = ""

function Valores(valor)
{
alert(valor)
resultado =document.getElementById("resultado").innerHTML
document.getElementById("resultado".innerHTML) += valor
}
function operadores (operador)
{
calculo = operadorvalor1 = documet.getElementById("resultado".innerHTML)
document.getElementById("resultado").innerHTML = ""

}



function Calcular()
valor2 = document.getElementybyId("resultado").innerHTML
if(calculo == '+')
{
    total = parseint(valor1) + parseint(valor2)
}

else if (calculo == '-')
{
    total = parseint(valor1) - parseint(valor2)
}

else if (calculo == '*')
{
    total = parseint(valor1) * parseint(valor2)
}
else if (calculo == '/')
{    
    total = parseint(valor1) / parseint(valor2)
}
document.getElmentybyId("resultado").innerHTML = total

function limpar()
document.getElementById("resultado").innerHTML = ""
valor = ""
calculo = ""

functionCE()
{
resultado = document.getElementById("resultado").innerHTML;

resultadoArray = resultado.split("")

console.log(resultadoArray)
resultadoFinal = ""

for (leti = 0; i < resultadoArray.length-1; i++){
    resultadoFinal += resultadoArray(i);
}

document.getElementById('resultado').innerHTML = resultadoFinal

}