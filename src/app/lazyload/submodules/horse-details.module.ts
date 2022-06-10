import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HorseDetailsComponent } from '../../views/user-dashboard/horse-details/horse-details.component';
import { HORSE_DETAILS_COMPONENT_ROUTES } from '../subroutes/horse-details.routes';

/* Plugins */
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HORSE_DETAILS_COMPONENT_ROUTES,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  declarations: [HorseDetailsComponent],
  providers: [],
})
export class HorseDetailsModule {}
