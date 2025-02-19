import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layouts',
  imports: [RouterOutlet], // Eğer ki buraya bunu yazmazsam o zaman bu özelliği bu component de kullanamam.
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

}
