import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
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
    selector: 'app-horse-details',
    templateUrl: './horse-details.component.html',
    styleUrls: ['./horse-details.component.css']
})
export class HorseDetailsComponent implements OnInit {

    public horseDetailsForm: FormGroup;
    public accordionHeaderClass: string = ".panel-heading";
    public horseDetailsDatas: any;
    public defaultDropDownSize: number = Constants.DROP_DOWN_OPTIONS_SIZE_LIMIT;
    public MAX_DATE: Date = new Date();
    public QUOTE_INCEPTION_DATE_MIN_DATE: Date = new Date();
    public QUOTE_INCEPTION_DATE_MAX_DATE: Date = new Date();
    public confirmEmailErrorExist: boolean = false;
    public DEFAULT_PASSPORT_MICROCHIP_VALUE: string = "TBA";
    public numberPattern: any = "[0-9]+";
    public ownerPostCodeSearchedAddress: any = [];
    public postCodeSearchedAddress: any = [];
    public IS_NOT_OWNER_TOOLTIP: string = "Please provide owners details";
    public postCodePreviousValue: any = "";
    public ownerPostCodePreviousValue: any = "";

    constructor(
        public formBuilder: FormBuilder,
        public router: Router,
        public sharedService: SharedService,
        public formDataService: FormDataService,
        public postalCodeService: PostalCodeService) {

        // Set max 30 days limit in qoute inception date
        let todayTemp = new Date();
        this.QUOTE_INCEPTION_DATE_MAX_DATE.setDate(todayTemp.getDate() + 30);
    }

    ngOnInit() {

        // Method to build horse details form
        this.horseDetailsForm = this.formBuilder.group({
            isSingleItemYes: [false],
            isSingleItemNo: [true],
            saddleyItemsArray: this.formBuilder.array([this.createSaddleyItems()]),
            trailerItemsArray: this.formBuilder.array([this.createTrailerItems()]),
            horseDetailsArray: this.formBuilder.array([this.createDetails()])
        });

        if (this.formDataService.quoteFormData && this.formDataService.quoteFormData.horseQuotesArray && this.formDataService.quoteFormData.horseQuotesArray.length > 1) {
            this.createAccordianAndSetValue();
        } else {

            if (this.formDataService.formData.horseDetailsFormData) {

                // Add Saddley
                for (var j = 1; j < this.formDataService.horseDetailsFormData.saddleyItemsArray.length; ++j) {
                    this.addItemsToSaddleyItemsArray();
                }

                // Add Trailers
                for (var j = 1; j < this.formDataService.horseDetailsFormData.trailerItemsArray.length; ++j) {
                    this.addItemsToTrailerItemsArray();
                }

                this.horseDetailsForm.patchValue(this.formDataService.formData.horseDetailsFormData);
            }
            this.hideAccordionHeader();
        }

        this.refreshSelectPicker();
        // Check if horse form is not valid then disable next step.
        if (!this.horseDetailsForm.valid)
            this.formDataService.inValidateHorseDetailsStep();
    }

    /**
     * Method to more horse form details
     */
    addHorseDetails() {
        let horsesDetailsForm = this.horseDetailsForm.get('horseDetailsArray') as FormArray;
        for (var i = 0; i < horsesDetailsForm.length; i++) {
            $("#collapse" + (i)).addClass('collapsed');
            $("#collapse" + (i)).attr('aria-expanded', false);
            $("#collapseOne" + (i)).removeClass('in');
        }
        horsesDetailsForm.push(this.createDetails());
        this.refreshSelectPicker();
    }

    /**
     * Method to create horse details
     */
    createDetails() {
        return this.formBuilder.group({
            name: [null, Validators.compose([Validators.required, Validators.maxLength(ValidatorConstants.INPUT_MAX_LENGTH)])],
            sex: [this.sharedService.sexOfHorse[0], Validators.compose([Validators.required])],
            passportNo: [this.DEFAULT_PASSPORT_MICROCHIP_VALUE, Validators.compose([Validators.required])],
            microChipNo: [this.DEFAULT_PASSPORT_MICROCHIP_VALUE],
            colorOfHorse: [this.sharedService.colorOfHorse[0], Validators.compose([Validators.required])],
            breed: [this.sharedService.breedOfHorse[0], Validators.compose([Validators.required])],
            height: [this.sharedService.heightOfHorse[0], Validators.compose([Validators.required])],
            isOwnHorseYes: [true],
            isOwnHorseNo: [false],
            title: [this.sharedService.namePrefix[0]],
            firstName: [null],
            lastName: [null],
            middleName: [null],
            dateOfBirth: [null],
            occupation: [null],
            email: [null],
            confirmEmail: [null],
            mobileContactNumber: [null],
            homeContactNumber: [null],
            ownerPostCode: [null],
            ownerFlatNumber: [null],
            ownerHouseNumber: [null],
            ownerAddressLine1: [null],
            ownerAddressLine2: [null],
            ownerTown: [null],
            ownerCountry: [null],
            isSameAdresYes: [false],
            isSameAdresNo: [true],
            isLoanYes: [false],
            isLoanNo: [true],
            isLossPayeeHolder: [false],
            isLossPayeeOwner: [true],
            isHaveLoanAgrementYes: [false],
            isHaveLoanAgrementNo: [true],
            loanAgreement: [null],
            loanAgreementName: [null],
            postCode: [null],
            flatNo: [null],
            houseName: [null],
            addressLine1: [null],
            addressLine2: [null],
            town: [null],
            country: [null],
            purchaseLoanDate: [new Date(), Validators.compose([Validators.required])],
            quoteDate: [new Date(), Validators.compose([Validators.required])]
        });
    }

    /**
     * Method to create formBuilder group of saddley items 
     */
    createSaddleyItems() {
        return this.formBuilder.group({
            saddleryDescription: [null],
            saddlerySumInsured: [null],
            saddleryPurchasePrice: [null],
            saddleryMake: [null],
            saddleryColour: [null],
        });
    }

    /**
     * Method to create formBuilder group of trailers items 
     */
    createTrailerItems() {
        return this.formBuilder.group({
            vehiclesChassisNumber: [null],
            vehiclesMake: [null],
            vehiclesYearManufacturer: [null],
            vehiclesPurchaseDate: [null],
            vehiclesCommencementDate: [null],
            vehiclesPurchasePrice: [null],
            vehiclesSumInsured: [null],
        });
    }

    /**
     * Method to create and add saddley item to saddleyItems array
     * @param {any} index [description]
     */
    addItemsToSaddleyItemsArray() {

        let saddleyItemsArray = this.horseDetailsForm.get('saddleyItemsArray') as FormArray;
        //let saddleyItemsArray = horsesDetailsForm.controls[horseDetailsIndex].get('saddleyItemsArray') as FormArray;
        saddleyItemsArray.push(this.createSaddleyItems());
    }

    /**
     * Method to create and add trailer item to trailerItems array
     * @param {any} index [description]
     */
    addItemsToTrailerItemsArray() {

        let trailerItemsArray = this.horseDetailsForm.get('trailerItemsArray') as FormArray;
        trailerItemsArray.push(this.createTrailerItems());
    }

    /**
     * Method to remove document from documents array by index
     * @param {any} statementOfFactFormIndex [description]
     * @param {any} documenentsIndex         [description]
     */
    removeItemsToSaddleyItemsArray(saddleyItemsIndex: any) {

        let saddleyItemsArray = this.horseDetailsForm.get('saddleyItemsArray') as FormArray;
        //let saddleyItemsArray = horsesDetailsForm.controls[horseDetailsIndex].get('saddleyItemsArray') as FormArray;
        saddleyItemsArray.removeAt(saddleyItemsIndex);
    }

    /**
     * Method to remove document from documents array by index
     * @param {any} statementOfFactFormIndex [description]
     * @param {any} documenentsIndex         [description]
     */
    removeItemsToTrailerItemsArray(trailerItemsIndex: any) {

        let trailerItemsArray = this.horseDetailsForm.get('trailerItemsArray') as FormArray;
        trailerItemsArray.removeAt(trailerItemsIndex);
    }

    /**
     * Method to hide all accordion
     */
    hideAccordionHeader() {
        setTimeout(() => {
            $(this.accordionHeaderClass).css("display", "none");
        }, 10);
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
     * Go to statement of fact form
     */
    goToStatementtOfFactForm() {
        if (this.saveHorseDetailsForm()) {
            this.scrollToNavigationBar();
            this.router.navigate(["/userDashboard/statementOfFact"]);
        }
    }

    /**
     * Method to save horse details forms
     */
    saveHorseDetailsForm() {
        if (!this.horseDetailsForm.valid)
            return false;
        this.formDataService.setHorseDetails(this.horseDetailsForm.getRawValue());
        return true;
    }

    /**
     * Go to policy holder form
     */
    goToPolicyHolderForm() {
        this.scrollToNavigationBar();
        this.router.navigate(["/userDashboard/policyHolder"]);
    }

    /**
     * Method will be call on isSameAdresYes check box value change
     * @param {boolean} isSameAdresYesValue [description]
     */
    onIsSameAddressYesChange(isSameAdresYesValue: boolean, horseDetailsIndex: any) {
        this.changeStableAddressFieldsValidators(isSameAdresYesValue, horseDetailsIndex);
    }

    /**
     * Method will be call on isSameAdresNo check box value change
     * @param {boolean} isSameAdresYesValue [description]
     */
    onIsSameAddressNoChange(isSameAdresYesValue: boolean, horseDetailsIndex: any) {
        this.changeStableAddressFieldsValidators(isSameAdresYesValue, horseDetailsIndex);
    }

    /**
     * Method to change stable address fields requires permission basis on check box value.
     * @param {boolean} isSameAdresYesValue [description]
     */
    changeStableAddressFieldsValidators(isSameAdresYesValue: boolean, horseDetailsIndex: any) {

        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['addressLine1'].setValidators(isSameAdresYesValue ? [Validators.required, Validators.maxLength(ValidatorConstants.INPUT_ADRESS_LENGTH)] : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['town'].setValidators(isSameAdresYesValue ? [Validators.required] : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['country'].setValidators(isSameAdresYesValue ? [Validators.required] : null);

        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['addressLine1'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['town'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['country'].updateValueAndValidity();
    }

    /**
     * Create accordion of horse details form and set value
     */
    createAccordianAndSetValue() {

        for (var i = 1; i < this.formDataService.quoteFormData.horseQuotesArray.length; ++i) {
            this.addHorseDetails();
        }

        // Create saddley items and add to formarray
        if (this.formDataService.formData.horseDetailsFormData && this.formDataService.horseDetailsFormData.horseDetailsArray.length > 0) {

            // Add Saddley
            for (var j = 1; j < this.formDataService.horseDetailsFormData.saddleyItemsArray.length; ++j) {
                this.addItemsToSaddleyItemsArray();
            }

            // Add trailers 
            for (var j = 1; j < this.formDataService.horseDetailsFormData.trailerItemsArray.length; ++j) {
                this.addItemsToTrailerItemsArray();
            }

            this.horseDetailsForm.patchValue(this.formDataService.formData.horseDetailsFormData);
        }
    }

    /**
     * Method to check address from entered postal code
     */
    checkAddressFromPostCode(horseDetailsIndex: any) {

        let postCode = this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['postCode'].value;

        if (postCode.trim() != this.postCodePreviousValue) {

            this.postCodePreviousValue = postCode;
            this.postalCodeService.getAddressFromPostalCodeAPI(postCode).subscribe((response) => {

                // console.log(JSON.stringify(response));
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
     * @param {[type]} horseDetailsIndex [description]
     */
    setPostCodeSearchedAddress(horseDetailsIndex, currentIndex) {
        if (this.postCodeSearchedAddress[currentIndex]) {
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['flatNo'].setValue(this.postCodeSearchedAddress[currentIndex].building_number);
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['houseName'].setValue(this.postCodeSearchedAddress[currentIndex].building_name);
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['addressLine1'].setValue(this.postCodeSearchedAddress[currentIndex].line_1);
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['addressLine2'].setValue(this.postCodeSearchedAddress[currentIndex].line_2 + ", " + this.postCodeSearchedAddress[currentIndex].line_3);
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['town'].setValue(this.postCodeSearchedAddress[currentIndex].post_town);
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['country'].setValue(this.postCodeSearchedAddress[currentIndex].country);
            this.postCodeSearchedAddress = [];
        }
    }

    /**
     * Validate email & confirm email
     */
    validateEmail(horseDetailsIndex: any) {
        if (this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['email'].value != this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['confirmEmail'].value) {
            this.confirmEmailErrorExist = true;

        } else {
            this.confirmEmailErrorExist = false;
        }
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
     * Method will be call if 'Is owner yes checkbox' value changes
     * @param {boolean} isOwnHorseYes     [description]
     * @param {any}     horseDetailsIndex [description]
     */
    onIsOwnerYesChange(isOwnHorseYes: boolean, horseDetailsIndex: any) {
        this.changePolicyHolderDetailsPermissions(!isOwnHorseYes, horseDetailsIndex);

        if (!isOwnHorseYes)
            this.setIsHorseOnLoan(true, horseDetailsIndex);

        this.refreshSelectPicker();
    }

    /**
     * Method will be call if 'Is owner no checkbox' value changes
     * @param {boolean} isOwnHorseYes     [description]
     * @param {any}     horseDetailsIndex [description]
     */
    onIsOwnerNoChange(isOwnHorseYes: boolean, horseDetailsIndex: any) {
        this.changePolicyHolderDetailsPermissions(!isOwnHorseYes, horseDetailsIndex);

        if (!isOwnHorseYes)
            this.setIsHorseOnLoan(true, horseDetailsIndex);

        this.refreshSelectPicker();
    }

    /**
     * Method to set value of Is horse on Loan
     * @param {boolean} isHorseOnLoan     [description]
     * @param {any}     horseDetailsIndex [description]
     */
    setIsHorseOnLoan(isHorseOnLoan: boolean, horseDetailsIndex: any) {
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['isLoanYes'].setValue(isHorseOnLoan);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['isLoanNo'].setValue(!isHorseOnLoan);
    }

    /**
     * Method on change of is horse on loan
     * @param {Boolean} isOwnHorseYes     [description]
     * @param {Boolean} isLoanYes         [description]
     * @param {[type]}  horseDetailsIndex [description]
     */
    isHorseOnLoan(isOwnHorseYes, isLoanYes, horseDetailsIndex) {
        if (!isOwnHorseYes && !isLoanYes)
            this.setIsHorseOnLoan(true, horseDetailsIndex);
    }

    /**
     * Method to change dynamically validation and update validity
     * @param {boolean} isOwnHorseYes     [description]
     * @param {any}     horseDetailsIndex [description]
     */
    changePolicyHolderDetailsPermissions(isOwnHorseYes: boolean, horseDetailsIndex: any) {

        // Set validation
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['title'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required]) : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['firstName'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required, Validators.maxLength(ValidatorConstants.INPUT_MAX_LENGTH)]) : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['lastName'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required, Validators.maxLength(ValidatorConstants.INPUT_MAX_LENGTH)]) : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['dateOfBirth'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required]) : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['occupation'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required]) : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['email'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required, Validators.pattern(ValidatorConstants.EMAIL_PATTERN), Validators.maxLength(ValidatorConstants.EMAIL_MAX_LENGTH)]) : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['confirmEmail'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required, Validators.pattern(ValidatorConstants.EMAIL_PATTERN), Validators.maxLength(ValidatorConstants.EMAIL_MAX_LENGTH)]) : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['mobileContactNumber'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required]) : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerPostCode'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required]) : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerAddressLine1'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required, Validators.maxLength(ValidatorConstants.INPUT_ADRESS_LENGTH)]) : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerTown'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required]) : null);
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerCountry'].setValidators(isOwnHorseYes ? Validators.compose([Validators.required]) : null);

        // Update vlaue and validity
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['title'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['firstName'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['lastName'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['dateOfBirth'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['occupation'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['email'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['confirmEmail'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['mobileContactNumber'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerPostCode'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerAddressLine1'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerTown'].updateValueAndValidity();
        this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerCountry'].updateValueAndValidity();
    }

    /**
     * Method to check owner's address from postal code
     */
    checkOwnerAddressFromPostCode(horseDetailsIndex) {
        let ownerPostCode = this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerPostCode'].value;

        if (ownerPostCode.trim() != this.ownerPostCodePreviousValue) {

            this.ownerPostCodePreviousValue = ownerPostCode;
            this.postalCodeService.getAddressFromPostalCodeAPI(ownerPostCode).subscribe((response) => {

                // console.log(JSON.stringify(response));
                if (response && response.code == 2000 && response.result.length !== 0) {
                    // Set address from postal code API response
                    this.ownerPostCodeSearchedAddress = response.result;
                }
            }, (error) => {

                if (JSON.parse(error._body) && JSON.parse(error._body).code == 4040) {
                    console.log("Address not found.");
                }
            });
        }
    }

    /**
     * Method to set owner searched address from post code API
     * @param {[type]} horseDetailsIndex [description]
     */
    setOwnerPostCodeSearchedAddress(horseDetailsIndex, currentIndex) {
        if (this.ownerPostCodeSearchedAddress[currentIndex]) {
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerFlatNumber'].setValue(this.ownerPostCodeSearchedAddress[currentIndex].building_number);
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerHouseNumber'].setValue(this.ownerPostCodeSearchedAddress[currentIndex].building_name);
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerAddressLine1'].setValue(this.ownerPostCodeSearchedAddress[currentIndex].line_1);
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerAddressLine2'].setValue(this.ownerPostCodeSearchedAddress[currentIndex].line_2 + ", " + this.ownerPostCodeSearchedAddress[currentIndex].line_3);
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerTown'].setValue(this.ownerPostCodeSearchedAddress[currentIndex].post_town);
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['ownerCountry'].setValue(this.ownerPostCodeSearchedAddress[currentIndex].country);
            this.ownerPostCodeSearchedAddress = [];
        }
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
     * Method will be call on file select or change event
     * @param {any} event [description]
     */
    onFileSelectEvent(event: any, horseDetailsIndex: any) {

        let fileList: FileList = event.target.files;
        if (fileList.length > 0 && fileList[0]) {

            let file: File = fileList[0];
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['loanAgreement'].setValue(file);
            this.horseDetailsForm.controls.horseDetailsArray['controls'][horseDetailsIndex].controls['loanAgreementName'].setValue(file.name);
        }
    }

    /**
     * Method to create post code address string
     * @param {[type]} currentIndex [description]
     */
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
     * Method to create owners post code address string
     * @param {[type]} currentIndex [description]
     */
    createAndGetOwnerPostAddress(currentIndex) {

        let addressString = '';
        let tempAddress = this.ownerPostCodeSearchedAddress[currentIndex]
        
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
}
