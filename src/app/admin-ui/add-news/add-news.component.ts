import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  updateSuccess: boolean = false;
  newsForm!: FormGroup;
  countries: any[] = [];
  selectedCountryId: number | null = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.fetchCountries();
    
    this.newsForm = this.formBuilder.group({
      countryId: ['', Validators.required],
      newsTitle: ['', Validators.required],
      newsContent: ['', Validators.required],
      newsPopularityType: ['', Validators.required],
      newsPublishDate: ['', Validators.required],
      newsImageUrl: ['', Validators.required]
    });
  }

  addNews() {
  
    const newsData = this.newsForm.value;
    const selectedCountry = this.countries.find(country => country.countryId === newsData.countryId);

    if (selectedCountry) {
      newsData.countryId = selectedCountry.countryId;
      newsData.countryName = selectedCountry.countryName;
  }
  

    axios.post<any>('https://localhost:44343/api/News/', newsData)
      .then(response => {
        
        const responseData = response.data;
        const publishDate = new Date(responseData.newsPublishDate);
        const formattedDate = publishDate.toISOString().split('T')[0]; // Formatting date YYYY-MM-DD
        this.newsForm.patchValue({
          countryId: responseData.countryId,
          newsTitle: responseData.newsTitle,
          newsContent: responseData.newsContent,
          newsPopularityType: responseData.newsPopularityType || '',
          newsPublishDate: formattedDate || '',
          newsImageUrl: responseData.newsImageUrl || 'null'
        });
      })
      .catch(error => {
        console.error('Error adding news:', error);
      });
  }


  fetchCountries() {
    axios.get<any>('https://localhost:44343/api/Countries')
      .then(response => {
        this.countries = response.data;
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }

}
