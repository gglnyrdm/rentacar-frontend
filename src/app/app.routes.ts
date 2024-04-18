import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { ModelsListComponent } from './features/models/components/models-list/models-list.component';
import { BrandListComponent } from './features/models/components/brand-list/brand-list.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',  //full seçersek pathin tamamının yukarıda yazdığımız şey olmasını bekliyor. 
        //ancak prefix seçersek başlangıcın pathe verdiğimiz değer olmasını bekliyor. 
        //Eğer bir children oluşturcaksak path 'home/blabla' şeklinde devam edeceği için home/... 
        //sonrası pathlere de gidebilmesi için prefix seçmemiz gerekir.
        redirectTo: 'home', //path boş olursa home a yönlendir. bu nedenle bir de home route u oluşturmak gerekir
    },
    {
        path: 'home',
        component: MainLayoutComponent,
        children: [
            {
                path: "",
                pathMatch: 'full',
                component: HomePageComponent,
            },
            {
                path: 'models',
                component: ModelsListComponent,
            },
            {
                path: 'brands',
                component: BrandListComponent,
            }
        ]
        // children: [
        //     {
        //         path:"models", // home/models
        //         //pathMatch:'prefix',//('home/models')
        //         //patMach: 'matcher oldupunda custom bir match leme yazabiliriz.
        //         component: HomePageComponent
        //     }
        // ]
    },
    {
        path: '**', //herhangi bir path demek
        redirectTo: 'not-found',
        //!!!! her path te kullanıldığı için sürekli bu açılmasın diye bunu en sona yazmalıyız.
    },
    {
        path: 'not-found',
        component: NotFoundPageComponent,
    }
];

