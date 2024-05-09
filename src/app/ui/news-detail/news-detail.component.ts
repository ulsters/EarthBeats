import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  newsItem: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the newsId from route parameters
    const newsId = this.route.snapshot.params['newsId'];

    // Use Axios to fetch news details based on newsId
    const apiUrl = `https://localhost:44343/api/News/${newsId}`;
    
    axios.get(apiUrl)
      .then(response => {
        this.newsItem = response.data;
      })
      .catch(error => {
        console.error('Error fetching news details:', error);
      });
  }
}