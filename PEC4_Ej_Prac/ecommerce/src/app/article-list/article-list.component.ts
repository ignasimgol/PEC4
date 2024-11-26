import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { ArticleItemComponent } from '../article-item/article-item.component';
import { Article } from '../models/article.model'; // Importar el modelo Article

@Component({
  standalone: true,
  selector: 'app-article-list',
  template: `
    <!-- Template en línea -->
    <div>
      <h2>Lista de Artículos (ej 7)</h2>
      <div class="article-list">
        <div *ngFor="let article of articles">
          <app-article-item [article]="article"></app-article-item>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Estilos en línea */
    h2 {
      color: #333;
    }
    div {
      margin: 10px;
    }
    .article-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  `],
  imports: [CommonModule, ArticleItemComponent] // Asegúrate de incluir CommonModule aquí
})
export class ArticleListComponent {
  // Asegúrate de que los artículos coincidan con el tipo 'Article'
  articles: Article[] = [
    { id: 1, name: 'Game Boy', imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d567e772955689.5bf95a82d957d.png', price: 100.99, isOnSale: true, quantityInCart: 0 },
    { id: 2, name: 'Switch', imageUrl: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/ncom/en_US/switch/site-design-update/photo01', price: 150.49, isOnSale: true, quantityInCart: 0 },
    { id: 3, name: 'Play Station', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NES-Console-Set.png/800px-NES-Console-Set.png', price: 89.99, isOnSale: false, quantityInCart: 0 }
  ];

   // Lógica para incrementar la cantidad
   incrementQuantity(id: number): void {
    const article = this.articles.find(a => a.id === id);
    if (article && article.isOnSale) {
      article.quantityInCart++;
    }
  }

  // Lógica para decrementar la cantidad
  decrementQuantity(id: number): void {
    const article = this.articles.find(a => a.id === id);
    if (article && article.isOnSale && article.quantityInCart > 0) {
      article.quantityInCart--;
    }
  }
}

