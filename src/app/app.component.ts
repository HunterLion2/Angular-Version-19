import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, ContactComponent,FormsModule], // Buraya eklediklerimi buranın html kısmında selector'a ne yazdıysak onu html de kullanabiliriz
  // aynı zaman da buraya hangi değerleri eklersek onların içindeki function değerlerini ve diğer değerleride kullanabiliriz.
  template: `
    <h1>Döngüler</h1>
    <ul>
      @for(data of todos; track data){ <!-- Buradaki for yapısı ise yeni yapıdır buradaki fark track metodudur bu metod sayesinde sayfa güncellendiği zaman for'un döndürdüğü değerler
        arasından sadece sadece güncellenmiş değerleri sayfada refresh eder diğer değerleri yapmaz bu sayede veri daha hızlı çekilir ve sitemiz daha hızlı hale gelir.-->
        <li>
          {{$last}}  <!-- Yazdırılan değerin son değer mi olup olmadığına bakar ve sonucunda true false değer gönderir. -->
          {{$first}} <!-- Yazdırılan değerin ilk değer mi olup olmadığına bakar ve sonucunda true false değer gönderir. -->
          {{data}}
        </li>
      }
      <li *ngFor="let data of todos"></li> <!-- Bu for yapısı for'un eski hali -->
    </ul>

    <h1>Şart Blokları</h1>
    @if(showFirstWord) { <!-- Bu if-else yapısı ise yeni olan yapıdır. -->
      <p style="color: red;">Birinci Yazı</p>
    } @else if{

    }@else {

    }

    <p style="color: red;" *ngIf="showFirstWord">Birinci Yazı</p> <!-- Bu if yapısı eski olan -->

    @if(showSecondWord) {
      <p style="color: green;">İkinci Yazı</p>
    }

  `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  todos: TodoModel[] = [
    {work: "Example 1", isCompleted: true},
    {work: "Example 2", isCompleted: true},
    {work: "Example 3", isCompleted: true},
  ]

  constructor() {
    this.save()
  }

  helloWorld: string = "Hello, world from TS!!"

  changeHelloWorldVariable(event: any) {
    this.helloWorld = event.target.value
  }

  save() {
    for(let i = 0; this.todos.length; i++) {
      console.log(i)
    }

    for(let data of this.todos) {
      console.log(data)
    }

    for(let data in this.todos) {
      console.log(data)
    }
  }
}

export class TodoModel { // Bu şekilde model için ayrı dosya açmadan aynı yere yazabiliriz.
  work: string = "";
  isCompleted: boolean = false;
}
