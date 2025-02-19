import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  }, // Burada yaptığım sayesinde route'lar birbirinden ayrılır aşşağıdakinde yazdığımda adres çubuğu boş ise Layouts getir dedim ve sonrasına
  // Layouts ile kullanılan route yapılarını children içerisinde yazdım yukarıda ise  login sayfasını bu yapıdan ayırmış oldum login sayfası açıldığında
  // Home ve About gibi kısımlar olmaz çünkü children yazmadık ona.

  {
    path: "",
    component: LayoutsComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent }
    ]
  },

];
