import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page.component';
import { CoursePageRouting } from './course-page.routing';
import { FormsModule } from '@angular/forms';
import {CustomFormsModule} from "ng2-validation";

@NgModule({
  declarations: [CoursePageComponent],
    imports: [
        CommonModule,
        CoursePageRouting,
        FormsModule,
        CustomFormsModule
    ]
})
export class CoursePageModule { }
