import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent implements OnInit {
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
  
  course_info: any;

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    // Ensure the page loads at the top by resetting the scroll position
    window.scrollTo(0, 0);

    // Subscribe to course information
    this.service.course$.subscribe(course_info => {
      this.course_info = course_info;
      console.log(course_info);
    });
  }

  extractVideoId(url: string): string {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }

  progress: number[] = [0, 0, 0, 0, 0]; // Starting progress
  progressColors: string[] = ['#ff0000', '#ff6600', '#ffcc00', '#00cc44', '#4caf50']; // Colors for 0-100% (red to green)

  updateProgress(videoIndex: number): void {
    let currentProgress = this.progress[videoIndex];
    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 10; // Increment in steps of 10%
        this.progress[videoIndex] = currentProgress;
        if (currentProgress < 25) {
          this.progressColors[videoIndex] = '#ff0000'; // Red for 0-25%
        } else if (currentProgress < 50) {
          this.progressColors[videoIndex] = '#ff6600'; // Orange for 25-50%
        } else if (currentProgress < 75) {
          this.progressColors[videoIndex] = '#ffcc00'; // Yellow for 50-75%
        } else {
          this.progressColors[videoIndex] = '#4caf50'; // Green for 75-100%
        }
      } else {
        clearInterval(interval); // Stop once progress reaches 100%
      }
    }, 200); // Update every 200ms for smooth animation
  }

  selectRating(rating: number): void {
    this.selectedRating = rating;
    this.isFeedbackVisible = true;
  }

  closeOverlay(): void {
    this.isFeedbackVisible = false;
  }

  toggleOption(option: string): void {
    const index = this.selectedOptions.indexOf(option);
    if (index === -1) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.splice(index, 1);
    }
  }
}
