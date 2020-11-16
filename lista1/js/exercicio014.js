function chamaFuncao()
{
	var op1=document.getElementById("entrada1").value;
	var op2=document.getElementById("entrada2").value;
	var op3=document.getElementById("entrada3").value;
	var op4=document.getElementById("entrada4").value;

	op1=parseInt (op1);
	op2=parseInt (op2);
	op3=parseInt (op3);
	op4=parseInt (op4);

	var resultado=lojacarro (op1, op2, op3, op4);
	alert("Salario final " +  " é " + resultado);
}
function lojacarro (operador1, operador2, operador3, operador4)
{
	var i;
	i = operador1*operador4;
	return (i+operador3+ ((operador2*5)/100));
}