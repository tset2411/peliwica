export class FormData {

    public quoteFormData: QuoteFormData;
    public policyHolderFormData: PolicyHolderFormData;
    public horseDetailsFormData: HorseDetailsFormData;
    public statementOfFactFormData: StatementOfFactFormData;
}

/**
 * Quotes form model
 */
export class QuoteFormData {

    public quoteId: string;
    public proccesingBrokerage: string;
    public grossCommission: string;
    public isNewBusinessTransaction: boolean;
    public isRenewalBusinessTransaction: boolean;
    public policyHolderFirstName: string;
    public policyHolderMiddleName: string;
    public policyHolderLastName: string;
    public isAnyCriminalConvictions: boolean;
    public criminalConvictions: string;
    public saddleryOrTrack: boolean;
    public addOnValueOfItems: any;
    public isTrailersOrHorseDrawnVehicles: boolean;
    public valueOfItems: string;
    public horseQuotesArray: QuoteModel[];
}

export class QuoteModel {

    public horseDateOfBirth: string;
    public ageOfHorse: string;
    public horseValue: string;
    public horseUsage: string;
    public bloodStockClassification: string;
    public isPersonalLiabilityCover: boolean;
    public isVeterinaryFees: boolean;
    public isLossOfUse: boolean;
    public coverIndemnityLimit: string;
    public coverExcess: string;
    public isCoInsuranceDiagnosticInvestigation: boolean;
    public isPersonalLiabilityAddOn: boolean;
    public isPersonalAccidentAddOn: boolean;
    public addOnIndemnityLimit: string;
    public addOnIndemnityLimits: string;
    public isLegalExpenses: boolean;
    public isQuoteMe: boolean;

    constructor(data: any) {
        this.horseDateOfBirth = data.horseDateOfBirth;
        this.ageOfHorse = data.ageOfHorse;
        this.horseValue = data.horseValue;
        this.horseUsage = data.horseUsage;
        this.bloodStockClassification = data.bloodStockClassification;
        this.isPersonalLiabilityCover = data.isPersonalLiabilityCover;
        this.isVeterinaryFees = data.isVeterinaryFees;
        this.isLossOfUse = data.isLossOfUse;
        this.coverIndemnityLimit = data.coverIndemnityLimit;
        this.coverExcess = data.coverExcess;
        this.isCoInsuranceDiagnosticInvestigation = data.isCoInsuranceDiagnosticInvestigation;
        this.isPersonalLiabilityAddOn = data.isPersonalLiabilityAddOn;
        this.isPersonalAccidentAddOn = data.isPersonalAccidentAddOn;
        this.addOnIndemnityLimit = data.addOnIndemnityLimit;
        this.addOnIndemnityLimits = data.addOnIndemnityLimits;
        this.isLegalExpenses = data.isLegalExpenses;
        this.isQuoteMe = data.isQuoteMe;
    }
}

/**
 * Policy Holder form model
 */
export class PolicyHolderFormData {
    public title: any;
    public firstName: string;
    public lastName: string;
    public middleName: string;
    public dateOfBirth: any;
    public occupation: string;
    public email: string;
    public confirmEmail: string;
    public mobileContactNumber: string;
    public homeContactNumber: string;
    public postCode: string;
    public flatNumber: string;
    public houseNumber: string;
    public addressLine1: string;
    public addressLine2: string;
    public town: string;
    public country: string;
}

/**
 * Horse details form model
 */
export class HorseDetailsFormData {
    public isSingleItemYes: boolean;
    public isSingleItemNo: boolean;
    public saddleyItemsArray: SaddleyItemsModel[];
    public trailerItemsArray: TrailerItemsModel[];
    public horseDetailsArray: HorseModel[];
}

export class HorseModel {
    public name: string;
    public sex: any;
    public passportNo: string;
    public microChipNo: string;
    public colorOfHorse: any;
    public breed: any;
    public height: any;
    public isOwnHorseYes: boolean;
    public isOwnHorseNo: boolean;
    public title: string;
    public firstName: string;
    public lastName: string;
    public middleName: string;
    public dateOfBirth: string;
    public occupation: string;
    public email: string;
    public confirmEmail: string;
    public mobileContactNumber: string;
    public homeContactNumber: string;
    public ownerPostCode: string;
    public ownerFlatNumber: string;
    public ownerHouseNumber: string;
    public ownerAddressLine1: string;
    public ownerAddressLine2: string;
    public ownerTown: string;
    public ownerCountry: string;
    public isSameAdresYes: boolean;
    public isSameAdresNo: boolean;
    public isLoanYes: boolean;
    public isLoanNo: boolean;
    public isHaveLoanAgrementYes: boolean;
    public isHaveLoanAgrementNo: boolean;
    public loanAgreement: any;
    public loanAgreementName: string;
    public isLossPayeeHolder: boolean;
    public isLossPayeeOwner: boolean;
    public postCode: string;
    public flatNo: string;
    public houseName: string;
    public addressLine1: string;
    public addressLine2: string;
    public town: string;
    public country: string;
    public purchaseLoanDate: any;
    public quoteDate: any;

    constructor(data: any) {
        this.name = data.name;
        this.sex = data.sex;
        this.passportNo = data.passportNo;
        this.microChipNo = data.microChipNo;
        this.colorOfHorse = data.colorOfHorse;
        this.breed = data.breed;
        this.height = data.height;
        this.isOwnHorseYes = data.isOwnHorseYes;
        this.isOwnHorseNo = data.isOwnHorseNo;
        this.isSameAdresYes = data.isSameAdresYes;
        this.isSameAdresNo = data.isSameAdresNo;
        this.title = data.title;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.middleName = data.middleName;
        this.dateOfBirth = data.dateOfBirth;
        this.occupation = data.occupation;
        this.email = data.email;
        this.confirmEmail = data.confirmEmail;
        this.mobileContactNumber = data.mobileContactNumber;
        this.homeContactNumber = data.homeContactNumber;
        this.ownerPostCode = data.ownerPostCode;
        this.ownerFlatNumber = data.ownerFlatNumber;
        this.ownerHouseNumber = data.ownerHouseNumber;
        this.ownerAddressLine1 = data.ownerAddressLine1;
        this.ownerAddressLine2 = data.ownerAddressLine2;
        this.ownerTown = data.ownerTown;
        this.ownerCountry = data.ownerCountry;
        this.isLoanYes = data.isLoanYes;
        this.isLoanNo = data.isLoanNo;
        this.isHaveLoanAgrementYes = data.isHaveLoanAgrementYes;
        this.isHaveLoanAgrementNo = data.isHaveLoanAgrementNo;
        this.loanAgreement = data.loanAgreement;
        this.loanAgreementName = data.loanAgreementName;
        this.isLossPayeeHolder = data.isLossPayeeHolder;
        this.isLossPayeeOwner = data.isLossPayeeOwner;
        this.postCode = data.postCode;
        this.flatNo = data.flatNo;
        this.houseName = data.houseName;
        this.addressLine1 = data.addressLine1;
        this.addressLine2 = data.addressLine2;
        this.town = data.town;
        this.country = data.country;
        this.purchaseLoanDate = data.purchaseLoanDate;
        this.quoteDate = data.quoteDate;
    }
}

export class SaddleyItemsModel {
    public saddleryDescription: string;
    public saddlerySumInsured: string;
    public saddleryPurchasePrice: string;
    public saddleryMake: string;
    public saddleryColour: string;

    constructor(data: any) {
        this.saddleryDescription = data.saddleryDescription;
        this.saddlerySumInsured = data.saddlerySumInsured;
        this.saddleryPurchasePrice = data.saddleryPurchasePrice;
        this.saddleryMake = data.saddleryMake;
        this.saddleryColour = data.saddleryColour;
    }
}

export class TrailerItemsModel {
    public vehiclesChassisNumber: string;
    public vehiclesMake: string;
    public vehiclesYearManufacturer: string;
    public vehiclesPurchaseDate: any;
    public vehiclesCommencementDate: any;
    public vehiclesPurchasePrice: string;
    public vehiclesSumInsured: string;
    
    constructor(data: any) {
        this.vehiclesChassisNumber = data.vehiclesChassisNumber;
        this.vehiclesMake = data.vehiclesMake;
        this.vehiclesYearManufacturer = data.vehiclesYearManufacturer;
        this.vehiclesPurchaseDate = data.vehiclesPurchaseDate;
        this.vehiclesCommencementDate = data.vehiclesCommencementDate;
        this.vehiclesPurchasePrice = data.vehiclesPurchasePrice;
        this.vehiclesSumInsured = data.vehiclesSumInsured;
    }
}

/**
 * StatementOfFactFormData models
 */
export class StatementOfFactFormData {
    public statementOfFactArray: StatementOfFactModel[];
}

export class StatementOfFactModel {

    public isAccidentDiseaseNo: boolean;
    public isAccidentDiseaseYes: boolean;
    public accidentDiseaseDescription: string;

    public isColicNo: boolean;
    public isColicYes: boolean;
    public colicDescription: string;

    public isCurrentlyInsuredNo: boolean;
    public isCurrentlyInsuredYes: boolean;
    public currentlyInsuredDescription: string;

    public isEquineInsuranceNo: boolean;
    public isEquineInsuranceYes: boolean;
    public equineInsuranceDescription: string;

    public isEquineLossNo: boolean;
    public isEquineLossYes: boolean;
    public equineLossDescription: string;

    public isEyesHeartWindNo: boolean;
    public isEyesHeartWindYes: boolean;
    public eyesHeartWindDescription: string;

    public isIndergoneSurgeryNo: boolean;
    public isIndergoneSurgeryYes: boolean;
    public indergoneSurgeryDescription: string;

    public isInfectiousDiseaseNo: boolean;
    public isInfectiousDiseaseYes: boolean;
    public infectiousDiseaseDescription: string;

    public isLamenessFracturesNo: boolean;
    public isLamenessFracturesYes: boolean;
    public lamenessFracturesDescription: string;

    public isSacroitsWartsNo: boolean;
    public isSacroitsWartsYes: boolean;
    public sacroitsWartsDescription: string;

    public documentsArray: DocumentsModel[];

    constructor(data: any) {
        this.isAccidentDiseaseNo = data.isAccidentDiseaseNo
        this.isAccidentDiseaseYes = data.isAccidentDiseaseYes
        this.accidentDiseaseDescription = data.accidentDiseaseDescription

        this.isColicNo = data.isColicNo
        this.isColicYes = data.isColicYes
        this.colicDescription = data.colicDescription

        this.isCurrentlyInsuredNo = data.isCurrentlyInsuredNo
        this.isCurrentlyInsuredYes = data.isCurrentlyInsuredYes
        this.currentlyInsuredDescription = data.currentlyInsuredDescription

        this.isEquineInsuranceNo = data.isEquineInsuranceNo
        this.isEquineInsuranceYes = data.isEquineInsuranceYes
        this.equineInsuranceDescription = data.equineInsuranceDescription

        this.isEquineLossNo = data.isEquineLossNo
        this.isEquineLossYes = data.isEquineLossYes
        this.equineLossDescription = data.equineLossDescription

        this.isEyesHeartWindNo = data.isEyesHeartWindNo
        this.isEyesHeartWindYes = data.isEyesHeartWindYes
        this.eyesHeartWindDescription = data.eyesHeartWindDescription

        this.isIndergoneSurgeryNo = data.isIndergoneSurgeryNo
        this.isIndergoneSurgeryYes = data.isIndergoneSurgeryYes
        this.indergoneSurgeryDescription = data.indergoneSurgeryDescription

        this.isInfectiousDiseaseNo = data.isInfectiousDiseaseNo
        this.isInfectiousDiseaseYes = data.isInfectiousDiseaseYes
        this.infectiousDiseaseDescription = data.infectiousDiseaseDescription

        this.isLamenessFracturesNo = data.isLamenessFracturesNo
        this.isLamenessFracturesYes = data.isLamenessFracturesYes
        this.lamenessFracturesDescription = data.lamenessFracturesDescription

        this.isSacroitsWartsNo = data.isSacroitsWartsNo
        this.isSacroitsWartsYes = data.isSacroitsWartsYes
        this.sacroitsWartsDescription = data.sacroitsWartsDescription

        this.documentsArray = data.documentsArray;
    }
}

export class DocumentsModel {

    public documents: any;
    public documentsName: string;
    public documentsDescription: string;

    constructor(data: any) {
        this.documents = data.documents;
        this.documentsName = data.documentsName;
        this.documentsDescription = data.documentsDescription;
    }
}