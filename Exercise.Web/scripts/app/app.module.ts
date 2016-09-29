import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import {MarkitService} from './services/markit.service';

@NgModule({
    imports: [
        BrowserModule,
        JsonpModule,
        FormsModule
    ],
    declarations: [AppComponent],
    providers: [
        MarkitService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
