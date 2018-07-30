import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmitComponent } from '../app/emit/emit.component';
import { MenuComponent } from '../app/menu/menu.component';
import { ViewComponent } from '../app/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent ,
     
  },
  {
    path: 'emit',
    component: EmitComponent
    
  } ,
  {
    path: 'view',
    component: ViewComponent
    
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
