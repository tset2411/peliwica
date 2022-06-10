import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTS_CONSTANTS } from '../../constants/constants';
import { PolicyHolderComponent } from '../../views/user-dashboard/policy-holder/policy-holder.component';

const routes: Routes = [
    { path: '', component: PolicyHolderComponent }
];

export const POLICY_HOLDER_COMPONENT_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);