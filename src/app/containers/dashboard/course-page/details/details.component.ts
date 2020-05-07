import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CoursesService } from '../../../../rest/courses/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../../../../rest/courses/LessonsDto';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  lesson;
  messages: Message[];
  comment: Message = {
    userFullName: null,
    text: null,
  };

  constructor(
    public sanitizer: DomSanitizer,
    private coursesService: CoursesService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.coursesService.getLessonById(this.route.snapshot.params.id).subscribe(
      lesson => {
        console.log(lesson);
        this.lesson = lesson;
        this.coursesService.getMessagesListByLessonId(lesson.id).subscribe(
          next => this.messages = next.messages
        );
      }
    );
  }

  sendComment() {
    this.coursesService.addComment(this.comment.text, this.lesson.id).subscribe(
      next => {
        console.log(next.data);
        this.messages.push(next.data);
      },
      error => alert('error')
    );
  }

}
