import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../models/article.model';

@Component({
  standalone: true,
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  imports: [CommonModule], // Add CommonModule here
})

export class ArticleItemComponent {
  @Input() article!: Article;

  // Incrementa la cantidad en el carrito
  incrementQuantity() {
    if (this.article.isOnSale) {
      this.article.quantityInCart++;
    }
  }

  // Decrementa la cantidad en el carrito, pero no baja de 0
  decrementQuantity() {
    if (this.article.isOnSale && this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
