# CHALLENGE FULL STACK - JavaScript 馃殌

## Objetivo

Desarrollar una aplicaci贸n para administraci贸n de presupuesto personal. La misma debe
permitir crear y editar ingresos y egresos de dinero, y mostrar un balance resultante de las
operaciones registradas.

### Requerimientos T茅cnicos

API desarrollada en Node.js utilizando el framework Express.

## Secciones

### Home

La pantalla de inicio muestra el balance actual, es decir, el resultante de los ingresos y egresos de dinero cargados, y un listado de los 煤ltimos 10 registrados.

### ABM de operaciones (ingresos y egresos)

La aplicaci贸n contiene:

- Formulario de registro de operaci贸n. El mismo deber谩 contener:
  - Concepto
  - Monto
  - Fecha
  - Tipo (ingreso o egreso)
- Listado de operaciones registradas seg煤n su tipo (ingreso o egreso).
- Desde el listado, se debe poder modificar o eliminar una operaci贸n registrada previamente. No debe ser posible modificar el tipo de operaci贸n (ingreso o egreso) una vez creada.
