<!DOCTYPE html>
<html lang="pt-br">

<meta charset="utf-8" />
	<head>
    <link href="estilo.css" type="text/css" rel="stylesheet"/>
    <script src="ajax.js"></script>
	<title>Splash Cursos</title>
	</head>
		<body>
        <div id="esquerda">
        <img src="contato.png" />
        </div>
        
        <div id="direita">
        <h1>CONTATO</h1>
       
        
                <p> * Preencha corretamente os campos abaixo:</p>
		
        <form>
                <label>
                Nome:
                </label>
                
                <label>
                <input type="text" required="required" name="txtNome" class="caixaTexto" placeholder="João da Silva" />
                </label>
                
                <label>
                Telefone:
                </label>
                
                <label>
                <input type="tel" required="required" name="txtTelefone" placeholder="(00)00000-0000" class="caixaTexto" /> 
                </label>
                
                <label>
                E-mail:
                </label>
                
                <label>
                <input type="email" required="required" name="txtEmail"  class="caixaTexto" placeholder="usuario@provedor.com"/>
                </label>
                
                <label>
                Mensagem:
                </label>
                
                <label>
                <textarea required="required" name="txtMensagem" spellcheck="true" class="caixaMensagem" placeholder="Digite sua mensagem aqui"> </textarea> 
                </label>
                
                <label>
                <input type="submit" value="Enviar" class="botaoEnviar" />
                </label>
    </form>
        
  
        </div>
		</body>
	</html>
