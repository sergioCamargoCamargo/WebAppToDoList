# WebAppToDoList

Este es un proyecto de ejemplo para una aplicación de lista de tareas (To-Do List) desarrollada con Angular. La aplicación permite a los usuarios crear, editar, eliminar y filtrar tareas, utilizando datos simulados sin necesidad de una API real.

## Características

- **Crear nuevas tareas**
- **Editar tareas existentes**
- **Eliminar tareas**
- **Marcar tareas como completadas**
- **Filtrar tareas por estado: completadas, pendientes, o todas**

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas en tu máquina:

- [Node.js](https://nodejs.org/) (versión 20.12.2 o superior)
- [Angular CLI](https://angular.io/cli) (versión 17.3.8 o superior)
- [npm](https://www.npmjs.com/) (versión 10.5.0 o superior)

Puedes verificar las versiones instaladas ejecutando los siguientes comandos:

`bash
node -v
ng version
npm -v


##Instalación
 - Sigue estos pasos para instalar y configurar la aplicación en tu entorno local:

	- Clona este repositorio en tu máquina local: git clone https://github.com/tu-usuario/to-do-list-app.git.
	- Navega al directorio del proyecto: cd to-do-list-app.
	- Instala las dependencias necesarias: npm install


##Ejecución de la Aplicación
- Para ejecutar la aplicación en modo de desarrollo, sigue estos pasos:

	- Inicia el servidor de desarrollo: ng serve
	- Abre tu navegador y navega a http://localhost:4200/. La aplicación debería estar en funcionamiento.
	

##Estructura del Proyecto
 - A continuación, se describe brevemente la estructura del proyecto:

		- src/app/components/task-list/: Componente encargado de mostrar la lista de tareas.
		- src/app/components/task-form/: Componente encargado de crear y editar tareas.
		- src/app/components/task-filter/: Componente encargado de filtrar las tareas por estado.
		- src/app/services/task.service.ts: Servicio que maneja la lógica de las tareas utilizando datos simulados.
		- src/app/models/task.ts: Modelo que define la estructura de una tarea.


##Simulación de Datos
La aplicación utiliza datos simulados en lugar de una API real. Esto permite probar y desarrollar la aplicación sin necesidad de un backend.


##Personalización
 - Puedes personalizar el estilo de la aplicación modificando los archivos .css en los componentes correspondientes (task-list, task-form, task-filter). También puedes agregar nuevas funcionalidades o mejorar las existentes según sea necesario.
 
 
##Problemas Comunes
 - Si encuentras problemas al ejecutar la aplicación, asegúrate de que todas las dependencias estén correctamente instaladas y de que estás utilizando las versiones recomendadas de Node.js, Angular CLI, y npm.

##Errores Comunes
 - Error ngModel no reconocido: Asegúrate de que FormsModule está importado en el componente donde utilizas ngModel.
 - Error ngForOf no reconocido: Asegúrate de que CommonModule está importado en el componente donde utilizas ngFor.
 
##Contribuciones
 - Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, siéntete libre de enviar un pull request o abrir un issue.
 
##Licencia
 - Este proyecto está bajo la licencia MIT.
