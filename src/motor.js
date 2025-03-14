const datosMotor = [
	{
		tipoNomina: 'A',
		fechaPrimerEmpleo: new Date('2022-06-12'),
		genero: 'f',
	},
	{
		tipoNomina: 'B',
		fechaPrimerEmpleo: new Date('1993-12-30'),
		genero: 'f',
	},
	{
		tipoNomina: 'C',
		fechaPrimerEmpleo: new Date('2020-09-19'),
		genero: 'm',
	},
	{
		tipoNomina: 'D',
		fechaPrimerEmpleo: new Date('2019-01-15'),
		genero: 'm',
	},
];

function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero) {
	const fechaActual = new Date();

	const mesesDesdeEmpleo =
		(fechaActual.getFullYear() - fechaPrimerEmpleo.getFullYear()) * 12 +
		fechaActual.getMonth() -
		fechaPrimerEmpleo.getMonth();

	const montosMinimosM = {
		A: { '0-26': 100, 27: 400, 28: 900, 29: 100, '30-inf': 600 },
		B: { '0-26': 1000, 27: 600, 28: 1000, 29: 1000, '30-inf': 1000 },
		C: { '0-26': 400, 27: 200, 28: 200, 29: 1000, '30-inf': 600 },
		D: { '0-26': 400, 27: 300, 28: 500, 29: 900, '30-inf': 1000 },
	};

	const montosMinimosF = {
		A: { '0-24': 800, 25: 800, 26: 800, 27: 600, '28-inf': 200 },
		B: { '0-24': 800, 25: 700, 26: 100, 27: 600, '28-inf': 700 },
		C: { '0-24': 200, 25: 900, 26: 700, 27: 800, '28-inf': 100 },
		D: { '0-24': 500, 25: 1000, 26: 600, 27: 400, '28-inf': 700 },
	};

	const montosMaximosM = {
		A: { '0-26': 4900, 27: 4700, 28: 4600, 29: 4600, '30-inf': 4500 },
		B: { '0-26': 4700, 27: 4400, 28: 5000, 29: 4400, '30-inf': 4900 },
		C: { '0-26': 5000, 27: 4700, 28: 5000, 29: 4200, '30-inf': 4600 },
		D: { '0-26': 4400, 27: 4700, 28: 4300, 29: 4900, '30-inf': 4300 },
	};

	const montosMaximosF = {
		A: { '0-24': 4000, 25: 4200, 26: 4100, 27: 4200, '28-inf': 4500 },
		B: { '0-24': 4700, 25: 4200, 26: 4500, 27: 4300, '28-inf': 4400 },
		C: { '0-24': 4600, 25: 4900, 26: 4600, 27: 4700, '28-inf': 4000 },
		D: { '0-24': 5000, 25: 4900, 26: 4700, 27: 5000, '28-inf': 4300 },
	};

	let rangoMeses;
	if (genero === 'm') {
		if (mesesDesdeEmpleo < 27) rangoMeses = '0-26';
		else if (mesesDesdeEmpleo === 27) rangoMeses = 27;
		else if (mesesDesdeEmpleo === 28) rangoMeses = 28;
		else if (mesesDesdeEmpleo === 29) rangoMeses = 29;
		else rangoMeses = '30-inf';
	} else {
		if (mesesDesdeEmpleo < 25) rangoMeses = '0-24';
		else if (mesesDesdeEmpleo === 25) rangoMeses = 25;
		else if (mesesDesdeEmpleo === 26) rangoMeses = 26;
		else if (mesesDesdeEmpleo === 27) rangoMeses = 27;
		else rangoMeses = '28-inf';
	}

	let montoMinimo, montoMaximo;
	if (genero === 'm') {
		montoMinimo = montosMinimosM[tipoNomina][rangoMeses];
		montoMaximo = montosMaximosM[tipoNomina][rangoMeses];
	} else {
		montoMinimo = montosMinimosF[tipoNomina][rangoMeses];
		montoMaximo = montosMaximosF[tipoNomina][rangoMeses];
	}

	const p1 = montoMinimo + Math.sqrt(montoMaximo - montoMinimo);
	const p2 = montoMinimo + 0.0175 * (montoMaximo - montoMinimo);
	const recomendacionLinea = Math.max(p1, p2);

	return {
		montoMinimo: montoMinimo,
		montoMaximo: montoMaximo,
		recomendacionLinea: recomendacionLinea,
	};
}
console.log('motor.js cargado');
