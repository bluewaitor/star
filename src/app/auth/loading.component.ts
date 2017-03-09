import { Component, OnInit } from '@angular/core';
import { InterceptorService } from './interceptor.service';
@Component({
    selector: 'loading',
    template: `<div *ngIf="isLoading" class="loading">
  <p>loading...</p>
</div>`,
    styles: [
      `
.loading {
  position:fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
  color: #ffffff;
  text-align: center; 
}
.loading p {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);
}
`
    ]
})
export class LoadingComponent implements OnInit {

    isLoading: boolean = false;

    constructor(private _interceptor: InterceptorService) { }

    ngOnInit() {
      this._interceptor.beforeRequest.subscribe(data => {
        console.log(data);
        this.isLoading = true;
      });

      this._interceptor.afterRequest.subscribe(data=> {
        this.isLoading = false;
      })
    }

}
