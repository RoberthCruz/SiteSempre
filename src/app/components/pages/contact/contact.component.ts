import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 btnText = 'Enviar!';
  constructor() { }

  ngOnInit(): void {

  }

createHandler(event: any){
  console.log('Deu boa')
  }

}
