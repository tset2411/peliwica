import { Injectable } from '@angular/core';

/*import { FormData, Personal, Address }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';
*/

import { STEPS } from '../workflow/workflow.model';
import { WorkflowService } from '../workflow/workflow.service';
import { QuoteModel, QuoteFormData, PolicyHolderFormData, HorseDetailsFormData, HorseModel, StatementOfFactFormData, FormData } from '../models/formData.model';

@Injectable()
export class FormDataService {

    public formData: FormData = new FormData();

    public quoteFormData: QuoteFormData;
    public policyHolderFormData: PolicyHolderFormData;
    public horseDetailsFormData: HorseDetailsFormData;
    public statementOfFactFormData: StatementOfFactFormData;

    public isQuoteFormValid: boolean = false;
    public isPolicyHolderFormValid: boolean = false;
    public isHorseDetailsFormValid: boolean = false;
    public isStatementOfFactFormValid: boolean = false;
    public isVerifyFormValid: boolean = false;

    public isAcceptTermsInVerify: boolean = false;
    public isAcceptTermsInPolicyHolder: boolean = false;

    constructor(
        public workflowService: WorkflowService
    ) {

    }

    /**
     * Method to set quote form values in to model
     * @param {any} data [description]
     */
    setQuotes(data: any) {

        // Update the Quote data only when the Quote Form had been validated successfully
        this.isQuoteFormValid = true;

        this.quoteFormData = data;
        this.formData.quoteFormData = this.quoteFormData;
        // Validate Quote Step in Workflow
        this.workflowService.validateStep(STEPS.quote);
    }

    /**
     * Service method to set policy holder form data
     * @param {any} data [description]
     */
    setPolicyHolder(data: any) {

        this.isPolicyHolderFormValid = true;

        this.policyHolderFormData = data;
        this.formData.policyHolderFormData = this.policyHolderFormData;
        // Validate Policy holder Step in Workflow
        this.workflowService.validateStep(STEPS.policyholder);
    }

    /**
     * Service method to set horse details form
     * @param {any} data [description]
     */
    setHorseDetails(data: any) {
        this.isHorseDetailsFormValid = true;

        this.horseDetailsFormData = data;
        this.formData.horseDetailsFormData = this.horseDetailsFormData;
        // Validate Horse details Step in Workflow
        this.workflowService.validateStep(STEPS.horsedetails);
    }

    /**
     * Method to set statement of fact form
     * @param {any} data [description]
     */
    setStatementOfFact(data: any) {
        this.isStatementOfFactFormValid = true;

        this.statementOfFactFormData = data;
        this.formData.statementOfFactFormData = this.statementOfFactFormData;
        // Validate statement of fact form Step in Workflow
        this.workflowService.validateStep(STEPS.statementoffact);
    }

    /**
     * Method to set verify form valid
     */
    setVerify() {
        this.isVerifyFormValid = true;
        // Validate verify form Step in Workflow
        this.workflowService.validateStep(STEPS.verify);
    }

    inValidateHorseDetailsStep() {
        this.workflowService.inValidateStep(STEPS.horsedetails);
    }

    /*getWork() : string {
        // Return the work type
        return this.formData.work;
    }
    
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid && 
                this.isAddressFormValid;
    }*/
}