import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuoteComponent } from '../../views/user-dashboard/quote/quote.component';
import { QUOTES_COMPONENT_ROUTES } from '../subroutes/quote.routes';

import { OrderBy } from '../../pipes/orderbypipe';

/* Plugins */
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QUOTES_COMPONENT_ROUTES,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [QuoteComponent, OrderBy],
  providers: [],
})
export class QuoteModule {}
