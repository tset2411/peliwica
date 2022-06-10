import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StatementOfFactComponent } from '../../views/user-dashboard/statement-of-fact/statement-of-fact.component';
import { STATEMENT_OF_FACT_COMPONENT_ROUTES } from '../subroutes/statement-of-fact.routes';

/* Plugins */
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    STATEMENT_OF_FACT_COMPONENT_ROUTES,
    AccordionModule.forRoot(),
  ],
  declarations: [StatementOfFactComponent],
})
export class StatementOfFactModule {}
