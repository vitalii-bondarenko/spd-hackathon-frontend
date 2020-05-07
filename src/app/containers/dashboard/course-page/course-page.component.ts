import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../rest/courses/courses.service';
import { ActivatedRoute } from '@angular/router';
import { CoursesListDto } from '../../../rest/courses/CoursesDtos';
import { SnotifyService } from 'ng-snotify';
import { LessonDto, LessonsListDto } from '../../../rest/courses/LessonsDto';
import { AuthService } from '../../../modules/auth/auth.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  lessons: LessonsListDto;
  formIsShown: boolean;
  isAdmin: boolean;
  subjectId: string;
  newLesson: LessonDto = {
    id: null,
    subjectId: null,
    lessonNumber: null,
    title: null,
    description: null,
    lectorName: null,
    lectorPosition: null,
    deadline: null,
    presentation_ulr: null,
    videoUrl: null,
    homework: null,
    additional: null
  };

  constructor(
    private authService: AuthService,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private snotifyService: SnotifyService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.subjectId = params.id;
      this.isAdmin = this.authService.isAdmin();
      this.coursesService.getLessonsBySubjectId(params.id).subscribe(lessons => {
          this.lessons = lessons;
          console.log(lessons);
        },
        error => {
          console.log(error);
        });
    });
  }

  showForm() {
    this.formIsShown = true;

  }

  hideForm() {
    this.formIsShown = false;
  }

  addLesson() {
    this.newLesson.subjectId = this.subjectId;
    this.coursesService.addLesson(this.newLesson).subscribe(
      next => {
        this.snotifyService.success('Lesson added');
        this.lessons.push(next.lesson);
      },
      error => {
        this.snotifyService.error(error.message);
      }
    );

  }
}
