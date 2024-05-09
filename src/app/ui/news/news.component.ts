import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

interface NewsItem {
  newsId: number;
  newsTitle: string;
  newsContent: string;
  newsPublishDate: string;
  newsImageUrl: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  
  constructor(private router: Router) { }

  navigateToNewsDetail(newsId: number): void {
    // Navigate to the desired news detail URL with the specified newsId
    this.router.navigate(['/news-detail', newsId]);
  }

}
