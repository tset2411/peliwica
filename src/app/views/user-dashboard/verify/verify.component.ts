import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/* Services */
import { FormDataService } from '../../../services/formData.service';

//import { FormData, QuoteFormData, PolicyHolderFormData, HorseDetailsFormData, StatementOfFactFormData } from '../../../models/formData.model';

/* Jquery use */
declare var $: any;

@Component({
    selector: 'app-verify',
    templateUrl: './verify.component.html',
    styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

    constructor(
        public formDataService: FormDataService,
        public router: Router) { }

    ngOnInit() {
        console.log(JSON.stringify(this.formDataService.formData));
    }

    /**
     * Method to redirect user to policy holder details form
     */
    editPolicyHolderDetails() {

        this.scrollToNavigationBar();
        this.router.navigate(["/userDashboard/policyHolder"]);
    }

    /**
     * Method to redirect user to policy holder details form
     */
    editHorseDetails() {

        this.scrollToNavigationBar();
        this.router.navigate(["/userDashboard/horseDetails"]);
    }

    /**
     * Method to scroll top to navigation bar
     */
    scrollToNavigationBar() {

        $('html, body').animate({
            'scrollTop': $("#status-buttons").position().top
        });
    }

    /**
     * Method to go to statemment of fact form
     */
    goToStatementtOfFactForm() {
        this.scrollToNavigationBar();
        this.router.navigate(["/userDashboard/statementOfFact"]);
    }

    /**
     * Go to confirmation form
     */
    goToConfirmationForm() {
        if (this.formDataService.isAcceptTermsInVerify) {
            this.scrollToNavigationBar();
            this.formDataService.setVerify();
            this.router.navigate(["/userDashboard/confirmation"]);
        }
    }

    /**
     * Method to create full address string
     */
    createAndGetFullAddress() {
        let addressString: string = '';

        if(this.formDataService.formData) {

            if(this.formDataService.formData.policyHolderFormData.flatNumber != '') {
                addressString = addressString + this.formDataService.formData.policyHolderFormData.flatNumber + ', ';
            }

            if(this.formDataService.formData.policyHolderFormData.addressLine1 != '') {
                addressString = addressString + this.formDataService.formData.policyHolderFormData.addressLine1 + ', ';
            }

            if(this.formDataService.formData.policyHolderFormData.addressLine2 != '') {
                addressString = addressString + this.formDataService.formData.policyHolderFormData.addressLine2 + ', ';
            }

            if(this.formDataService.formData.policyHolderFormData.country != '') {
                addressString = addressString + this.formDataService.formData.policyHolderFormData.country;
            }
        }

        return addressString;
    }
}
