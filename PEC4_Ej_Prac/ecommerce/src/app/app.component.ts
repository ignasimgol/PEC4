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
    name: 'Sample Article',
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d567e772955689.5bf95a82d957d.png',
    price: 29.99,
    isOnSale: true,
    quantityInCart: 2
    };
}
