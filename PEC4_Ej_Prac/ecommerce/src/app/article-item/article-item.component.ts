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

  // Inicializa la cantidad en 0
  quantityInCart: number = 0;

  // Método para incrementar la cantidad
  incrementQuantity() {
    this.quantityInCart++;
  }

  // Método para decrementar la cantidad, asegurándose de no bajar de 0
  decrementQuantity() {
    if (this.quantityInCart > 0) {
      this.quantityInCart--;
    }
  }
}
