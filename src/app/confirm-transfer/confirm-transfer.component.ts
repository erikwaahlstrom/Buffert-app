import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger,state,style,animate,transition,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-confirmtransfer',
  templateUrl: './confirm-transfer.component.html',
  styleUrls: ['./confirm-transfer.component.css'],
  animations: [
      trigger('doneAnimation', [

      state('small', style({
        opacity: '0',
        transform: 'scale(1)',
      })),
      state('large', style({
        opacity: '1',
        transform: 'scale(2.5)',
      })),

      transition('small => large', animate('850ms ease-in-out')),
    ]),
      trigger('fadeOutDiv', [

      state('small', style({
        display: 'block',
      })),
      state('large', style({
        display: 'none',
      })),
    ]),
  ]
})
export class ConfirmtransferComponent implements OnInit {

  state: string = 'small';
  changeRoute = false;

  constructor(private router: Router) { }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
    this.changeRoute = true;
  }

  goTo() {
    if (this.changeRoute) {
      this.router.navigate(['transfer-done']);
    }
  }

  stopAnimation() {
    this.state = 'reset';
  }
  
  ngOnInit() {
  }

}
