import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page.component';
import { CoursePageRouting } from './course-page.routing';


@NgModule({
  declarations: [CoursePageComponent],
  imports: [
    CommonModule,
    CoursePageRouting
  ]
})
export class CoursePageModule { }
