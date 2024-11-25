**¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce?**

"ng new ecommerce"

**Explica brevemente la estructura y ficheros que ha generado Angular CLI**

- src/: Carpeta principal que contiene el código fuente de la aplicación Angular.

- app/: Carpeta de la aplicación que contiene componentes, módulos, servicios, y otras piezas clave.
- app.component.ts: Componente raíz que contiene la lógica principal de la aplicación.
- app.component.html: Plantilla HTML del componente raíz.
- app.component.css: Estilos específicos del componente raíz.
- app.module.ts: Módulo raíz que organiza los componentes y módulos necesarios para la aplicación.
- assets/: Carpeta para recursos estáticos como imágenes y archivos multimedia.
- environments/: Archivos para configurar diferentes entornos, como desarrollo y producción.
- index.html: Archivo HTML que actúa como la entrada de la aplicación Angular.
- main.ts: Archivo principal que arranca la aplicación cargando el módulo raíz (AppModule).
- styles.css: Archivo de estilos CSS globales que se aplican a toda la aplicación.
- polyfills.ts: Archivo para características que permiten compatibilidad con navegadores más antiguos.
- angular.json: Archivo de configuración que define cómo se debe construir, servir y probar la aplicación Angular.

- package.json: Contiene información sobre el proyecto, scripts, y dependencias que se instalaron con npm.


**Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:**

- **app.module.ts - @NgModule (declarations, imports,providers, bootstrap).**

    @NgModule: Organiza y configura los módulos de la aplicación.

    - declarations: Define los componentes, directivas y pipes que pertenecen al módulo.
    - imports: Lista de otros módulos que se necesitan en este módulo.
    - providers: Servicios que se comparten en toda la aplicación.
    - bootstrap: Componente raíz para arrancar la aplicación.

- **app.component.ts - @Component (selector, templateUrl, styleUrls).**

    @Component: Define la estructura y el comportamiento de un componente.

    - selector: Nombre que identifica al componente en las plantillas HTML.
    - templateUrl: Ruta al archivo HTML que contiene la plantilla del componente.
    - styleUrls: Lista de archivos CSS específicos para los estilos del componente.

**¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?**

Usar templates y estilos en línea es perfectamente válido en Angular, pero no es una práctica recomendada para componentes complejos o en aplicaciones a gran escala. 

La mejor práctica es mantener la plantilla y los estilos en archivos separados (templateUrl y styleUrls) para fomentar la legibilidad, el mantenimiento y la escalabilidad del proyecto. Sin embargo, para componentes pequeños o simples, o durante la fase de prototipado, los templates y estilos en línea pueden ser útiles ya que es más rápido y se deben crear menos archivos