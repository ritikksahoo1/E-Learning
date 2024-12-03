import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-course-feedback',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './course-feedback.component.html',
  styleUrls: ['./course-feedback.component.css']
})
export class CourseFeedbackComponent {
  feedback = {
    courseName: '',
    rating: 0,
    comments: ''
  };

  feedbackSubmitted = false;
  submitFeedback() {
    if (this.feedback.rating && this.feedback.comments) {
      console.log('Feedback submitted:', this.feedback);
      this.feedbackSubmitted = true;
    } else {
      alert('Please fill in all fields.');
    }
  }
}
