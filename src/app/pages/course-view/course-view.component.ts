import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
  courseIndex: number | null = null;
  course: any = null;

  courses = [
    {
      title: 'Web Development',
      image: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
      startDate: '2024-01-10',
      endDate: '2024-04-20',
      availability: 'Available',
      duration: '3 months',
      author: 'John Doe',
      description: 'Learn how to build websites and web applications using HTML, CSS, and JavaScript.',
      topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Node.js'],
      schedule: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    },
    {
      title: 'Data Science',
      image: 'https://example.com/data-science.jpg',
      startDate: '2024-02-01',
      endDate: '2024-05-01',
      availability: 'Available',
      duration: '4 months',
      author: 'Jane Smith',
      description: 'Learn the fundamentals of data science, including data analysis and machine learning.',
      topics: ['Python', 'Pandas', 'Machine Learning', 'Data Visualization'],
      schedule: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the index from the route parameters
    const index = this.route.snapshot.paramMap.get('index');
    this.courseIndex = index !== null ? parseInt(index, 10) : null;

    // Fetch the course based on index
    if (this.courseIndex !== null && this.courseIndex >= 0 && this.courseIndex < this.courses.length) {
      this.course = this.courses[this.courseIndex];
      console.log('Selected Course:', this.course);
    } else {
      console.error('Invalid course index.');
    }
  }
}
