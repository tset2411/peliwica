import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

/* Routes */
import { MAIN_ROUTES } from './app.routes';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './views/common/header-component/header-component.component';
import { FooterComponentComponent } from './views/common/footer-component/footer-component.component';

/* Services */
import { FormDataService } from './services/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { WorkflowGuard } from './workflow/workflow-guard.service';
import { SharedService } from './services/shared.service';
import { PostalCodeService } from './services/postalcode.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(MAIN_ROUTES, { useHash: true }),
  ],
  providers: [
    FormDataService,
    WorkflowService,
    WorkflowGuard,
    SharedService,
    PostalCodeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Usefull Links
// https://www.cc28tech.com/angular-multi-step-wizard-part-1/
// http://angular-multi-step-wizard.azurewebsites.net/
// https://stackblitz.com/edit/deep-nested-reactive-form?file=app%2Fapp.component.ts
