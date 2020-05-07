import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../../rest/users/users.service';
import { UserDto, UserStatus } from '../../../rest/users/UsersDto';
import { AuthService } from '../../../modules/auth/auth.service';
import { CoursesListDto } from '../../../rest/courses/CoursesDtos';
import { CoursesService } from '../../../rest/courses/courses.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: UserDto[];
  isAdmin: boolean;
  formIsShown: boolean;
  coursesList: CoursesListDto;
  newUser: UserDto = {
    id: null,
    name: null,
    email: null,
    password: null,
    gitlab: null,
    status: null,
    courses: [null, null, null, null],
  };

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private coursesService: CoursesService,
    private snotifyService: SnotifyService) {
  }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.userService.getUsers().subscribe(
      usersList => {
        this.usersList = usersList;
      }
    );
    if (this.isAdmin) {
      this.coursesService.getUserCourses().subscribe(
        coursesList => this.coursesList = coursesList
      );
    }
  }

  showForm() {
    this.formIsShown = true;

  }

  hideForm() {
    this.formIsShown = false;
  }

  createUser() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.coursesList.length; i++) {
      if (this.newUser.courses[i]) {
        this.newUser.courses[i] = this.coursesList[i];
      }
    }
    console.log(this.newUser);
    this.userService.create(this.newUser).subscribe(
      next => {
        this.usersList.push(next.user);
        this.snotifyService.success('User created');

      },
      error => this.snotifyService.error(error.message)
    );
    this.formIsShown = false;
  }

  removeUser(id) {
    this.userService.delete(id).subscribe(
      next => {
        this.usersList = this.usersList.filter(user => user.id !== id);
        this.snotifyService.success(`User deleted`);
      },
      error => this.snotifyService.error('Error')
    );
  }

}
