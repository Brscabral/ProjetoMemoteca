import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './Componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './Componentes/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'listarPensamento',
  pathMatch: 'full'
},  
{
  path: 'criarPensamento',
  component: CriarPensamentoComponent

},
{
  path: 'listarPensamento',
  component: ListarPensamentoComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
