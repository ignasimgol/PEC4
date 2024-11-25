**1. Variables locales de NgFor:**

- index: El índice del elemento actual en la iteración.
- even: true si el índice es par.
- odd: true si el índice es impar.
- first: true si es el primer elemento de la lista.
- last: true si es el último elemento de la lista.
- Opción trackBy en NgFor: Mejora el rendimiento al permitir que Angular rastree elementos por una clave única (como un id), evitando la re-renderización innecesaria.

**2.Opción trackBy en NgFor:**
Mejora el rendimiento al permitir que Angular rastree elementos por una clave única (como un id), evitando la re-renderización innecesaria.

**3. ¿Es posible ejecutar dos directivas estructurales simultáneamente?**
No, no es posible en el mismo elemento. Si necesitas combinarlas, se usa un <ng-container>.

Angular no permite tener múltiples directivas estructurales (como *ngIf, *ngFor, etc.) aplicadas a un mismo elemento debido a que ambas intentan modificar la estructura del DOM de manera incompatible.