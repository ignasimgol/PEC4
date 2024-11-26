import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleItemComponent } from './article-item/article-item.component';
import { Article } from './models/article.model';
import { ArticleListComponent } from './article-list/article-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, ArticleItemComponent, ArticleListComponent], // Make sure ArticleItemComponent is imported
})

export class AppComponent {
  title = 'ecommerce';

}
