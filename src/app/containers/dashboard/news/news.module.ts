import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRouting } from './news.routing';
import { FormsModule } from '@angular/forms';
import {CustomFormsModule} from "ng2-validation";

@NgModule({
  declarations: [NewsComponent],
    imports: [
        CommonModule,
        NewsRouting,
        FormsModule,
        CustomFormsModule
    ]
})
export class NewsModule { }
