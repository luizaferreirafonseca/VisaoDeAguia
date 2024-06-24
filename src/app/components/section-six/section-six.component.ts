import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-six',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section-six.component.html',
  styleUrl: './section-six.component.css'
})
export class SectionSixComponent {

faMoney = faMoneyBillTrendUp;
faLocation = faLocationDot;


}
