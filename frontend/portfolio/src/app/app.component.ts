import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  status: boolean = false;
  //smoothScroller

  clickEvent(){
    this.status = !this.status;
}
}
