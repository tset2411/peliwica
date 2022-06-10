import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

    // Quote Form Dropdown Options

    public mainHorseUsageDropDown: any = [
        { id: "mainHorseUsage_1", value: "Advanced Eventing" },
        { id: "mainHorseUsage_2", value: "Affiliated Showing" },
        { id: "mainHorseUsage_3", value: "Breeding" },
        { id: "mainHorseUsage_4", value: "Combined Training up to 1.2m" },
        { id: "mainHorseUsage_5", value: "Competitive driving" },
        { id: "mainHorseUsage_6", value: "Cross country and Intermediate BE" },
        { id: "mainHorseUsage_7", value: "Dressage" },
        { id: "mainHorseUsage_8", value: "Dressage Elementry and above" },
        { id: "mainHorseUsage_9", value: "Dressage Novice and below" },
        { id: "mainHorseUsage_10", value: "Foals Over 3months age" },
        { id: "mainHorseUsage_11", value: "Hacking" },
        { id: "mainHorseUsage_12", value: "Heavy Horse Working" },
        { id: "mainHorseUsage_13", value: "Horse Ball" },
        { id: "mainHorseUsage_14", value: "Horses at Grass/companions" },
        { id: "mainHorseUsage_15", value: "Hunting" },
        { id: "mainHorseUsage_16", value: "Le trec" },
        { id: "mainHorseUsage_17", value: "Local Gymkhanas/ Mounted Games" },
        { id: "mainHorseUsage_18", value: "Long distance riding (up to 25 Miles)" },
        { id: "mainHorseUsage_19", value: "Long distance/ endurance rides 25 miles and over" },
        { id: "mainHorseUsage_20", value: "Non competitive driving" },
        { id: "mainHorseUsage_21", value: "Parelli" },
        { id: "mainHorseUsage_22", value: "Polocross" },
        { id: "mainHorseUsage_23", value: "Pony Club Activities (jumping up to 1.2m and Dressage <Advanced medium)" },
        { id: "mainHorseUsage_24", value: "Pony Club Activities (Jumping up to 1m and Dressage  <elementary)" },
        { id: "mainHorseUsage_25", value: "Pony Club Prince Philip Cup/ Mounted games" },
        { id: "mainHorseUsage_26", value: "Rearing & breaking" },
        { id: "mainHorseUsage_27", value: "Retired Horses" },
        { id: "mainHorseUsage_28", value: "Riding Club Activities (jumping > 1.2m)" },
        { id: "mainHorseUsage_29", value: "Riding Club Activities (jumping up to 1.2m and Dressage <Advanced medium)" },
        { id: "mainHorseUsage_30", value: "Riding Club Activities (jumping up to 1m and Dressage <elementary)" },
        { id: "mainHorseUsage_31", value: "Show Jumping > 1.2m (AFF AND UNAFF)" },
        { id: "mainHorseUsage_32", value: "Show Jumping between 1m and 1.2m (AFF AND UNAFF)" },
        { id: "mainHorseUsage_33", value: "Show Jumping upto 1m (AFF AND UNAFF)" },
        { id: "mainHorseUsage_34", value: "Sponsored Rides" },
        { id: "mainHorseUsage_35", value: "Team Chasing - Open" },
        { id: "mainHorseUsage_36", value: "Team Chasing Novice and Intermediate" },
        { id: "mainHorseUsage_37", value: "Unaff Cross country & Hunter Trials (> 1m)" },
        { id: "mainHorseUsage_38", value: "Unaff Cross country & Hunter Trials (up to 80cm)" },
        { id: "mainHorseUsage_39", value: "Unaff Cross country,jump & Hunter Trials (80 up to 1m)" },
        { id: "mainHorseUsage_40", value: "Unaff Jump Cross (> 1m)" },
        { id: "mainHorseUsage_41", value: "Unaff Jump Cross (up to 1m)" },
        { id: "mainHorseUsage_42", value: "Unaff Jump Cross (up to 80cm)" },
        { id: "mainHorseUsage_43", value: "Unaffiliated or AFF Eventing > 1m" },
        { id: "mainHorseUsage_44", value: "Unaffiliated or AFF Eventing > 1m" },
        { id: "mainHorseUsage_45", value: "Unaffiliated or AFF Eventing up to 1m - Same as Cross country" },
        { id: "mainHorseUsage_46", value: "Unaffiliated or AFF Eventing up to 80 cm/BE 80 - Same as Cross country" },
        { id: "mainHorseUsage_47", value: "Unaffiliated Showing" },
        { id: "mainHorseUsage_48", value: "Vaulting" },
        { id: "mainHorseUsage_49", value: "Western Riding" },
        { id: "mainHorseUsage_50", value: "Bloodstock" }
    ]

    public bloodstockClassificationDropDown: any = [
        { id: "bloodstockClassification_1", value: "Broodmares" },
        { id: "bloodstockClassification_2", value: "Chasing (Including Hunter Chase)" },
        { id: "bloodstockClassification_3", value: "Flat Racing" },
        { id: "bloodstockClassification_4", value: "Hurdles" },
        { id: "bloodstockClassification_5", value: "NHF" },
        { id: "bloodstockClassification_6", value: "Point to Point" },
        { id: "bloodstockClassification_7", value: "Stallions" }
    ]

    public coverSelectionPersonalLiabilityDropDown: any = [
        { id: "coverSelectionPersonalLiability_1", value: "£3,000 per Incident" },
        { id: "coverSelectionPersonalLiability_2", value: "£5,000 per Incident" },
        { id: "coverSelectionPersonalLiability_3", value: "£7500 Per incident (£15,000 in the Aggregate)" },
        { id: "coverSelectionPersonalLiability_4", value: "£3000 plus £2500 “top up” for life saving surgery" },
        { id: "coverSelectionPersonalLiability_5", value: "£5000 plus £2500 “top up” for life saving surgery" },
        { id: "coverSelectionPersonalLiability_6", value: "£7500 Life Saving Surgery /Colic Surgery Only" }
    ]

    public coverSelectionExcessDropDown: any = [
        { id: "coverSelectionExcess_1", value: "£200" },
        { id: "coverSelectionExcess_2", value: "£300" },
        { id: "coverSelectionExcess_3", value: "£500" }
    ]

    public addOnSelectionPersonalLiabilityDropDown: any = [
        { id: "addOnSelectionPersonalLiability_1", value: "£1 Million" }
    ]

    public addOnSelectionPersonalAccidentDropDown: any = [
        { id: "addOnSelectionPersonalAccident_1", value: "Up to £15,000 (Includes £1,500 for Dental Treatment)" },
        { id: "addOnSelectionPersonalAccident_2", value: "Up to £20,000 (Includes £1,500 for Dental Treatment)" },
        { id: "addOnSelectionPersonalAccident_1", value: "Up to £30,000 (Includes £1,500 for Dental Treatment)" }
    ]
    
    // Policy Holders Dropdown Options
    public namePrefix: any = [
        { id: "namePrefix_1", value: "Mr" },
        { id: "namePrefix_2", value: "Miss" },
        { id: "namePrefix_3", value: "Mrs" }
    ]

    // Horse Details Form Dropdown Options
    public sexOfHorse: any = [
        { id: "sexOfHorse_1", value: "Male" },
        { id: "sexOfHorse_2", value: "Female" }
    ]

    public heightOfHorse: any = [
        { id: "heightOfHorse_1", value: "5.0 HH" },
        { id: "heightOfHorse_2", value: "5.1 HH" },
        { id: "heightOfHorse_3", value: "5.2 HH" },
        { id: "heightOfHorse_4", value: "5.3 HH" },
        { id: "heightOfHorse_5", value: "6.0 HH" },
        { id: "heightOfHorse_6", value: "6.1 HH" },
        { id: "heightOfHorse_7", value: "6.2 HH" },
        { id: "heightOfHorse_8", value: "6.3 HH" },
        { id: "heightOfHorse_9", value: "7.0 HH" },
        { id: "heightOfHorse_10", value: "7.1 HH" },
        { id: "heightOfHorse_11", value: "7.2 HH" },
        { id: "heightOfHorse_12", value: "7.3 HH" },
        { id: "heightOfHorse_13", value: "8.0 HH" },
        { id: "heightOfHorse_14", value: "8.1 HH" },
        { id: "heightOfHorse_15", value: "8.2 HH" },
        { id: "heightOfHorse_16", value: "8.3 HH" },
        { id: "heightOfHorse_17", value: "9.0 HH" },
        { id: "heightOfHorse_18", value: "9.1 HH" },
        { id: "heightOfHorse_19", value: "9.2 HH" },
        { id: "heightOfHorse_20", value: "9.3 HH" },
        { id: "heightOfHorse_21", value: "10.0 HH" },
        { id: "heightOfHorse_22", value: "10.1 HH" },
        { id: "heightOfHorse_23", value: "10.2 HH" },
        { id: "heightOfHorse_24", value: "10.3 HH" },
        { id: "heightOfHorse_25", value: "11.0 HH" },
        { id: "heightOfHorse_26", value: "11.1 HH" },
        { id: "heightOfHorse_27", value: "11.2 HH" },
        { id: "heightOfHorse_28", value: "11.3 HH" },
        { id: "heightOfHorse_29", value: "12.0 HH" },
        { id: "heightOfHorse_30", value: "12.1 HH" },
        { id: "heightOfHorse_31", value: "12.2 HH" },
        { id: "heightOfHorse_32", value: "12.3 HH" },
        { id: "heightOfHorse_33", value: "13.0 HH" },
        { id: "heightOfHorse_34", value: "13.1 HH" },
        { id: "heightOfHorse_35", value: "13.2 HH" },
        { id: "heightOfHorse_36", value: "13.3 HH" },
        { id: "heightOfHorse_37", value: "14.0 HH" },
        { id: "heightOfHorse_38", value: "14.1 HH" },
        { id: "heightOfHorse_39", value: "14.2 HH" },
        { id: "heightOfHorse_40", value: "14.3 HH" },
        { id: "heightOfHorse_41", value: "15.0 HH" },
        { id: "heightOfHorse_42", value: "15.1 HH" },
        { id: "heightOfHorse_43", value: "15.2 HH" },
        { id: "heightOfHorse_44", value: "15.3 HH" },
        { id: "heightOfHorse_45", value: "16.0 HH" },
        { id: "heightOfHorse_46", value: "16.1 HH" },
        { id: "heightOfHorse_47", value: "16.2 HH" },
        { id: "heightOfHorse_48", value: "16.3 HH" },
        { id: "heightOfHorse_49", value: "17.0 HH" },
        { id: "heightOfHorse_50", value: "17.1 HH" },
        { id: "heightOfHorse_51", value: "17.2 HH" },
        { id: "heightOfHorse_52", value: "17.3 HH" },
        { id: "heightOfHorse_53", value: "18.0 HH" },
        { id: "heightOfHorse_54", value: "18.1 HH" },
        { id: "heightOfHorse_55", value: "18.2 HH" },
        { id: "heightOfHorse_56", value: "18.3 HH" },
        { id: "heightOfHorse_57", value: "19.0 HH" },
        { id: "heightOfHorse_58", value: "19.1 HH" },
        { id: "heightOfHorse_59", value: "19.2 HH" },
        { id: "heightOfHorse_60", value: "19.3 HH" },
        { id: "heightOfHorse_61", value: "20.0 HH" },
        { id: "heightOfHorse_62", value: "20.1 HH" },
        { id: "heightOfHorse_63", value: "20.2 HH" },
        { id: "heightOfHorse_64", value: "20.3 HH" },
        { id: "heightOfHorse_65", value: "21.0 HH" },
        { id: "heightOfHorse_66", value: "21.1 HH" },
        { id: "heightOfHorse_68", value: "21.2 HH" },
        { id: "heightOfHorse_69", value: "21.3 HH" },
        { id: "heightOfHorse_70", value: "22.0 HH" }
    ]

    public colorOfHorse: any = [
        { id: "colorOfHorse_1", value: "Appaloosa" },
        { id: "colorOfHorse_2", value: "Bay" },
        { id: "colorOfHorse_3", value: "Bay/Black" },
        { id: "colorOfHorse_4", value: "Black" },
        { id: "colorOfHorse_5", value: "Blue Roan" },
        { id: "colorOfHorse_6", value: "Brown" },
        { id: "colorOfHorse_7", value: "Chestnut" },
        { id: "colorOfHorse_8", value: "Cream" },
        { id: "colorOfHorse_9", value: "Cremello" },
        { id: "colorOfHorse_10", value: "Dark Bay" },
        { id: "colorOfHorse_12", value: "Dun" },
        { id: "colorOfHorse_13", value: "Flea-bitten Grey" },
        { id: "colorOfHorse_14", value: "Grey" },
        { id: "colorOfHorse_15", value: "Light Bay" },
        { id: "colorOfHorse_16", value: "Palomino" },
        { id: "colorOfHorse_17", value: "Piebald" },
        { id: "colorOfHorse_18", value: "Skewbald" },
        { id: "colorOfHorse_19", value: "Spotted" },
        { id: "colorOfHorse_20", value: "Steel Grey" },
        { id: "colorOfHorse_21", value: "Strawberry Roan" }
    ]

    public breedOfHorse: any = [
        { id: "breedOfHorse_1", value: "American Miniature" },
        { id: "breedOfHorse_2", value: "American Paint Horse" },
        { id: "breedOfHorse_3", value: "American Quarter" },
        { id: "breedOfHorse_4", value: "Andalusian" },
        { id: "breedOfHorse_5", value: "Anglo-Arab" },
        { id: "breedOfHorse_6", value: "Appaloosa" },
        { id: "breedOfHorse_7", value: "Arab" },
        { id: "breedOfHorse_8", value: "Arab X" },
        { id: "breedOfHorse_9", value: "Bavarian Warmblood" },
        { id: "breedOfHorse_10", value: "Belgian Warmblood" },
        { id: "breedOfHorse_11", value: "British Warmblood" },
        { id: "breedOfHorse_12", value: "Caspian" },
        { id: "breedOfHorse_13", value: "Cleveland Bay" },
        { id: "breedOfHorse_14", value: "Clydesdale" },
        { id: "breedOfHorse_15", value: "Cob" },
        { id: "breedOfHorse_16", value: "Comtois" },
        { id: "breedOfHorse_17", value: "Connemara" },
        { id: "breedOfHorse_18", value: "Crossbreed" },
        { id: "breedOfHorse_19", value: "Dales" },
        { id: "breedOfHorse_20", value: "Dartmoor" },
        { id: "breedOfHorse_21", value: "Donkey" },
        { id: "breedOfHorse_22", value: "Danish Warmblood" },
        { id: "breedOfHorse_23", value: "Dutch Warmblood" },
        { id: "breedOfHorse_24", value: "Eriskay" },
        { id: "breedOfHorse_25", value: "Exmoor" },
        { id: "breedOfHorse_26", value: "Falabella" },
        { id: "breedOfHorse_27", value: "Fell" },
        { id: "breedOfHorse_28", value: "Fjord" },
        { id: "breedOfHorse_29", value: "Fresian" },
        { id: "breedOfHorse_30", value: "Gelderlander" },
        { id: "breedOfHorse_31", value: "German Warmblood" },
        { id: "breedOfHorse_32", value: "Gypsy Cob" },
        { id: "breedOfHorse_33", value: "Gypsy Vanner" },
        { id: "breedOfHorse_34", value: "Hack" },
        { id: "breedOfHorse_35", value: "Hackney Horse" },
        { id: "breedOfHorse_36", value: "Hackney Pony" },
        { id: "breedOfHorse_37", value: "Haflinger" },
        { id: "breedOfHorse_38", value: "Hanoverian" },
        { id: "breedOfHorse_39", value: "Highland" },
        { id: "breedOfHorse_40", value: "Holstein" },
        { id: "breedOfHorse_41", value: "Hunter" },
        { id: "breedOfHorse_42", value: "Irish Draught" },
        { id: "breedOfHorse_43", value: "Irish Draught X" },
        { id: "breedOfHorse_44", value: "Lippizaner" },
        { id: "breedOfHorse_45", value: "Lusitano" },
        { id: "breedOfHorse_46", value: "Miniature" },
        { id: "breedOfHorse_47", value: "Miniature Shetland" },
        { id: "breedOfHorse_48", value: "Morgan" },
        { id: "breedOfHorse_49", value: "New Forest" },
        { id: "breedOfHorse_50", value: "Noriker" },
        { id: "breedOfHorse_51", value: "Oldenburg" },
        { id: "breedOfHorse_52", value: "Palomino" },
        { id: "breedOfHorse_53", value: "Paso Fino" },
        { id: "breedOfHorse_54", value: "Percheron" },
        { id: "breedOfHorse_55", value: "Pinto" },
        { id: "breedOfHorse_56", value: "Polo Pony" },
        { id: "breedOfHorse_57", value: "Pony" },
        { id: "breedOfHorse_58", value: "Quarter Horse" },
        { id: "breedOfHorse_59", value: "Riding Horse" },
        { id: "breedOfHorse_60", value: "Riding Pony" },
        { id: "breedOfHorse_61", value: "Rocky Mountain" },
        { id: "breedOfHorse_62", value: "Selle Francais" },
        { id: "breedOfHorse_63", value: "Shetland" },
        { id: "breedOfHorse_64", value: "Shire" },
        { id: "breedOfHorse_65", value: "Shire X" },
        { id: "breedOfHorse_66", value: "Show Cob" },
        { id: "breedOfHorse_67", value: "Show Pony" },
        { id: "breedOfHorse_68", value: "Sports Horse" },
        { id: "breedOfHorse_69", value: "Standardbred" },
        { id: "breedOfHorse_70", value: "Suffolk Punch" },
        { id: "breedOfHorse_71", value: "Swedish Warmblood" },
        { id: "breedOfHorse_72", value: "Thoroughbred" },
        { id: "breedOfHorse_73", value: "Thoroughbred X" },
        { id: "breedOfHorse_74", value: "Trakehener" },
        { id: "breedOfHorse_75", value: "Undefined Breed" },
        { id: "breedOfHorse_76", value: "Warmblood" },
        { id: "breedOfHorse_77", value: "Warmblood X" },
        { id: "breedOfHorse_78", value: "Welsh" },
        { id: "breedOfHorse_79", value: "Welsh X" },
        { id: "breedOfHorse_80", value: "Welsh Mountain" },
        { id: "breedOfHorse_81", value: "Welsh Section A" },
        { id: "breedOfHorse_82", value: "Welsh Section B" },
        { id: "breedOfHorse_83", value: "Welsh Section C" },
        { id: "breedOfHorse_84", value: "Welsh Section D" },
        { id: "breedOfHorse_85", value: "Westphalian" }
    ]

    constructor() { }

    /**
    * Set local storage data based on name and value
    */
    public setLocalStorage(param: string, value: any) {
        return localStorage.setItem(param, value);
    }

    /**
    * Get local storage data based on name
    */
    public getlocalStorage(param: string) {
        return localStorage.getItem(param);
    }

}