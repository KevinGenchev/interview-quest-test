import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { ExamRoutingModule } from './exam-routing';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExamRoutingModule,
    FormsModule,
    CarouselModule,
  ],
  declarations: [ExamPageComponent],
})
export class ExamModule {}
