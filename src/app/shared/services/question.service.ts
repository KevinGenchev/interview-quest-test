import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Question } from '../models/question.interface';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  getAllQuestions() {
    return this.db.collection<Question>('questions').valueChanges();
  }

  getCategoryAndDifficulty(currentCategory: string, currentDifficulty: string) {
    return this.db
      .collection<Question>('questions', (ref) =>
        ref
          .where('category', '==', currentCategory)
          .where('difficulty', '==', currentDifficulty)
      )
      .valueChanges();
  }

  getCategory(currentCategory: string) {
    return this.db
      .collection<Question>('questions', (ref) =>
        ref.where('category', '==', currentCategory)
      )
      .valueChanges();
  }

  getDifficulty(currentDifficulty: string) {
    return this.db
      .collection<Question>('questions', (ref) =>
        ref.where('difficulty', '==', currentDifficulty)
      )
      .valueChanges();
  }

  getCurrentCategoryAndDifficulty(
    currentCategory: string,
    currentDifficulty: string
  ) {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (
          user &&
          currentCategory !== 'Show all Categories' &&
          currentDifficulty != 'Show all Difficulties'
        ) {
          return this.getCategoryAndDifficulty(
            currentCategory,
            currentDifficulty
          );
        } else if (
          user &&
          currentCategory != 'Show all Categories' &&
          currentDifficulty == 'Show all Difficulties'
        ) {
          return this.getCategory(currentCategory);
        } else if (
          user &&
          currentCategory == 'Show all Categories' &&
          currentDifficulty != 'Show all Difficulties'
        ) {
          return this.getDifficulty(currentDifficulty);
        } else {
          return this.getAllQuestions();
        }
      })
    );
  }
}
