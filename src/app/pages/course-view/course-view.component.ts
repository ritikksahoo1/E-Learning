import { Component } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedRating: number = 0;
  isFeedbackVisible: boolean = false;
  feedbackOptions: string[] = [
    'Curriculum',
    'Skill & Tools',
    'Instructor',
    'Topic Depth',
    'Quizzes & Assignments',
    'Easy to Follow'
  ];
  selectedOptions: string[] = [];

  // Function to select rating and show overlay
  selectRating(rating: number): void {
    this.selectedRating = rating;
    this.isFeedbackVisible = true;
  }

  // Function to close feedback overlay
  closeOverlay(): void {
    this.isFeedbackVisible = false;
  }

  // Function to toggle feedback options
  toggleOption(option: string): void {
    const index = this.selectedOptions.indexOf(option);
    if (index === -1) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.splice(index, 1);
    }
  }
  
  course_info: any;
  constructor(private service: ApiService){

    this.service.course$.subscribe(course_info=>{
      this.course_info = course_info;
      console.log(course_info);
    })
    
  }
}
