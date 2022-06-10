import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Components  */
import { NavbarComponent } from '../../views/user-dashboard/navbar/navbar.component';
import { UserDashboardComponent } from '../../views/user-dashboard/user-dashboard.component';

import { USER_DASHBOARD_COMPONENT_ROUTES } from '../subroutes/user-dashboard.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        USER_DASHBOARD_COMPONENT_ROUTES
    ],
    declarations: [
        UserDashboardComponent,
        NavbarComponent
    ]
})

export class UserDashboardModule { }