import { Injectable } from '@angular/core';

import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/* Constants */
import { Constants } from '../constants/constants';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

@Injectable()
export class PostalCodeService {

    constructor(public http: Http) {

    }

    /**
     * Service method to get address from postal code API.
     * https://api.ideal-postcodes.co.uk/v1/postcodes/WC2N%205DU?api_key=ak_jkau6zmvQ3HGfN25QxVfu6ooKRhs0
     * @param  {string}          postalCode [description]
     * @return {Observable<any>}            [description]
     */
    public getAddressFromPostalCodeAPI(postalCode: string): Observable<any> {
        
        let finalURL = Constants.POSTCODES_IDEAL_API_BASEURL + postalCode + '?api_key=' + Constants.IDEAL_API_KEY;
        return this.http.get(finalURL).map(res => res.json() || '');
    }
}