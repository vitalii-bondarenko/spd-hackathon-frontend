import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LessonDto, LessonsListDto, Message, MessageList } from './LessonsDto';
import { CourseDto } from './CoursesDtos';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) {
  }

  getLessonsBySubjectId(id: number): Observable<LessonsListDto> {
    return this.http.get<LessonsListDto>(`/api/lessons/course/${id}`);
  }

  getLessonById(id: number) {
    return this.http.get<LessonDto>(`/api/lessons/${id}`);
  }

  getUserCourses() {
    return this.http.get<CourseDto[]>('/api/courses/all');
  }

  addLesson(newLesson: LessonDto) {
    return this.http.post<{ lesson: LessonDto }>('/api/lessons/add', newLesson);
  }

  addComment(message: string, lessonId: number) {
    return this.http.post<{data: Message}>('/api/lessons/messages/add', {lessonId, message});
  }

  addCourse(course: CourseDto) {
    return this.http.post<{ course: CourseDto }>('/api/courses/add', course);
  }

  getMessagesListByLessonId(id: number) {
    return this.http.get<{messages: MessageList}>(`/api/lessons/getMessages/${id}`);
  }
}
