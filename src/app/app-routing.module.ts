import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'frontEnd', component: FrontendComponent },
  // { path: 'backEnd', component: BackendComponent },
  // { path: 'testing', component: TestingComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
