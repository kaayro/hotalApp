var conexion={
    estaConectado: function(){
        if(navigator.connection.type != Connection.NONE)
            return true;    
        else
            return false;  
    },
	eventoConectado: function(){
		document.addEventListener("online",almacen.syncData,false);
	}
}