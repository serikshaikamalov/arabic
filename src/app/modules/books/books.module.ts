import { NgModule } from '@angular/core';

// External Modules
import { BooksRoutingModule } from './books-routing.module';

// Pages
import { BooksIndexPageComponent } from './pages/books-index-page/books-index-page.component';


@NgModule({
  imports: [
    BooksRoutingModule
  ],
  declarations: [
    BooksIndexPageComponent
  ],
  providers: []
})
export class BooksModule { }
