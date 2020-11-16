function chamaFuncao()
{
	var op1=document.getElementById("entrada1").value;
	var op2=document.getElementById("entrada2").value;

	op1=parseInt (op1);
	op2=parseInt (op2);

	var resultado=hipotenusa (op1, op2);
	alert("A hipotenusa do triangulo retangulo de cateto " + op1 + " e " + op2 + " é " + resultado);
}
function hipotenusa (operador1, operador2)
{
	var i;
	i = ((operador1*operador1) + (operador2*operador2));
	return Math.sqrt(i);
}