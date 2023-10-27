import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})


export class CriarPensamentoComponent {
  pensamento ={
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''

  }
  Salvar(){
    alert("O botão de salvar foi clicado");
  }
  Cancelar(){
    alert("O botão de cancelar foi clicado");
  }

}
