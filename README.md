# CHALLENGE FULL STACK - JavaScript 🚀

## Objetivo

Desarrollar una aplicación para administración de presupuesto personal. La misma debe
permitir crear y editar ingresos y egresos de dinero, y mostrar un balance resultante de las
operaciones registradas.

### Requerimientos Técnicos

API desarrollada en Node.js utilizando el framework Express.

## Secciones

### Home

La pantalla de inicio muestra el balance actual, es decir, el resultante de los ingresos y egresos de dinero cargados, y un listado de los últimos 10 registrados.

### ABM de operaciones (ingresos y egresos)

La aplicación contiene:

- Formulario de registro de operación. El mismo deberá contener:
  - Concepto
  - Monto
  - Fecha
  - Tipo (ingreso o egreso)
- Listado de operaciones registradas según su tipo (ingreso o egreso).
- Desde el listado, se debe poder modificar o eliminar una operación registrada previamente. No debe ser posible modificar el tipo de operación (ingreso o egreso) una vez creada.
