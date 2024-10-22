import { Component } from '@angular/core';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngOnInit():void {
    const spinner = document.getElementById('nb-global-spinner')
    if (spinner) {
      spinner.style.display='none'
    }
  }


}

