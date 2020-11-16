function chamaFuncao()
{
	var op1=document.getElementById("entrada1").value;
	var op2=document.getElementById("entrada2").value;
	var op3=document.getElementById("entrada3").value;

	op1=parseInt (op1);
	op2=parseInt (op2);
	op3=parseInt (op3);

	var resultado=mediaponderada (op1, op2, op3);
	alert("A media  " + " é " + resultado);
}
function mediaponderada (operador1, operador2, operador3)
{
	var m;
	m= (((operador1*2) + (operador2*3) + (operador3*5))/10);
	return m;
}