// JavaScript Document

function verificaEmprestimo() 
{
var nome = document.getElementById("txtNome");
var salario = eval(document.getElementById("txtSalario"));
var meses = eval(document.getElementById("txtMeses"));
var spc = document.getElementById("txtSpc");
var emprestimo = eval(document.getElementById("txtEmprestimo"));
var mensagem = document.getElementById("resposta");

	if (salario.value >= 1500 && meses.value >= 12 && emprestimo.value >= 1000 && spc.value == "N") 
		{
		mensagem = "Emprestimo aceito!";
		}	
	else 
		{
		mensagem = "Emprestimo recusado!";		
		}
		
		document.getElementById("resposta").innerHTML = mensagem;
		
		
}