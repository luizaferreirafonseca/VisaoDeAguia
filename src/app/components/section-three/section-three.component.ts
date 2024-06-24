import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar, faClock, faExclamationTriangle, faHouse, faLifeRing, faListAlt, faMobileScreenButton, faMoneyBill, faPercent, faSignal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-three',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.css'
})
export class SectionThreeComponent {

  faPercent = faPercent;
  faMoneyBill = faMoneyBill;
  faMobile = faMobileScreenButton;
  faLifeRing = faLifeRing;
  faClock = faClock;
  faHouse = faHouse;
  faCar = faCar;
  faList = faListAlt;
  faExclamation = faExclamationTriangle;


}
