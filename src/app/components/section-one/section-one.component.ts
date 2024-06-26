import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule
  ],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css'
})
export class SectionOneComponent {
  dds: number[] = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];



form = new FormGroup({

  nome: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  ddd: new FormControl('', [Validators.required]),
  celular: new FormControl('', [Validators.required]),
  tipoVeiculo: new FormControl ('', [Validators.required])



})




onSubmit(){
  if(this.form.valid){
    const formData = this.form.value;

    const message = `Olá, meu nome é ${formData.nome}. Eu tenho interesse no serviço de rastreamento de veículos do tipo ${formData.tipoVeiculo}.`; 

    const encodedMessage = encodeURIComponent(message);

    // Número de telefone da sua empresa
    const companyPhoneNumber = '21998583655'; // substitua pelo número real da sua empresa

    // Crie a URL do WhatsApp com o número da empresa e a mensagem personalizada
    const whatsappUrl = `https://wa.me/${companyPhoneNumber}?text=${encodedMessage}`;

    // Redirecione o usuário para a URL do WhatsApp
    window.open(whatsappUrl, '_blank');
  } else {
    console.log('Formulário inválido'); 
  }
}














}
