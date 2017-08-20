// JavaScript Document

function media() 
	{
	var n1, n2, n3, n4, media;
	n1 = eval(window.prompt("Digite a nota: ", "00"));
	n2 = eval(window.prompt("Digite a nota: ", "00"));
	n3 = eval(window.prompt("Digite a nota: ", "00"));
	n4 = eval(window.prompt("Digite a nota: ", "00"));
	
	//processamento da média
	media = ((n1 + n2 + n3 + n4) /4);	
	
	//if: Se, verifica se uma condição é verdadeira
	//ou falsa
	if (media >= 7) 
		{
		document.getElementById("resultado").innerHTML = "Aluno aprovado! " + media;			
		}
	//else: Se não (caso contrário)
	else 
		{
	document.getElementById("resultado").innerHTML = "Aluno reprovado! " + media;			
		}
	}