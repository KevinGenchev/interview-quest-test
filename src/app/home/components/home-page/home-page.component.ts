import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Card } from 'src/app/shared/models/card.interface';

@Component({
  selector: 'iq-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(public afAuth: AngularFireAuth) {}
  public cards: Card[] = [
    {
      icon: 'pi pi-check-circle text-4xl text-blue-500',
      title: 'Start interview',
      description: 'Choose from our categories',
      router: '/exam',
    },
    {
      icon: 'pi pi-user text-4xl text-blue-500',
      title: 'Go to Profile',
      description: 'Go to your Profile',
      router: '/user-profile',
    },
  ];
}
