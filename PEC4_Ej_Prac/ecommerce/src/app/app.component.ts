import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleItemComponent } from './article-item/article-item.component';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, ArticleItemComponent], // Make sure ArticleItemComponent is imported
})

export class AppComponent {
  title = 'ecommerce';

  article: Article = {
    name: 'Game Boy Color',
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d567e772955689.5bf95a82d957d.png',
    price: 29.99,
    isOnSale: true,
    quantityInCart: 2
  };

  article2: Article = {
    name: 'Nintendo Switch',
    imageUrl: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/ncom/en_US/switch/site-design-update/photo01',
    price: 299.99,
    isOnSale: false,
    quantityInCart: 0
  };

}
