import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sempre-forms',
  templateUrl: './sempre-forms.component.html',
  styleUrls: ['./sempre-forms.component.css']
})
export class SempreFormsComponent implements OnInit {
  @Input() btnText!: string;

  contactpageform!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactpageform = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      setor: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),

    })
 }

get nome() {
  return this.contactpageform.get('nome')!;
}

get email() {
  return this.contactpageform.get('email')!;
}

get setor() {
  return this.contactpageform.get('setor')!;
}

get telefone() {
  return this.contactpageform.get('telefone')!;
}

get cidade() {
  return this.contactpageform.get('cidade')!;
}

 submit(){
  console.log("Enviou formulário")
}

}
