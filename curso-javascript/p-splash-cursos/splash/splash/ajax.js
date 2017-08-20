//====função que inicializa o AJAX e verifica os objetos do nav.======//
	function ajaxInit() {
	var xmlhttp;
	try {
	xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
	try {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	} catch (E) {
	xmlhttp = false;
	}
	}
	if (!xmlhttp && typeof XMLHttpRequest != 'undefined' ) {
	try {
	xmlhttp = new XMLHttpRequest();
	} catch (e) {
	xmlhttp = false ;
	}
	}
	return xmlhttp;
	}
	function url_encode(str) {
	var hex_chars = "0123456789ABCDEF";
	var noEncode = /^([a-zA-Z0-9\_\-\.])$/;
	var n, strCode, hex1, hex2, strEncode = "";
	for(n = 0; n < str.length; n++) {
	if (noEncode.test(str.charAt(n))) {
	strEncode += str.charAt(n);
	} else {
	strCode = str.charCodeAt(n);
	hex1 = hex_chars.charAt(Math.floor(strCode / 16));
	hex2 = hex_chars.charAt(strCode % 16);
	strEncode += "%" + (hex1 + hex2);
	}
	}
	return strEncode;
	}
	function url_decode(str) {
	var n, strCode, strDecode = "";
	for (n = 0; n < str.length; n++) {
	if (str.charAt(n) == "%") {
	strCode = str.charAt(n + 1) + str.charAt(n + 2);
	strDecode += String.fromCharCode(parseInt(strCode, 16));
	n += 2;
	} else {
	strDecode += str.charAt(n);
	}
	}
	return strDecode;
	}
	//====função retorna página X em layer Y após Z tempo com N Loading===//
	//====trabalhamos aqui com IDs de cada marcação em HTML para ident.===//
	function abrirEmSegundos(pagina,layer) {
	document.getElementById(layer).innerHTML = "<img src='ajax.gif'>";
	ajax = ajaxInit();
	ajax.open("GET",pagina+".php", true);
	ajax.onreadystatechange = function() {
	if(ajax.readyState == 4 && ajax.status == 200) {
	var resultado = ajax.responseText;
	resultado=resultado.replace(/\+/g," ");
	resultado = unescape(resultado);
	document.getElementById(layer).innerHTML = url_decode(resultado);
	}
	}
	ajax.send(null);
	}
