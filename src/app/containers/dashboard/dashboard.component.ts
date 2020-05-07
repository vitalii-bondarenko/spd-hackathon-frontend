import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../rest/courses/courses.service';
import { CoursesListDto } from '../../rest/courses/CoursesDtos';
import { AuthService } from '../../modules/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  opened = false;

  userSubjectsList: CoursesListDto;
  isAdmin: boolean;

  constructor(
    private coursesService: CoursesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.coursesService.getUserCourses().subscribe(
      userSubjectsList => {
        this.userSubjectsList = userSubjectsList;
      }
    );
    this.isAdmin = this.authService.isAdmin();
    console.log(this.isAdmin);
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }
}
