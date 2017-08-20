// JavaScript Document
	//função: Conjunto de códigos,feitos para serem
	//executados apartir de um EVENTO (Ação do usuário)
	
	//function: Usado para declarar uma função
	function escreverNaTela() 
	{
	//document.write: Escreve na tela 
	var nome;
	var x = "";
	//window.prompt: LEIA (janela de leitura de dados)
	nome = window.prompt("Digite seu nome: ", "Fernando da Silva");
	//var: É usado para declarar uma variável
	// + ou , usado para JUNTAR / CONCATENAR 
	//document.write("Feliz aniversário " + nome);		
	//window.alert: GERA uma janela de alerta 
	window.alert("Feliz aniversário: " + nome);
	x = ("Feliz aniversário: " + nome);
	//document: ACESSA O DOCUMENTO 
	//GETELEMENTBYID: "PEGA"/Seleciona um elemento através
	//de seu ID 
	//innerHTML: Substitui um conteúdo por outro
	document.getElementById("artigo").innerHTML = x;
	}
	
	function imprimirPagina() 
	{
	window.print(); 
	//window.print: Imprime a página	
	}
	
	function fecharPagina() 
	{
	//window.close: Fecha a página
	window.close();	
	}
	
	function alterarArtigo() 
	{
	artigoNovo = window.prompt("Digite o artigo", "aqui");
	document.getElementById("artigo").innerHTML = artigoNovo;
	//getElementById: "PEGA" um elemento através do ID
	//innerHTML: Substitui o conteúdo atual  	
	}
	
	function mostrarLista() 
	{
	//new Array: Define a variável como tipo VETOR
	var nomes = new Array()	
	var x = "";
	nomes[0] = "Ricardo";
	nomes[1] = "Romulo";
	nomes[2] = "Rogério";
	nomes[3] = "Regina";
	nomes[4] = "Riginiudacunha";
	//for: Laço para, executa um comando sempre que uma condição
	//for verdadeira
	//etapas do FOR
	//ATRIBUIÇÃO --> CONDIÇÃO  --> INCREMENTO 
	//length: Verifica quantas informações existem 
	//dentro da mesma variável  
	for (i = 0;i < nomes.length;i++) 
	{
	x = x + ("Nome: " + nomes[i] + "<br/>");	
	
	}
	document.getElementById("artigo").innerHTML = x;
	
	}
	
	//Script que exibe a tabuada do 1 a 10
	function exibirNumeros() 
	{
	var x = "";
	for(a = 1;a <= 10;a++)
	{
		for(b = 1;b <= 10;b++)
		{
		x = x + (a + " x " + b + " = " + (a*b) + "<br/><br/>");	
		}
	}	
	document.getElementById("artigo").innerHTML = x;
	}
	
	function exibir20()
		{
		var resposta = "";
		valorInicial = 0;
			//while: ENQUANTO 
			while (valorInicial <= 20)
			{
			resposta = resposta + "O número é " + valorInicial + "<br/>";
			valorInicial = valorInicial + 2;
			}
		document.getElementById("artigo").innerHTML = resposta;
		}
		
		function verificaSalario() 
		{			//eval: Converte em número
		
		var salario = eval(window.prompt("Digite o seu salário: ", "000,00"));
		
		//If: SE; Verifica se uma condição
		//é verdadeira ou FALSA 
		if (salario >= 2000) 
			{
			var resposta = "Salário excelênte!";	
			
			}
		else  // Se não (caso contrário) 
		{
			var resposta = "Salário MAISSSSS OU MENOSSS";	
		}
		document.getElementById("artigo").innerHTML = resposta;
			
		}
		
		//Script que usa a função getDay, e pega um número
		//Este número entra na escolha de caso, e dependendo do número
		//Será exibido um texto diferente na variável resposta
		//Que no final aparece na tela 
		
		function exibirData() 
			{
			var resposta = "";
			var dia = new Date().getDay();

						
				switch(dia) 
					{
					case 0: //case: CASO
					resposta = "Domingo! ";
					break; 
					
					case 1:
					resposta = "Segunda! ";
					break;
					
					case 2:
					resposta = "Terça! ";
					break;
					
					case 3:
					resposta = "Quarta! ";
					break;
					
					case 4:
					resposta = "Quinta! ";
					break;
					
					case 5:
					resposta = "Sexta! ";
					break;
					
					case 6:
					resposta = "Sábado! ";
					break;
					
					default:
					resposta = "Nenhum dia!";
					break;
					
					}
					document.getElementById("artigo").innerHTML = resposta;
			}
		
		
		

	
	