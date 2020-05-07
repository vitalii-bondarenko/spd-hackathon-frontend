import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRouting } from './details.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailsComponent],
    imports: [
        CommonModule,
        DetailsRouting,
        FormsModule
    ]
})
export class DetailsModule { }
