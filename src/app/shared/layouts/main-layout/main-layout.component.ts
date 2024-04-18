import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    RouterModule//bunu import edince router-outlet kullanılabilir.
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
