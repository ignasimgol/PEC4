**1. ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo de uso de cada uno de ellos.**

**2. ¿Qué es el shadow DOM?**
El Shadow DOM es una tecnología que permite encapsular el HTML y CSS de un componente para que esté completamente aislado del resto del documento. Esto significa que los estilos y la estructura del componente no afectan ni son afectados por el documento global

**3. ¿Qué es el changeDetection?**
El Change Detection (detección de cambios) es el mecanismo que utiliza Angular para detectar y responder a los cambios en los datos del componente, actualizando la vista en consecuencia.

**4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.**
Default:

- Angular revisa todos los cambios de forma automática en cada ciclo de detección, independientemente de si los datos han cambiado o no.
- Ventaja: Es fácil de manejar, ya que Angular se encarga de detectar todos los cambios.
- Desventaja: Puede afectar el rendimiento en aplicaciones grandes o con muchas actualizaciones, ya que se realizan muchas comprobaciones.

OnPush:
- Angular solo revisa los cambios cuando detecta referencias nuevas en las propiedades @Input() o eventos del componente.
- Ventaja: Mejor rendimiento, ya que Angular solo detecta cambios si hay una nueva referencia.
- Desventaja: Requiere una gestión más cuidadosa de los datos, ya que Angular solo revisará los cambios cuando se actualicen de manera explícita.
- Uso: Utiliza OnPush cuando los datos no cambian con frecuencia o si quieres optimizar el rendimiento en componentes grandes.

**5. Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados**

- OnChanges: Se ejecuta cuando cambian las propiedades de entrada @Input(). Útil para reaccionar a estos cambios.
- OnInit: Se dispara una vez tras inicializar el componente. Ideal para configuraciones iniciales.
- AfterViewInit: Se ejecuta cuando la vista y las vistas hijas están completamente inicializadas. Útil para manipular el DOM.
- OnDestroy: Ocurre justo antes de destruir el componente. Útil para liberar recursos o cancelar suscripciones.
