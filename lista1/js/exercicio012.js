function chamaFuncao()
{
	var op1=document.getElementById("entrada1").value;
	var op2=document.getElementById("entrada2").value;

	op1=parseInt (op1);
	op2=parseInt (op2);

	var resultado=novosalario (op1, op2);
	alert("O novo salario  " + " é " + resultado);
}
function novosalario (operador1, operador2)
{
	var i;
	i = ((operador1*operador2)/100);
	return i+operador1;
}