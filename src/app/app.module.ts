import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { ApplyComponent } from './apply/apply.component';
import { AgreementComponent } from './agreement/agreement.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ShowbuffertComponent } from './show-buffert/show-buffert.component';
import { ChooseaccountComponent } from './choose-account/choose-account.component';
import { ChooseamountComponent } from './choose-amount/choose-amount.component';
import { ConfirmtransferComponent } from './confirm-transfer/confirm-transfer.component';
import { TransferdoneComponent } from './transfer-done/transfer-done.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyComponent,
    AgreementComponent,
    HomecomponentComponent,
    ShowbuffertComponent,
    ChooseaccountComponent,
    ChooseamountComponent,
    ConfirmtransferComponent,
    TransferdoneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
