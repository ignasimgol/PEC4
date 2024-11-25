## Comandos de Angular CLI

### `ng new`
Crea un nuevo proyecto de Angular con la configuración predeterminada. Este comando genera la estructura inicial del proyecto, incluyendo archivos básicos, carpetas, y configuraciones iniciales.

### `ng generate`
Genera nuevos artefactos para la aplicación, como componentes, directivas, servicios, etc. Es una forma rápida de crear archivos estructurados siguiendo las mejores prácticas de Angular.

#### Subcomandos de `ng generate`

- **`component`**  
  Crea un nuevo componente Angular, generando archivos como el HTML, CSS, TypeScript, y pruebas (`spec`) necesarias.  
  **Ejemplo:** `ng generate component my-component`

- **`directive`**  
  Crea una nueva directiva, que se utiliza para modificar el comportamiento del DOM o aplicar lógica personalizada.  
  **Ejemplo:** `ng generate directive my-directive`

- **`enum`**  
  Genera un nuevo `enum` TypeScript, que es un tipo especial usado para definir un conjunto de valores constantes.  
  **Ejemplo:** `ng generate enum my-enum`

- **`guard`**  
  Crea un nuevo guard (guardián), utilizado para controlar la navegación a rutas específicas en la aplicación según condiciones definidas.  
  **Ejemplo:** `ng generate guard my-guard`

- **`interface`**  
  Genera una nueva `interface` TypeScript, útil para definir la estructura de objetos en el código de la aplicación.  
  **Ejemplo:** `ng generate interface my-interface`

- **`pipe`**  
  Crea un nuevo pipe, que es una función personalizada para transformar datos en la vista (plantillas).  
  **Ejemplo:** `ng generate pipe my-pipe`

- **`service`**  
  Crea un nuevo servicio, que es una clase utilizada para compartir datos o lógica entre diferentes partes de la aplicación.  
  **Ejemplo:** `ng generate service my-service`

### `ng serve`
Inicia un servidor de desarrollo para la aplicación Angular. El servidor observa los cambios en los archivos y recarga la aplicación automáticamente. El servidor se inicia, por defecto, en `http://localhost:4200`.

### `ng test`
Ejecuta las pruebas unitarias configuradas en la aplicación usando el framework de pruebas que hayas configurado (como Jasmine y Karma). Muestra los resultados de las pruebas en la terminal.

### `ng version`
Muestra la versión de Angular CLI, así como las versiones de Angular, Node.js y otros paquetes importantes que están en uso en el proyecto.



