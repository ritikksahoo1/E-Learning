import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  courseTitle: string | null = '';
  questions: { question: string; options: string[]; correct: string }[] = [];

  // Define the type for allQuestions to specify possible course names
  allQuestions: {
    'Web Development': { question: string; options: string[]; correct: string }[];
    'Mobile App Development': { question: string; options: string[]; correct: string }[];
  } = {
    'Web Development': [
      {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyper Tabular Markup Language'],
        correct: 'Hyper Text Markup Language'
      },
      {
        question: 'Which language is used for styling web pages?',
        options: ['HTML', 'JQuery', 'CSS'],
        correct: 'CSS'
      }
    ],
    'Mobile App Development': [
      {
        question: 'Which programming language is used for Android app development?',
        options: ['Java', 'Python', 'Ruby'],
        correct: 'Java'
      },
      {
        question: 'Which IDE is used for iOS app development?',
        options: ['Xcode', 'Android Studio', 'IntelliJ IDEA'],
        correct: 'Xcode'
      }
    ]
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the courseTitle from the route parameter
    this.courseTitle = this.route.snapshot.paramMap.get('courseTitle');
    
    // Use type assertion to inform TypeScript that `courseTitle` is a valid key of `allQuestions`
    if (this.courseTitle && this.allQuestions[this.courseTitle as keyof typeof this.allQuestions]) {
      this.questions = this.allQuestions[this.courseTitle as keyof typeof this.allQuestions];
    } else {
      // Handle case when courseTitle is not valid
      console.error('Course not found');
    }
  }
}
