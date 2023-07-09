import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

//IMPORTANDO COMPONENTES PARA ROTAS
import { ContentComponent } from './pages/content/content.component';

//DETERMINANDO AS ROTAS DO ROUTER-OUTLET
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'content/:id', // o '/:x' significa que o path requer um parâmetro
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //DETERMINANDO A ORIGEM DO COMPONENTE ROOT DE ACORDO COM AS ROTAS PREDEFINIDAS
  exports: [RouterModule]
})
export class AppRoutingModule { }
