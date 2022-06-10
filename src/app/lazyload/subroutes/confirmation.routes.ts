import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTS_CONSTANTS } from '../../constants/constants';
import { ConfirmationComponent } from '../../views/user-dashboard/confirmation/confirmation.component';

const routes: Routes = [
    { path: '', component: ConfirmationComponent }
];

export const CONFIRMATION_COMPONENT_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);