import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PolicyHolderComponent } from '../../views/user-dashboard/policy-holder/policy-holder.component';
import { POLICY_HOLDER_COMPONENT_ROUTES } from '../subroutes/policy-holder.routes';

/* Plugins */
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedService } from '../../services/shared.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    POLICY_HOLDER_COMPONENT_ROUTES,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  declarations: [PolicyHolderComponent],
  providers: [SharedService],
})
export class PolicyHolderModule {}
