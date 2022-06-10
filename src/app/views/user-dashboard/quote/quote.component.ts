import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

/* Validator constants */
import { ValidatorConstants, Constants } from '../../../constants/constants';

/* Services */
import { FormDataService } from '../../../services/formData.service';
import { SharedService } from '../../../services/shared.service';

/* Jquery use */
declare var $: any;

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    public quoteForms: FormGroup;
    public oneAtATime: boolean = false;
    public isFirstOpen: boolean = true;
    public accordionHeaderClass: string = ".panel-heading";
    public isNewBusiness: boolean = true;
    public isRenewBusiness: boolean = false;
    public isQuoteMe: boolean = false;
    public horseMinYearAgeLimit: number = ValidatorConstants.MIN_YEAR_NEW_BUSSINESS;
    public horseMaxYearAgeLimit: number = ValidatorConstants.MAX_YEAR_NEW_BUSSINESS;
    public defaultDropDownSize: number = Constants.DROP_DOWN_OPTIONS_SIZE_LIMIT;
    public birthDateMaxDate: Date = new Date();
    public isBloodStockSelected: boolean = false;
    public numberPattern: any = "[0-9]+";
    public LOSS_OF_USE_HELP: string = "Covers upto 85% of the sum insured or fair market value, which ever is the lower, if the horse becomes permanently incapable of carrying out its main usage.";
    public CO_INSURANCE_DIAGNOSTIC_TOOLTIP: string = "Lameness Diagnostics, means reasonable and customary veterinary fees for methods used by a veterinary surgeon to determine the cause and/or type of lameness condition or lameness injury including but not limited to radiographs, gamma scintigraphy bone scans, ultrasound examination, MRI's and CT scans. In addition, we will not pay for repeat or duplication of any lameness diagnostics without our prior approval.";
    public LEGAL_EXPENSES_TOOLTIP: string = "£50,000 for legal costs and consumer disputes";
    public SADDLEY_AND_TRACK_TOOLTIP: string = "Accidental Damage and Theft Cover £100 Standard Excess Applies"; 
    public TRAILERS_TOOLTIP: string = "Accidental Damage and Theft Cover £250 Standard Excess Applies";
    public MAIN_HORSE_USAGE_TOOLTIP: string = "Please select the horses main usage from the dropdown list";
    public showPremiumBreakDown: boolean = false;

    constructor(
        public formBuilder: FormBuilder,
        public formDataService: FormDataService,
        public sharedService: SharedService,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public elementRef: ElementRef) {
    }

    ngOnInit() {

        if (this.formDataService.formData.quoteFormData) {
            this.isNewBusiness = this.formDataService.formData.quoteFormData.isNewBusinessTransaction;
            this.isRenewBusiness = this.formDataService.formData.quoteFormData.isRenewalBusinessTransaction;
        }

        this.quoteForms = this.formBuilder.group({
            quoteId: [],
            proccesingBrokerage: [Constants.PROCESSING_BROKERAGE, Validators.compose([Validators.required, Validators.maxLength(ValidatorConstants.INPUT_MAX_LENGTH)])],
            grossCommission: [Constants.GROSS_COMMISSION, Validators.compose([Validators.required, Validators.maxLength(ValidatorConstants.INPUT_MAX_LENGTH)])],
            isNewBusinessTransaction: [this.isNewBusiness],
            isRenewalBusinessTransaction: [this.isRenewBusiness],
            policyHolderFirstName: ['', Validators.compose([Validators.required, Validators.maxLength(ValidatorConstants.INPUT_MAX_LENGTH)])],
            policyHolderMiddleName: [null],
            policyHolderLastName: ['', Validators.compose([Validators.required, Validators.maxLength(ValidatorConstants.INPUT_MAX_LENGTH)])],
            isAnyCriminalConvictions: ['false', Validators.compose([Validators.required])],
            criminalConvictions: [null],
            saddleryOrTrack: [false],
            addOnValueOfItems: [0],
            isTrailersOrHorseDrawnVehicles: [false],
            valueOfItems: [0],
            horseQuotesArray: this.formBuilder.array([this.createQuote()])
        });

        setTimeout(() => {

            // On page load ser age of horse blank
            this.quoteForms.controls.horseQuotesArray['controls'][0].controls.ageOfHorse.setValue('');

            if (this.formDataService.formData.quoteFormData)
                this.setQuoteFormData();
            else
                this.hideAccordionHeader();

            this.refreshSelectPicker();
        }, 10);
    }

    /**
     * Method to build quote form
     */
    createQuote() {

        return this.formBuilder.group({
            horseDateOfBirth: [null, Validators.required],
            ageOfHorse: [null],
            horseValue: [null],
            horseUsage: [this.sharedService.mainHorseUsageDropDown[0]],
            bloodStockClassification: [this.sharedService.bloodstockClassificationDropDown[0]],
            isLossOfHorse: [true, Validators.required],
            isVeterinaryFees: [false],
            isLossOfUse: [false],
            coverIndemnityLimit: [this.sharedService.coverSelectionPersonalLiabilityDropDown[0]],
            coverExcess: [this.sharedService.coverSelectionExcessDropDown[0]],
            isCoInsuranceDiagnosticInvestigation: [false],
            isPersonalLiabilityAddOn: [false],
            isPersonalAccidentAddOn: [false],
            addOnIndemnityLimit: [this.sharedService.addOnSelectionPersonalLiabilityDropDown[0]],
            addOnIndemnityLimits: [this.sharedService.addOnSelectionPersonalAccidentDropDown[0]],
            isLegalExpenses: [false],
            isQuoteMe: [false]
        });
    }

    /**
     * Method to add horse qoute
     */
    addHorseQuote(): void {

        let horsesForms = this.quoteForms.get('horseQuotesArray') as FormArray;
        for (var i = 0; i < horsesForms.length; i++) {
            $("#collapse" + (i)).addClass('collapsed');
            $("#collapse" + (i)).attr('aria-expanded', false);
            $("#collapseOne" + (i)).removeClass('in');
        }

        this.scrollToNavigationBar();
        horsesForms.push(this.createQuote());

        setTimeout(() => {
            this.showAccordionHeaderByIndex(0);
            this.refreshSelectPicker();
        }, 100);
    }

    /**
     * Method to save quote form data to form as per accordian wise
     */
    setQuoteFormData() {
        if (this.formDataService.formData.quoteFormData.horseQuotesArray) {

            for (var i = 1; i < this.formDataService.formData.quoteFormData.horseQuotesArray.length; ++i) {
                this.addHorseQuote()
            }
            this.quoteForms.patchValue(this.formDataService.formData.quoteFormData);
        }
        this.showPremiumBreakDown = true;
    }

    /**
     * Method to remove horse quote
     */
    removeHorseQuote() {
        if (this.quoteForms['controls']['horseQuotesArray']['controls'].length == 1) {
            this.hideAccordionHeader();
        }
    }

    /**
     * Method to hide all accordion
     */
    hideAccordionHeader() {
        $(this.accordionHeaderClass).css("display", "none");
    }

    /**
     * Method to hide accordion by index
     */
    hideAccordionHeaderByIndex(accordionIndex) {
        var ele = $(this.accordionHeaderClass)[accordionIndex]
        $(ele).css("display", "none");
    }

    /**
     * Method to show all accordion
     */
    showAccordionHeader() {
        $(this.accordionHeaderClass).css("display", "block");
    }

    /**
     * Method to show accordion by index
     */
    showAccordionHeaderByIndex(accordionIndex) {
        var ele = $(this.accordionHeaderClass)[accordionIndex]
        $(ele).css("display", "block");
    }

    /**
     * Method to detect changes on new business changes
     * @param {boolean} isNewBussinss [description]
     */
    onNewBusinessChange(isNewBussinss: boolean) {

        if (isNewBussinss)
            this.setAgeLimitForNewBusiness();
        else
            this.setAgeLimitForOldBusiness();

    }

    /**
     * Method to set age limit of horse age for New bussiness
     */
    setAgeLimitForNewBusiness() {

        //this.quoteForms.controls.horseQuotesArray['controls'][horseFormIndex].controls.minimumAgeYear.setValue(ValidatorConstants.MIN_YEAR_NEW_BUSSINESS);
        //this.quoteForms.controls.horseQuotesArray['controls'][horseFormIndex].controls.maximumAgeYear.setValue(ValidatorConstants.MAX_YEAR_NEW_BUSSINESS);
        this.horseMinYearAgeLimit = ValidatorConstants.MIN_YEAR_NEW_BUSSINESS;
        this.horseMaxYearAgeLimit = ValidatorConstants.MAX_YEAR_NEW_BUSSINESS;
    }

    /**
     * Method to detect changes on renew business changes
     * @param {boolean} isNewBussinss [description]
     */
    onRenewBusinessChange(isNewBussinss: boolean) {

        if (isNewBussinss)
            this.setAgeLimitForNewBusiness();
        else
            this.setAgeLimitForOldBusiness();
    }

    /**
     * Method to set age limit of horse age for Old bussiness
     */
    setAgeLimitForOldBusiness() {

        //this.quoteForms.controls.horseQuotesArray['controls'][horseFormIndex].controls.minimumAgeYear.setValue(ValidatorConstants.MIN_YEAR_RENEW_BUSSINESS);
        //this.quoteForms.controls.horseQuotesArray['controls'][horseFormIndex].controls.maximumAgeYear.setValue(ValidatorConstants.MAX_YEAR_RENEW_BUSSINESS);
        this.horseMinYearAgeLimit = ValidatorConstants.MIN_YEAR_RENEW_BUSSINESS;
        this.horseMaxYearAgeLimit = ValidatorConstants.MAX_YEAR_RENEW_BUSSINESS;
    }

    /**
     * On loss of use change event
     * @param {boolean} isLossOfUse [description]
     */
    isLossOfUse(isLossOfUse: boolean) {
        //alert(isLossOfUse);
    }

    /**
     * Method to show quote
     */
    showQuote(horseFormIndex: any) {

        this.showPremiumBreakDown = true;
        this.quoteForms.controls.horseQuotesArray['controls'][horseFormIndex].controls.isQuoteMe.setValue(true);
    }

    /**
     * Method to hide quote
     */
    hideQuote(horseFormIndex: any) {

        this.quoteForms.controls.horseQuotesArray['controls'][horseFormIndex].controls.isQuoteMe.setValue(false);
    }

    /**
     * Method will be called on horse's date of birth change
     */
    onHorseDOBCahnge(selectedDate: Date, horseFormIndex: any) {
        let ageOfHorse: number = this.calculateAgeFromBirthDate(selectedDate);
        this.quoteForms.controls.horseQuotesArray['controls'][horseFormIndex].controls.ageOfHorse.setValue(ageOfHorse);

        if(ageOfHorse >= this.horseMinYearAgeLimit)
            this.quoteForms.controls.horseQuotesArray['controls'][horseFormIndex].controls['isLossOfUse'].setValue(false);            
    }

    /**
     * Calculate and return horse age from birthdate
     * @param {Date} birthDate [description]
     */
    calculateAgeFromBirthDate(birthDate: Date) {
        if(!birthDate || birthDate.toString() == 'Invalid Date')
            return 0;
        var ageDifMs = Date.now() - birthDate.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    /**
     * Method to go to next step if form is valid
     */
    goToPolicyHolderDetails() {

        if (this.saveQuoteForm()) {
            // Navigate to the policy holder page
            //this.router.navigateByUrl('../policyHolder');
            $('html, body').animate({
                'scrollTop': $("#status-buttons").position().top
            }, 10);
            this.router.navigate(["/userDashboard/policyHolder"]);
            //this.router.navigate(["../policyHolder"], { relativeTo: this.activatedRoute });
        }

    }

    /**
     * Save quote form to model class
     * @return {boolean} [description]
     */
    saveQuoteForm(): boolean {
        if (!this.quoteForms.valid) {
            return false;
        }
        this.formDataService.setQuotes(this.quoteForms.getRawValue());
        //this.sharedService.setLocalStorage("quoteForm", JSON.stringify(this.quoteForms.controls.horseQuotesArray.value));
        return true;
    }

    /**
     * Method to refresh select picker drop-downs
     */
    refreshSelectPicker() {
        setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 10);
    }

    /**
     * On CriminalConvictions check box value changes 
     * @param {any} isAnyCriminalConvictions [description]
     */
    isAnyCriminalConvictionsChange(isAnyCriminalConvictions: any) {

        if (isAnyCriminalConvictions == "true")
            this.quoteForms.controls['criminalConvictions'].setValidators([Validators.required]);
        else
            this.quoteForms.controls['criminalConvictions'].setValidators(null);

        this.quoteForms.controls['criminalConvictions'].updateValueAndValidity();
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
     * Method will be called on change of main horse usage
     * @param {any} event [description]
     */
    onMainHorseUsageChange(event: any) {
        if (event.value == "Bloodstock") {
            this.isBloodStockSelected = true;
            this.refreshSelectPicker();
        } else
            this.isBloodStockSelected = false;
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
     * Method to remove additional horse accordian
     */
    removeAdditionalHorse(horseFormIndex: any) {

        let horsesForms = this.quoteForms.get('horseQuotesArray') as FormArray;
        horsesForms.removeAt(horseFormIndex);

        if (horsesForms.length == 1) {
            $("#collapseOne" + (horsesForms.length - 1)).addClass('in');
            this.hideAccordionHeader();
        }

        this.saveQuoteForm();

        // Need to remove additional horse from horse-details and statement of fact if exists.
        if (this.formDataService.formData) {

            // Remove additional horse details from horse details array
            if (this.formDataService.formData.horseDetailsFormData &&
                this.formDataService.formData.horseDetailsFormData.horseDetailsArray.length > 1 &&
                this.formDataService.formData.horseDetailsFormData.horseDetailsArray[horseFormIndex]) {

                this.formDataService.formData.horseDetailsFormData.horseDetailsArray.splice(horseFormIndex, 1);
            }

            // Remove additional horse from statemment of fact array
            if (this.formDataService.formData.statementOfFactFormData &&
                this.formDataService.formData.statementOfFactFormData.statementOfFactArray.length > 1 &&
                this.formDataService.formData.statementOfFactFormData.statementOfFactArray[horseFormIndex]) {

                this.formDataService.formData.statementOfFactFormData.statementOfFactArray.splice(horseFormIndex, 1);
            }
        }
    }

    /**
     * Method to set excees limit on IndemnityLimit change
     * @param {any} horseFormIndex [description]
     */
    onCoverIndemnityLimitSelect(horseFormIndex: any) {
        
        let selectedLimitId: any = this.quoteForms.controls.horseQuotesArray['controls'][horseFormIndex].controls.coverIndemnityLimit.value.id;
        if(selectedLimitId == 'coverSelectionPersonalLiability_3' || selectedLimitId == 'coverSelectionPersonalLiability_6') {
            this.quoteForms.controls.horseQuotesArray['controls'][horseFormIndex].controls.coverExcess.setValue(this.sharedService.coverSelectionExcessDropDown[2]);    
            this.refreshSelectPicker();
        }
    }
}
