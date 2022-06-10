import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTS_CONSTANTS } from '../../constants/constants';
import { VerifyComponent } from '../../views/user-dashboard/verify/verify.component';

const routes: Routes = [{ path: '', component: VerifyComponent }];

export const VERIFY_COMPONENT_ROUTES: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
