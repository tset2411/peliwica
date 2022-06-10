import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VerifyComponent } from '../../views/user-dashboard/verify/verify.component';
import { VERIFY_COMPONENT_ROUTES } from '../subroutes/verify.routes';

/* Plugins */
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VERIFY_COMPONENT_ROUTES,
    AccordionModule.forRoot(),
  ],
  declarations: [VerifyComponent],
})
export class VerifyModule {}
