import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplyComponent } from './apply/apply.component';
import { AgreementComponent } from './agreement/agreement.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ShowbuffertComponent } from './show-buffert/show-buffert.component';
import { ChooseaccountComponent } from './choose-account/choose-account.component';
import { ChooseamountComponent } from './choose-amount/choose-amount.component';
import { ConfirmtransferComponent } from './confirm-transfer/confirm-transfer.component';
import { TransferdoneComponent } from './transfer-done/transfer-done.component';

const appRoutes: Routes = [
	{
    path: '',
    component: HomecomponentComponent,
    data: { animation: 'home' }
    },
	{
	path: 'apply',
	component: ApplyComponent,
	data: { animation: 'apply' }
	},
	{
	path: 'agreement',
	component: AgreementComponent,
	data: { animation:'agreement' }
	},
	{
	path: 'show-buffert',
	component: ShowbuffertComponent,
	data: { animation: 'show-buffert' }
	},
	{
	path: 'choose-account',
	component: ChooseaccountComponent,
	data: { animation: 'choose-account' }
	},
	{
	path: 'choose-amount',
	component: ChooseamountComponent,
	data: { animation: 'choose-amount' }
	},
	{
	path: 'confirm-transfer',
	component: ConfirmtransferComponent,
	data: { animation: 'confirm-transfer' }
	},
	{
	path: 'transfer-done',
	component: TransferdoneComponent,
	data: { animation: 'transfer-done' }
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }