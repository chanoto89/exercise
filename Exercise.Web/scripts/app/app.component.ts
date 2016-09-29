import { Component } from '@angular/core';

import {MarkitService} from './services/markit.service';
import {Result} from './models/result.model';

@Component({
    selector: 'my-app',
    templateUrl: '/scripts/app/app.component.html',
    styleUrls: ['scripts/app/app.component.css']
})

export class AppComponent {
    resultModel: Result;
    searchText: string;

    constructor(private markitService: MarkitService) {

    }

    executeSearch(): void {
        this.markitService.getMarkitData(this.searchText).then((result: Result) => {

            if (result.Name) {
                this.resultModel = result;
            } else {
                // TODO: Add proper handling for null results
                alert("Invalid Search.Please enter valid search details");
            }

        }).catch(err => {
            console.log(err);
        });
    }

    convertInteger(value: number): string {
        var numberOfDigits = value.toString().length;

        if (numberOfDigits > 9) {
            return `${(value / 1000000000).toFixed(1)}B`;
        } else if (numberOfDigits > 6) {
            return `${(value / 1000000).toFixed(1)}M`;
        } else if (numberOfDigits > 3) {
            return `${(value / 1000).toFixed(1)}K`;
        } else {
            return value.toString();
        }
    }
}
