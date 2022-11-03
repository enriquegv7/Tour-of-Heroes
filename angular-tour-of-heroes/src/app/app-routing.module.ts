import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './heroes/components/dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/components/hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/components/heroes/heroes.component';
import { ToDosComponent } from './tasks/components/to-dos-page/to-dos-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'todos', component: ToDosComponent},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
