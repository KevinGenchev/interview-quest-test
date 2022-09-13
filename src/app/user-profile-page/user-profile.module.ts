import { NgModule } from '@angular/core';
import { UserProfilePageRoutingModule } from './user-profile-routing.module';
import { ImageModule } from 'primeng/image';

@NgModule({
  imports: [UserProfilePageRoutingModule, ImageModule],
})
export class UserProfileModule {}
