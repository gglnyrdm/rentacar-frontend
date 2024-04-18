import { Component } from '@angular/core';
import { MainLayoutComponent } from "../../shared/layouts/main-layout/main-layout.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModelsListComponent } from '../../features/models/components/models-list/models-list.component';
import { BrandListComponent } from '../../features/models/components/brand-list/brand-list.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [CommonModule, RouterModule, MainLayoutComponent,ModelsListComponent,BrandListComponent]
})
export class HomePageComponent {
  counter = 0; //sayı atadığımız için direk tipi number oldu
 // counter2 : number = 0 - şeklinde de tanımlanabilirdi.
 //değişkeni private tamımlarsak getter ve setter yazmamız gerekir.
 //TypeScript getter ve setter desteği sağlar.
 sumCounter(sum: number){
  this.counter +=sum
 }
//Getter böyle yazılıyor. Javadaki yazımı biraz daha farklı. ordaki gibi method şeklinde de yazılabilir.
//Javadaki gibi method şeklinde getter yazarsak getCounter{method} şeklinde, home-page-comp.html den çağırırken;
// {{counter}} olarak değil {{getCounter}} olarak çağırabiliriz.
 get isCounterNegative() : boolean {
  return this.counter < 0;
 }
}
