import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './aut.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    RouterModule.forChild([{ path: 'auth', component: AuthComponent }]),
    SharedModule,
  ],
})
export class AuthModule {}
