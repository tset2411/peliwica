import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmationComponent } from '../../views/user-dashboard/confirmation/confirmation.component';
import { CONFIRMATION_COMPONENT_ROUTES } from '../subroutes/confirmation.routes';

/* Plugins */
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CONFIRMATION_COMPONENT_ROUTES,
    AccordionModule.forRoot(),
  ],
  declarations: [ConfirmationComponent],
})
export class ConfirmationModule {}
