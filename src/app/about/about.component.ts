import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "app-about",
  standalone: true, // 19.Version ile birlikte bu özellik geldi
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  imports: [], // Dış kaynaklardan birşeyler import etmeye yarar
  providers: [], // Bu özellik de service import etmeye yarar
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {

}
