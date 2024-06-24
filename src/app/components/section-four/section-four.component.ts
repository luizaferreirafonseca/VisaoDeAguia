import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-four',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section-four.component.html',
  styleUrl: './section-four.component.css'
})
export class SectionFourComponent {
faPlus = faPlus;
faCheck = faCheck;

}
