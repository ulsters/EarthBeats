import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import axios from 'axios';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private router: Router) { }

  newsData: any[] = [];

  ngOnInit(): void {
    this.fetchNewsData();
  }

  fetchNewsData() {
    axios.get<any[]>('https://localhost:44343/api/News')
      .then(response => {
        this.newsData = response.data;
        this.initializeDataTable();
      })
      .catch(error => {
        console.error('Error fetching news data:', error);
      });
  }

  initializeDataTable() {
    const table = $('#myDataTable').DataTable({
      "searching": true,
      "dom": '<"top"f>rt<"bottom"lp><"clear">',
      "lengthMenu": [10, 25, 50, 100, 150, 200, 250],
      "pageLength": 10,
      "data": this.newsData,
      "columns": [
        { "data": "newsId" },
        { "data": "newsTitle" },
        { "data": "newsContent" },
        { "data": "newsPopularityType" },
        { 
          "data": "newsImageUrl",
          "render": function(data) {
            return '<img src="' + data + '" alt="News Image" class="img-fluid" style="max-width: 100px;">';
          }
        },
        { 
          "data": "newsId",
          "render": function(data) {
            return '<div><button class="btn btn-primary detail-btn" data-news-id="' + data + '">Detail</button>' +
                   '<button class="btn mt-2 btn-danger delete-btn" data-news-id="' + data + '">Delete</button></div>' ;
          }
        }
      ]
    });

    // Event listener delete buttons 
    $('#myDataTable').on('click', '.delete-btn', (event) => {
      const newsId = $(event.currentTarget).data('news-id');
      this.deleteNews(newsId);
    });

    // Event listener for detail buttons 
    $('#myDataTable').on('click', '.detail-btn', (event) => {
      const newsId = $(event.currentTarget).data('news-id');
      this.navigateToModifyNews(newsId);
    });
  }

  deleteNews(newsId: number) {
    axios.delete('https://localhost:44343/api/News/' + newsId)
      .then(response => {
        $('#myDataTable').DataTable().destroy();
        this.fetchNewsData();
      })
      .catch(error => {
        console.error('Error deleting news:', error);
      });
  }

  navigateToModifyNews(newsId: number) {
    this.router.navigate(['/modify-news', newsId]);
  }
}