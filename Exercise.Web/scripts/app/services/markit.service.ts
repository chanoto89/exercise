import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import { Result } from '../models/result.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarkitService {
    private url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?callback=JSONP_CALLBACK&symbol=';

    constructor(private jsonP: Jsonp) { }

    getMarkitData(searchTerm: string): Promise<Result> {
        return this.jsonP.get(`${this.url}${searchTerm}`)
            .toPromise()
            .then(response => response.json() as Result);
    }
}