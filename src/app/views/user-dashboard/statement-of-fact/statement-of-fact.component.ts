import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, EmailValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

/* Validator constants */
import { ValidatorConstants, Constants } from '../../../constants/constants';

/* Services */
import { FormDataService } from '../../../services/formData.service';

/* Jquery use */
declare var $: any;

@Component({
    selector: 'app-statement-of-fact',
    templateUrl: './statement-of-fact.component.html',
    styleUrls: ['./statement-of-fact.component.css']
})
export class StatementOfFactComponent implements OnInit {

    public statementOfFactForm: FormGroup;
    public accordionHeaderClass: string = ".panel-heading";

    constructor(
        public formBuilder: FormBuilder,
        public router: Router,
        public formDataService: FormDataService) {
    }

    ngOnInit() {

        // To build policy holder form
        this.statementOfFactForm = this.formBuilder.group({
            statementOfFactArray: this.formBuilder.array([this.createStatementOfFact()])
        });

        // To bind data from json object to form fields
        if (this.formDataService.formData.horseDetailsFormData &&
            this.formDataService.formData.horseDetailsFormData.horseDetailsArray &&
            this.formDataService.formData.horseDetailsFormData.horseDetailsArray.length > 1) {

            this.createAccordianAndSetValue();
        } else {

            if (this.formDataService.formData.statementOfFactFormData) {

                for (var j = 1; j < this.formDataService.formData.statementOfFactFormData.statementOfFactArray[0].documentsArray.length; ++j) {
                    this.addDocumentsToDocumentsArray(0);
                }

                this.statementOfFactForm.patchValue(this.formDataService.formData.statementOfFactFormData);
            }
            this.hideAccordionHeader();
        }
    }

    /**
     * Method to create statement of fact form
     */
    createStatementOfFact() {
        return this.formBuilder.group({

            isColicYes: [false],
            isColicNo: [true],
            colicDescription: [null],

            isIndergoneSurgeryYes: [false],
            isIndergoneSurgeryNo: [true],
            indergoneSurgeryDescription: [null],

            isLamenessFracturesYes: [false],
            isLamenessFracturesNo: [true],
            lamenessFracturesDescription: [null],

            isSacroitsWartsYes: [false],
            isSacroitsWartsNo: [true],
            sacroitsWartsDescription: [null],

            isAccidentDiseaseYes: [false],
            isAccidentDiseaseNo: [true],
            accidentDiseaseDescription: [null],

            isInfectiousDiseaseYes: [false],
            isInfectiousDiseaseNo: [true],
            infectiousDiseaseDescription: [null],

            isEyesHeartWindYes: [false],
            isEyesHeartWindNo: [true],
            eyesHeartWindDescription: [null],

            isCurrentlyInsuredYes: [false],
            isCurrentlyInsuredNo: [true],
            currentlyInsuredDescription: [null],

            isEquineInsuranceYes: [false],
            isEquineInsuranceNo: [true],
            equineInsuranceDescription: [null],

            isEquineLossYes: [false],
            isEquineLossNo: [true],
            equineLossDescription: [null],

            documentsArray: this.formBuilder.array([this.createDocumentsArray()])
        });
    }

    /**
     * Method to add state of fact of form to form-array
     */
    addStatementOfFact() {
        
        let statementOfFacts = this.statementOfFactForm.get('statementOfFactArray') as FormArray;
        statementOfFacts.push(this.createStatementOfFact());
    }

    /**
     * Method to create array of documents
     */
    createDocumentsArray() {
        
        return this.formBuilder.group({
            documents: [null],
            documentsName: [null],
            documentsDescription: [null]
        });
    }

    /**
     * Method to create and add document to documents array by index
     * @param {any} index [description]
     */
    addDocumentsToDocumentsArray(index: any) {
        
        let statementOfFacts = this.statementOfFactForm.get('statementOfFactArray') as FormArray;
        let documentsArray = statementOfFacts.controls[index].get('documentsArray') as FormArray;
        documentsArray.push(this.createDocumentsArray());
    }

    /**
     * Method to remove document from documents array by index
     * @param {any} statementOfFactFormIndex [description]
     * @param {any} documenentsIndex         [description]
     */
    removeDocumentsToDocumentsArray(statementOfFactFormIndex: any, documenentsIndex: any) {
        
        let statementOfFacts = this.statementOfFactForm.get('statementOfFactArray') as FormArray;
        let documentsArray = statementOfFacts.controls[statementOfFactFormIndex].get('documentsArray') as FormArray;
        documentsArray.removeAt(documenentsIndex);
    }

    /**
     * Create accordion of horse details form and set value
     */
    createAccordianAndSetValue() {
        
        for (var i = 1; i < this.formDataService.formData.horseDetailsFormData.horseDetailsArray.length; ++i) {
            this.addStatementOfFact();
        }

        if (this.formDataService.formData.statementOfFactFormData &&
            this.formDataService.formData.statementOfFactFormData.statementOfFactArray.length > 0) {

            for (var i = 0; i < this.formDataService.formData.statementOfFactFormData.statementOfFactArray.length; ++i) {
                for (var j = 1; j < this.formDataService.formData.statementOfFactFormData.statementOfFactArray[i].documentsArray.length; ++j) {
                    this.addDocumentsToDocumentsArray(i);
                }
            }

            this.statementOfFactForm.patchValue(this.formDataService.formData.statementOfFactFormData);
        }
    }

    /**
     * Method to hide accordion
     */
    hideAccordionHeader() {
        
        setTimeout(() => {
            $(this.accordionHeaderClass).css("display", "none");
        }, 10);
    }

    /**
     * Method to show accordion
     */
    showAccordionHeader() {
        setTimeout(() => {
            $(this.accordionHeaderClass).css("display", "block");
        }, 10);
    }

    /**
     * Method will be call on file select or change event
     * @param {any} event [description]
     */
    onFileSelectEvent(event: any, statementOfFactIndex: any, documenentsFirstIndex: any) {

        let fileList: FileList = event.target.files;
        if (fileList.length > 0 && fileList[0]) {

            let file: File = fileList[0];
            this.statementOfFactForm.controls.statementOfFactArray['controls'][statementOfFactIndex].controls.documentsArray['controls'][documenentsFirstIndex].controls['documentsName'].setValue(file.name);
            this.statementOfFactForm.controls.statementOfFactArray['controls'][statementOfFactIndex].controls.documentsArray['controls'][documenentsFirstIndex].controls['documents'].setValue(file);
        }
    }

    /**
     * Method to check form validation and save data and redirect user to next verify form
     */
    goToVerifyForm() {

        console.log(this.statementOfFactForm.getRawValue());
        if (this.saveStatementOfFactForm()) {

            this.scrollToNavigationBar();
            this.router.navigate(["/userDashboard/verify"]);
        }
    }

    /**
     * Method to set statement of fact form data
     */
    saveStatementOfFactForm() {
        
        if (!this.statementOfFactForm.valid)
            return false;
        this.formDataService.setStatementOfFact(this.statementOfFactForm.getRawValue());
        return true;
    }

    /**
     * Method to redirect user to previous page.
     */
    goToHorseDetailsForm() {

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
}
