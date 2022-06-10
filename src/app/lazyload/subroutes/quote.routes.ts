import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTS_CONSTANTS } from '../../constants/constants';
import { QuoteComponent } from '../../views/user-dashboard/quote/quote.component';

const routes: Routes = [
    { path: '', component: QuoteComponent }
];

export const QUOTES_COMPONENT_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);