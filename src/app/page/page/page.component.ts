import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../../components/header/header.component';
import { SectionOneComponent } from '../../components/section-one/section-one.component';
import { SectionTwoComponent } from '../../components/section-two/section-two.component';
import { SectionThreeComponent } from '../../components/section-three/section-three.component';
import { SectionFourComponent } from '../../components/section-four/section-four.component';
import { SectionFiveComponent } from '../../components/section-five/section-five.component';
import { SectionSixComponent } from '../../components/section-six/section-six.component';

import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-page',
  standalone: true,
  imports: [ FontAwesomeModule, HeaderComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, SectionFiveComponent, SectionSixComponent, FooterComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
