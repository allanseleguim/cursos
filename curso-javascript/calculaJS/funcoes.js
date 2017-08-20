
	function calcular(op) 
	{
	
	var total = 0;
	var valorA = document.getElementById("valorA").value;
	var valorB = document.getElementById("valorB").value;

	switch(op) 
		{
		case 1:
		total = parseInt(valorA) + parseInt(valorB);
		break;	
		
		case 2:
		total = parseInt(valorA) - parseInt(valorB);
		break;	
		
		case 3:
		total = parseInt(valorA) * parseInt(valorB);
		break;	
		
		case 4:
		total = parseInt(valorA) / parseInt(valorB);
		break;	
		}	
		
	document.getElementById("resultado").innerHTML = total;
	}