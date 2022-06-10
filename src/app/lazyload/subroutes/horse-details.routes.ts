import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTS_CONSTANTS } from '../../constants/constants';
import { HorseDetailsComponent } from '../../views/user-dashboard/horse-details/horse-details.component';

const routes: Routes = [{ path: '', component: HorseDetailsComponent }];

export const HORSE_DETAILS_COMPONENT_ROUTES: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
