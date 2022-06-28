import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { CuriosidadeComponent } from './components/pages/curiosidades/curiosidade.component';

const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'curiosidades', component: CuriosidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
