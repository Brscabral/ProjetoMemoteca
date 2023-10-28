import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
  {
      conteudo: 'I love Angular',
      autoria: 'componente filho',
      modelo: 'modelo3'
  },
  {
    conteudo: 'I love C#',
    autoria: 'componente pai',
    modelo: 'modelo3'
}
  ]

}
