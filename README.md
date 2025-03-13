# motor-prueba
Prueba Tecnica para la Empresa Kosmos
Motor de decisión de crédito

Descripción General:
El archivo motor.js contiene una función llamada calculoMotor que implementa un motor de decisión de crédito para una empresa financiera. Esta función toma tres parámetros de entrada:
tipoNomina: El tipo de nómina del cliente (A, B, C o D).
fechaPrimerEmpleo: La fecha de ingreso del cliente a su primer empleo.
genero: El género del cliente (m o f).
La función calcula el monto mínimo y máximo de crédito, así como la línea de crédito óptima para el cliente, basándose en tablas de montos predefinidos y fórmulas específicas.
Explicación Paso a Paso del Código:
Obtención de la Fecha Actual:
const fechaActual = new Date();
Se crea un objeto Date que representa la fecha y hora actuales.
Cálculo de Meses Transcurridos:
const mesesDesdeEmpleo = (fechaActual.getFullYear() - fechaPrimerEmpleo.getFullYear()) * 12 + fechaActual.getMonth() - fechaPrimerEmpleo.getMonth();
Se calcula la diferencia en meses entre la fecha actual y la fecha del primer empleo.
Definición de Tablas de Montos:
Se definen cuatro objetos (montosMinimosM, montosMinimosF, montosMaximosM, montosMaximosF) que representan las tablas de montos de crédito para hombres y mujeres.
Estos objetos utilizan estructuras anidadas para facilitar el acceso a los montos según el tipo de nómina y el rango de meses.
Determinación del Rango de Meses:
Se utiliza una serie de condicionales if...else para determinar el rango de meses correspondiente al cliente, según su género y los meses transcurridos.
Obtención de Montos Mínimo y Máximo:
Se obtienen los montos mínimo y máximo de crédito de las tablas correspondientes, utilizando el tipo de nómina y el rango de meses determinados.
Cálculo de la Línea de Crédito Óptima:
Se calculan dos valores (p1 y p2) utilizando las fórmulas proporcionadas.
Se determina la línea de crédito óptima como el máximo entre p1 y p2.
Retorno del Resultado:
Se crea un objeto con los atributos montoMinimo, montoMaximo y recomendacionLinea, y se retorna este objeto.
Datos de Prueba:
Se define un array llamado datosPrueba que contiene objetos con datos de prueba para la función calculoMotor.
Ejecución de la Función y Presentación de Resultados:
Se utiliza el método forEach para iterar sobre el array datosPrueba y llamar a la función calculoMotor con cada conjunto de datos.
Se utiliza console.log para mostrar los resultados en la consola.
Resumen General:
El código motor.js implementa un motor de decisión de crédito que calcula el monto mínimo y máximo de crédito, así como la línea de crédito óptima, para un cliente. La función calculoMotor toma tres parámetros de entrada y utiliza tablas de montos predefinidas y fórmulas específicas para realizar los cálculos. El código incluye un conjunto de datos de prueba y muestra los resultados en la consola.
