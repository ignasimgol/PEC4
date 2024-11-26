import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../models/article.model';
import { ArticleQuantityChange } from '../models/article-quantity-change.model'; // Importar la interfaz

@Component({
  standalone: true,
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  imports: [CommonModule]
})
export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>(); // Definir el evento de salida

  // Incrementa la cantidad en el carrito
  incrementQuantity() {
    if (this.article.isOnSale) {
      this.article.quantityInCart++;
      // Emitir el cambio
      this.emitQuantityChange();
    }
  }

  // Decrementa la cantidad en el carrito, pero no baja de 0
  decrementQuantity() {
    if (this.article.isOnSale && this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
      // Emitir el cambio
      this.emitQuantityChange();
    }
  }

  // Emitir el evento con la cantidad actual
  private emitQuantityChange() {
    this.quantityChange.emit({
      article: this.article,
      quantity: this.article.quantityInCart
    });
  }
}

