import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { BooksIndexPageComponent } from './pages/books-index-page/books-index-page.component';

const routes: Routes = [
  {
    path: '',
    component: BooksIndexPageComponent
  }  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }


