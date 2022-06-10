import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTS_CONSTANTS } from '../../constants/constants';
import { StatementOfFactComponent } from '../../views/user-dashboard/statement-of-fact/statement-of-fact.component';

const routes: Routes = [{ path: '', component: StatementOfFactComponent }];

export const STATEMENT_OF_FACT_COMPONENT_ROUTES: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
