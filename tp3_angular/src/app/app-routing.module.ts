import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VoyageDetailsComponent } from './components/voyage-details/voyage-details.component';
import { VoyageGeneratorComponent } from './components/voyage-generator/voyage-generator.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'voyage/:id', component: VoyageDetailsComponent },
  { path: 'generate', component: VoyageGeneratorComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}