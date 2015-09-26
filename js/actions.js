var fn = {
	init: function(){
		if(!fn.islogged())
			window.location.href = "#reg";
		
		//Funcionalidades de Registro
		$('#regSend').click(fn.getRegister);
		$('#takePhoto').click(mediaCapture.takePhoto);
	},
	ready:function(){
		document.addEventListener("deviceready", fn.init, false);
	},
	islogged: function(){
		return false;
	},
	getRegister: function(){
		var nom = $('#regName').val();
		var tel = $('#regTel').val();
		var mail = $('#regMail').val();
		if(nom != '' && tel != '' && mail != ''){
			alert();
			//Enviar datos al servidor
		}else{
			navigator.notification.alert('Todos los campos son requeridos', null, "Error de Registro", "Aceptar");
		}
	}
};

$(fn.ready);