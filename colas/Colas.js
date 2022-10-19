let cola = new Array();
	function resp(){
		let op = document.getElementById('opcion').value;
		let item = 1;
			alert("Para salir del ciclo de insersion, enviar un 0 como dato")
				while(item != '0'){
					item = prompt("Tecle un dato:", "");
					cola.push(item);
				}
				cola.pop();
			}

		