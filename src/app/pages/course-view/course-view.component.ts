// course-view.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceComponent } from '../course-service/course-service.component';
import { CourseModelComponent } from '../course-model/course-model.component';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css'],
})
export class CourseViewComponent implements OnInit {
  course: CourseModelComponent | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseServiceComponent
  ) {}

  ngOnInit(): void {
    // Fetch course ID from the route params
    const courseId = this.route.snapshot.paramMap.get('id')!;
    this.courseService.getCourseById(courseId).subscribe((CourseModelComponent) => {
      this.course = course;
    });
  }
}
