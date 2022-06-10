import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTS_CONSTANTS } from '../../constants/constants';
import { UserDashboardComponent } from '../../views/user-dashboard/user-dashboard.component';

import { WorkflowGuard } from '../../workflow/workflow-guard.service';

const routes: Routes = [
    {
        path: '',
        component: UserDashboardComponent,
        children: [
            { path: '', redirectTo: ROUTS_CONSTANTS.QUOTE, pathMatch: 'full' },
            { path: ROUTS_CONSTANTS.QUOTE, loadChildren: 'app/lazyload/submodules/quote.module#QuoteModule' },
            { path: ROUTS_CONSTANTS.POLICY_HOLDER, loadChildren: 'app/lazyload/submodules/policy-holder.module#PolicyHolderModule', canActivate: [WorkflowGuard] },
            { path: ROUTS_CONSTANTS.HORSE_DETAILS, loadChildren: 'app/lazyload/submodules/horse-details.module#HorseDetailsModule', canActivate: [WorkflowGuard] },
        	{ path: ROUTS_CONSTANTS.STATEMENT_OF_FACT, loadChildren: 'app/lazyload/submodules/statement-of-fact.module#StatementOfFactModule', canActivate: [WorkflowGuard] },
            { path: ROUTS_CONSTANTS.VERIFY, loadChildren: 'app/lazyload/submodules/verify.module#VerifyModule', canActivate: [WorkflowGuard] },
            { path: ROUTS_CONSTANTS.CONFIRMATION, loadChildren: 'app/lazyload/submodules/confirmation.module#ConfirmationModule', canActivate: [WorkflowGuard] }
        ]
    }
];

// canActivate: [WorkflowGuard]

export const USER_DASHBOARD_COMPONENT_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);