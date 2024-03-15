import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../modules/home/services/news.service';
import { FirebaseConnectionService } from '../../services/firebase-connection';
import { ICategory } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss'],
})
export class HeadlinesComponent implements OnInit {
  headlines: string[] = [];
  selectedCategory: string = '';
  listCategories: ICategory[] = [];

  constructor(
    private newsService: NewsService,
    private firebaseService: FirebaseConnectionService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.firebaseService.getCategories().subscribe((result) => {
      this.listCategories = result;
    });
  }

  loadHeadlines(): void {
    if (this.selectedCategory) {
      this.newsService.getHeadlinesByCategory(this.selectedCategory).subscribe(
        (data: any) => {
          this.headlines = data.data.children.map(
            (child: any) => child.data.title
          );
        },
        (error: any) => {
          console.error('Error fetching headlines:', error);
        }
      );
    }
  }
}
