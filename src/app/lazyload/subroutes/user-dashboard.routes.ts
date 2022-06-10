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
      {
        path: ROUTS_CONSTANTS.QUOTE,
        loadChildren: () =>
          import('../../../app/lazyload/submodules/quote.module').then(
            (x) => x.QuoteModule
          ),
      },
      {
        path: ROUTS_CONSTANTS.POLICY_HOLDER,
        loadChildren: () =>
          import('../../../app/lazyload/submodules/policy-holder.module').then(
            (x) => x.PolicyHolderModule
          ),
        canActivate: [WorkflowGuard],
      },
      {
        path: ROUTS_CONSTANTS.HORSE_DETAILS,
        loadChildren: () =>
          import('../../../app/lazyload/submodules/horse-details.module').then(
            (x) => x.HorseDetailsModule
          ),
        canActivate: [WorkflowGuard],
      },
      {
        path: ROUTS_CONSTANTS.STATEMENT_OF_FACT,
        loadChildren: () =>
          import(
            '../../../app/lazyload/submodules/statement-of-fact.module'
          ).then((x) => x.StatementOfFactModule),
        canActivate: [WorkflowGuard],
      },
      {
        path: ROUTS_CONSTANTS.VERIFY,
        loadChildren: () =>
          import('../../../app/lazyload/submodules/verify.module').then(
            (x) => x.VerifyModule
          ),
        canActivate: [WorkflowGuard],
      },
      {
        path: ROUTS_CONSTANTS.CONFIRMATION,
        loadChildren: () =>
          import('../../../app/lazyload/submodules/confirmation.module').then(
            (x) => x.ConfirmationModule
          ),
        canActivate: [WorkflowGuard],
      },
    ],
  },
];

// canActivate: [WorkflowGuard]

export const USER_DASHBOARD_COMPONENT_ROUTES: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
