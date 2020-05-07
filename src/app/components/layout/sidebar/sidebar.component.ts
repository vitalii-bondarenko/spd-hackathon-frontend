import { Component, Input } from '@angular/core';
import { CourseDto, CoursesListDto } from '../../../rest/courses/CoursesDtos';
import { CoursesService } from '../../../rest/courses/courses.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() opened = false;

  newCourse: CourseDto = {
    id: null,
    name: null
  };
  formIsShown: boolean;

  @Input() userSubjectsList: CoursesListDto;
  @Input() isAdmin: boolean;

  constructor(private coursesService: CoursesService,
              private snotifyService: SnotifyService) {
  }

  addNewCourse() {
    this.coursesService.addCourse(this.newCourse).subscribe(
      next => {
        this.userSubjectsList.push(next.course);
        this.snotifyService.success('Course added.');
      },
      error => this.snotifyService.error('Error')
    );
  }

  showForm() {
    this.formIsShown = true;

  }

  hideForm() {
    this.formIsShown = false;
  }


}
