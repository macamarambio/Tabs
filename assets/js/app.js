var mostrarOcultar = function(e){

	var tabSeleccionado = e.target.dataset.tabSeleccionado;
	var desayuno = document.getElementById('desayuno');
	var comida = document.getElementById('comida');
	var cena = document.getElementById('cena');
	
	if(tabSeleccionado === 'tabDesayuno'){
		console.log ('vamos a desayunar');

		//ocultar comida y cena
		comida.style.display = 'none';
		cena.style.display = 'none';
		//mostrar desayuno
		desayuno.style.display = 'block';

	}else if(tabSeleccionado === 'tabComida'){
		//ocultar desayuno y cena
		desayuno.style.display = 'none';
		cena.style.display = 'none';

		//mostrar comida
		comida.style.display = 'block';


	}else if(tabSeleccionado === 'tabCena'){
		//ocultar desayuno y comida
		desayuno.style.display = 'none';
		comida.style.display = 'none';

			//mostrar cena
		cena.style.display = 'block';
		console.log('vamos a cenar');
	}
}

var cargarPagina = function() {
	var desayuno = document.getElementById('desayuno');
	var comida = document.getElementById('comida');
	var cena = document.getElementById('cena');

	desayuno.style.display = 'none';
	comida.style.display = 'none';
	cena.style.display = 'none';

	var elementosTab = document.getElementByClassName('tab');
	
	for(var i = 0; i < elementosTab.length; i++){
		elementosTab[i].addEventListener('click', mostrarOcultar);
	}
}