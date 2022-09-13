import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RandomComponent } from './components/random/random.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CardComponent } from './components/card/card.component';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';
import { ToastNotificationService } from './services/toast-notification.service';
import { ToastModule } from 'primeng/toast';
import { AuthService } from './services/auth.service';
import { QuestionService } from './services/question.service';

@NgModule({
  declarations: [
    RandomComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    TooltipModule,
    ToastModule,
  ],
  providers: [AuthService, ToastNotificationService, QuestionService],
  exports: [
    ButtonModule,
    RandomComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    TooltipModule,
  ],
})
export class SharedModule {}
