import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil, tap } from 'rxjs';
import {
  Categories,
  Difficulty,
  Question,
} from 'src/app/shared/models/question.interface';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'iq-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.scss'],
})
export class ExamPageComponent implements OnInit, OnDestroy {
  public questions!: Question[];
  private sub!: Subscription;

  public showText: boolean = false;
  private destroy = new Subject();

  public selectedDifficulty!: string;
  public selectedCategory!: string;

  public difficulties = Difficulty;
  public categories = Categories;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.selectedDifficulty = Difficulty.SHOWALLDIFFICULTIES;
    this.selectedCategory = Categories.SHOWALLCATEGORIES;

    this.sub = this.questionService
      .getAllQuestions()
      .pipe(takeUntil(this.destroy))
      .subscribe((questions) => (this.questions = questions));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.destroy.next('');
    this.destroy.complete();
  }

  public onCategoryAndDifficultyChange(
    category: string,
    selectedDifficulty: string
  ): void {
    this.sub = this.questionService
      .getCurrentCategoryAndDifficulty(category, selectedDifficulty)
      .pipe(takeUntil(this.destroy))
      .subscribe((questions) => (this.questions = questions));
  }
}
