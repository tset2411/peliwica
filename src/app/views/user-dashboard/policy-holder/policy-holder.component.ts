import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, EmailValidator } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

/* Validator constants */
import { ValidatorConstants, Constants } from '../../../constants/constants';

/* Services */
import { FormDataService } from '../../../services/formData.service';
import { SharedService } from '../../../services/shared.service';
import { PostalCodeService } from '../../../services/postalcode.service';

/* Jquery use */
declare var $: any;

@Component({
    selector: 'app-policy-holder',
    templateUrl: './policy-holder.component.html',
    styleUrls: ['./policy-holder.component.css']
})
export class PolicyHolderComponent implements OnInit {

    public policyHolderForm: FormGroup;
    public numberPattern: any = "[0-9]+";
    public confirmEmailErrorExist: boolean = false;
    public policyHolderDatas: any;
    public birthDateMaxDate: Date = new Date();
    public postCodeSearchedAddress: any = [];
    public postCodePreviousValue: any = "";

    constructor(
        public formBuilder: FormBuilder,
        public router: Router,
        public sharedService: SharedService,
        public formDataService: FormDataService,
        public postalCodeService: PostalCodeService) {
    }

    ngOnInit() {

        // Build policy holder form
        this.policyHolderForm = this.formBuilder.group({
            title: [this.sharedService.namePrefix[0], Validators.compose([Validators.required])],
            firstName: [null, Validators.compose([Validators.required, Validators.maxLength(ValidatorConstants.INPUT_MAX_LENGTH)])],
            lastName: [null, ([Validators.required, Validators.maxLength(ValidatorConstants.INPUT_MAX_LENGTH)])],
            middleName: [null],
            dateOfBirth: [null, Validators.compose([Validators.required])],
            occupation: [null, Validators.compose([Validators.required])],
            email: [null, Validators.compose([Validators.required, Validators.pattern(ValidatorConstants.EMAIL_PATTERN), Validators.maxLength(ValidatorConstants.EMAIL_MAX_LENGTH)])],
            confirmEmail: [null, Validators.compose([Validators.required, Validators.pattern(ValidatorConstants.EMAIL_PATTERN), Validators.maxLength(ValidatorConstants.EMAIL_MAX_LENGTH)])],
            mobileContactNumber: [null, Validators.compose([Validators.required])],
            homeContactNumber: [null],
            postCode: [null, Validators.compose([Validators.required])],
            flatNumber: [null],
            houseNumber: [null],
            addressLine1: [null, Validators.compose([Validators.required, Validators.maxLength(ValidatorConstants.INPUT_ADRESS_LENGTH)])],
            addressLine2: [null],
            town: [null, Validators.compose([Validators.required])],
            country: [null, Validators.compose([Validators.required])]
        });

        if (this.formDataService.formData && this.formDataService.formData.quoteFormData) {
            this.policyHolderForm.controls['firstName'].setValue(this.formDataService.formData.quoteFormData.policyHolderFirstName);
            this.policyHolderForm.controls['middleName'].setValue(this.formDataService.formData.quoteFormData.policyHolderMiddleName);
            this.policyHolderForm.controls['lastName'].setValue(this.formDataService.formData.quoteFormData.policyHolderLastName);
        }

        if (this.formDataService.formData && this.formDataService.formData.policyHolderFormData)
            this.policyHolderForm.patchValue(this.formDataService.formData.policyHolderFormData);
        this.refreshSelectPicker();
    }

    /**
     * To allow only numbers to be entered
     */
    checkNumberFormat(event: any) {
        if ((event.key).match(this.numberPattern) || event.which == '8' || event.keyCode == '9' || event.keyCode == '27'
            || event.keyCode == '46' || event.keyCode == '37' || event.keyCode == '39')
            return true;
        return false;
    }

	/**
     * Validate email & confirm email
     */
    validateEmail() {
        if (this.policyHolderForm.value['email'] != this.policyHolderForm.value['confirmEmail']) {
            this.confirmEmailErrorExist = true;

        } else {
            this.confirmEmailErrorExist = false;
        }
    }

    /**
     * Go to horse details form
     */
    goToHorseDetailsForm() {
        if (this.savePolicyHolderForm()) {
            this.scrollToNavigationBar();
            this.router.navigate(["/userDashboard/horseDetails"]);
        }
    }

    /**
     * Save policy holder form
     */
    savePolicyHolderForm() {
        if (!this.policyHolderForm.valid)
            return false;

        this.formDataService.setPolicyHolder(this.policyHolderForm.getRawValue());
        return true;
    }

    /**
     * Go to quote form
     */
    goToQuoteDetailsForm() {
        this.scrollToNavigationBar();
        this.router.navigate(["/userDashboard"]);
    }

    /**
     * Method to refresh select picker
     */
    refreshSelectPicker() {
        setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 10);
    }

    /**
     * Method to check address from entered postal code
     */
    checkAddressFromPostCode() {

        let postCode = this.policyHolderForm.controls['postCode'].value;
        if (postCode.trim() != this.postCodePreviousValue) {

            this.postCodePreviousValue = postCode;
            this.postalCodeService.getAddressFromPostalCodeAPI(postCode).subscribe((response) => {

                console.log(JSON.stringify(response));
                if (response && response.code == 2000 && response.result.length !== 0) {

                    // Set address from postal code API response
                    this.postCodeSearchedAddress = response.result;
                }
            }, (error) => {

                if (JSON.parse(error._body) && JSON.parse(error._body).code == 4040) {
                    console.log("Address not found.");
                    // Re-Set address from postal code API response
                    /*this.policyHolderForm.controls['flatNumber'].setValue('');
                    this.policyHolderForm.controls['houseNumber'].setValue('');
                    this.policyHolderForm.controls['addressLine1'].setValue('');
                    this.policyHolderForm.controls['addressLine2'].setValue('');
                    this.policyHolderForm.controls['town'].setValue('');
                    this.policyHolderForm.controls['country'].setValue('');*/
                }
            });
        }
    }

    /**
     * Method to set searched address from post code API
     */
    setSearchedPostcodeAddress(currentIndex) {

        if (this.postCodeSearchedAddress[currentIndex]) {
            this.policyHolderForm.controls['flatNumber'].setValue(this.postCodeSearchedAddress[currentIndex].building_number);
            this.policyHolderForm.controls['houseNumber'].setValue(this.postCodeSearchedAddress[currentIndex].building_name);
            this.policyHolderForm.controls['addressLine1'].setValue(this.postCodeSearchedAddress[currentIndex].line_1);
            this.policyHolderForm.controls['addressLine2'].setValue( ( (this.postCodeSearchedAddress[currentIndex].line_2 != '') ? (this.postCodeSearchedAddress[currentIndex].line_2 + ", ") : '' ) + this.postCodeSearchedAddress[currentIndex].line_3);
            this.policyHolderForm.controls['town'].setValue(this.postCodeSearchedAddress[currentIndex].post_town);
            this.policyHolderForm.controls['country'].setValue(this.postCodeSearchedAddress[currentIndex].country);
            this.postCodeSearchedAddress = [];
        }
    }

    createAndGetAddress(currentIndex) {

        let addressString = '';
        let tempAddress = this.postCodeSearchedAddress[currentIndex]
        
        if(tempAddress.postcode != '') {
            addressString = addressString + tempAddress.postcode + ', ';
        }

        if(tempAddress.line_1 != '') {
            addressString = addressString + tempAddress.line_1 + ', ';
        }

        if(tempAddress.postal_county != '') {
            addressString = addressString + tempAddress.postal_county + ', ';
        }

        if(tempAddress.country != '') {
            addressString = addressString + tempAddress.country + ', ';
        }

        return addressString;
    }

    /**
     * Method to scroll top to navigation bar
     */
    scrollToNavigationBar() {

        $('html, body').animate({
            'scrollTop': $("#status-buttons").position().top
        });
    }
}

