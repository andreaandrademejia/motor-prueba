// resultadosMotor.js
function generarTablaResultados(calculoMotor) {
	const tabla = document.createElement('table');
	tabla.style.borderCollapse = 'collapse';
	tabla.style.width = '100%';

	// Encabezado de la tabla
	const encabezado = tabla.createTHead();
	const filaEncabezado = encabezado.insertRow();
	const columnasEncabezado = [
		'Tipo de Nómina',
		'Fecha de Empleo',
		'Género',
		'Monto Mínimo',
		'Monto Máximo',
		'Línea Óptima',
	];

	columnasEncabezado.forEach((texto) => {
		const th = document.createElement('th');
		th.textContent = texto;
		th.style.border = '1px solid black';
		th.style.padding = '8px';
		filaEncabezado.appendChild(th);
	});

	const cuerpoTabla = tabla.createTBody();

	datosMotor.forEach((dato) => {
		const resultado = calculoMotor(
			dato.tipoNomina,
			dato.fechaPrimerEmpleo,
			dato.genero,
		);

		const fila = cuerpoTabla.insertRow();
		const celdas = [
			dato.tipoNomina,
			dato.fechaPrimerEmpleo.toLocaleDateString(),
			dato.genero,
			resultado.montoMinimo,
			resultado.montoMaximo,
			resultado.recomendacionLinea.toFixed(2),
		];

		celdas.forEach((texto) => {
			const celda = fila.insertCell();
			celda.textContent = texto;
			celda.style.border = '1px solid black';
			celda.style.padding = '8px';
		});
	});

	return tabla;
}

const tablaResultados = generarTablaResultados(calculoMotor);
document.body.appendChild(tablaResultados);

console.log('resultadosMotor.js cargado');
