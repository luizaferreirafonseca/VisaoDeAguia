import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section-five',
  standalone: true,
  imports: [],
  templateUrl: './section-five.component.html',
  styleUrl: './section-five.component.css'
})
export class SectionFiveComponent {

  @ViewChild('contactForm', { static: true }) contactForm!: ElementRef;

  scrollToForm() {
    // Rola até o elemento com o ID "contact-form"
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
