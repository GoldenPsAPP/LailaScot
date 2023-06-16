import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../Services/spinner.service';

@Component({
  selector: 'app-spinner-load',
  template: `
  <div class="overlay" *ngIf="isLoading | async">
  <div class="lds-hourglass"></div>
  </div>
  `,
  styleUrls: ['./spinner-load.component.scss']
})
export class SpinnerLoadComponent  {
  isLoading=this.spinnerService.isLoading$;

  constructor(private spinnerService: SpinnerService) { }


}
