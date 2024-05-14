import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import axios from 'axios';


@Component({
  selector: 'app-modify-news',
  templateUrl: './modify-news.component.html',
  styleUrls: ['./modify-news.component.css']
})
export class ModifyNewsComponent implements OnInit {
  newsId!: number;
  newsForm!: FormGroup;
  updateSuccess = false;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.newsForm = this.formBuilder.group({
      newsId: [''],
      countryId: [''],
      newsTitle: [''],
      newsContent: [''],
      newsPopularityType: [''],
      newsPublishDate: [''].toString(),
      newsImageUrl: [''].toString()
    });

    this.route.params.subscribe(params => {
      this.newsId = +params['id'];
      this.fetchNewsDetails();
    });
  }

  fetchNewsDetails() {
    axios.get<any>('https://localhost:44343/api/News/' + this.newsId)
      .then(response => {
        const responseData = response.data;
        const publishDate = new Date(responseData.newsPublishDate);
        const formattedDate = publishDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        this.newsForm.patchValue({
          newsId: responseData.newsId,
          countryId: responseData.countryId,
          newsTitle: responseData.newsTitle,
          newsContent: responseData.newsContent,
          newsPopularityType: responseData.newsPopularityType || '',
          newsPublishDate: formattedDate || '',
          newsImageUrl: responseData.newsImageUrl || 'null'
        });
      })
      .catch(error => {
        console.error('Error fetching news details:', error);
      });
  }

  updateNews() {
    const updatedNewsData = this.newsForm.value;
    const newsId = this.newsId;
  
    axios.put<any>('https://localhost:44343/api/News/' + newsId, updatedNewsData)
      .then(response => {
        console.log('News updated successfully:', response);
        this.updateSuccess = true;
      })
      .catch(error => {
        console.error('Error updating news:', error);
        this.updateSuccess = false;
      });
  }

}