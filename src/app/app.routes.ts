import { RouterModule, Routes } from '@angular/router';
import { ROUTS_CONSTANTS } from './constants/constants';

/**
 * All routs
 */
export const MAIN_ROUTES: Routes = [
    { path: ROUTS_CONSTANTS.BLANK_PATH, redirectTo: ROUTS_CONSTANTS.USER_DASHBOARD, pathMatch: 'full' },
    { path: ROUTS_CONSTANTS.USER_DASHBOARD, loadChildren: 'app/lazyload/submodules/user-dashboard.module#UserDashboardModule' }
];