import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  template: "<h1>Contact Page</h1>", // Template bölümü sayesinde contact.component.html bölümüne değer yazmadan buraya yazarak aynı işlemi gösterte biliriz.
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  constructor(
    private activated: ActivatedRoute
  ) {
    this.activated.params.subscribe((res) => {
      console.log(res['params'])
    })
  }
}
