import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TPO-GECJ';

  openBrochure(){
    window.open('../../../../assets/pdfs/gecj brochure.pdf', '_blank');
  }

  openPlacementBrochure(){
    window.open('../../../../assets/pdfs/Placement Brochure 2018.pdf', '_blank');
  }

  closeMobileMenu() {
    const navCheck = document.getElementById('nav-check') as HTMLInputElement;
    if (navCheck) {
      navCheck.checked = false;
    }
  }
  
}
