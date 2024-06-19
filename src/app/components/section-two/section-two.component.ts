import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faMobile} from '@fortawesome/free-solid-svg-icons';
import { faLifeRing} from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.css'
})
export class SectionTwoComponent {

  faMoneyBill = faMoneyBill;
  faMobile = faMobile;
  faLifeRing = faLifeRing;
  faHome = faHome;
  faSignal = faSignal;
  faCar = faCar;
  faClock = faClock;
  faPercent = faPercent;
  faExclamationTriangle = faExclamationTriangle;
  faList = faList
  
}
