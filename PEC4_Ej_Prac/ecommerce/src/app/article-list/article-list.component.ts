import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { Article } from '../models/article.model';

@Component({
  standalone: true,
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  imports: [CommonModule, ArticleItemComponent] // Importa ArticleItemComponent aquí
})
export class ArticleListComponent {
  // Lista de artículos inicial
  articles: Article[] = [
    { name: 'Game Boy Color', price: 100, isOnSale: true, quantityInCart: 0, imageUrl:'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d567e772955689.5bf95a82d957d.png'  },
    { name: 'Nintendo Switch', price: 115, isOnSale: true, quantityInCart: 0, imageUrl:'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/ncom/en_US/switch/site-design-update/photo01'  },
    { name: 'Play Station', price: 90, isOnSale: false, quantityInCart: 0, imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAPmn_ZIMIb-kOliv0PrxKq38zMBGb1w0eQ&s' }
  ];
}
