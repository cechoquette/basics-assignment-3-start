import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    .overFive{
        color : white;
    }
  `]
})
export class AppComponent {
  showDetails=false;
  buttonClicks=[];
  // count='one';

  onDisplayDetails() {
    this.showDetails = !this.showDetails;
    this.buttonClicks.push(this.buttonClicks.length + 1);
    // this.count='two';

  }

  getColor() {
    return this.buttonClicks.length >= 5 ? 'blue':'';
  }
}
