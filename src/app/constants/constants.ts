/**
 * Routes constants
 */
export class ROUTS_CONSTANTS {
	
    public static BLANK_PATH : string = '';
	public static USER_DASHBOARD : string = 'userDashboard';
	public static QUOTE : string = 'quote';
    public static POLICY_HOLDER : string = 'policyHolder';
	public static HORSE_DETAILS : string = 'horseDetails';
	public static STATEMENT_OF_FACT : string = 'statementOfFact';
    public static VERIFY : string = 'verify';
    public static CONFIRMATION : string = 'confirmation';
}

/**
 * Constants for form validators
 */
export class ValidatorConstants {
    //    public static INPUT_MIN_LENGTH = 4;
    public static INPUT_MAX_LENGTH = 30;
    //    public static EMAIL_MIN_LENGTH = 6;
    public static EMAIL_MAX_LENGTH = 40;
     public static EMAIL_PATTERN = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    public static INPUT_ADRESS_LENGTH = 60;

    public static MIN_YEAR_NEW_BUSSINESS = 13;
    public static MAX_YEAR_NEW_BUSSINESS = 20;
    public static MIN_YEAR_RENEW_BUSSINESS = 15;
    public static MAX_YEAR_RENEW_BUSSINESS = 25;    
}

export class Constants {

    public static PROCESSING_BROKERAGE: string = 'Broker A';
    public static GROSS_COMMISSION: string = '20%';
    public static DROP_DOWN_OPTIONS_SIZE_LIMIT: number = 10;
    public static POSTCODES_IDEAL_API_BASEURL: string = "https://api.ideal-postcodes.co.uk/v1/postcodes/";
    public static IDEAL_API_KEY: string = "ak_jkau6zmvQ3HGfN25QxVfu6ooKRhs0";    
}