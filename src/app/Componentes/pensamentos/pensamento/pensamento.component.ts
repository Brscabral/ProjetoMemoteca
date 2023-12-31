import { Pensamento } from './../pensamento';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id:0,
    conteudo: 'I love Angular',
    autoria: 'Bruno',
    modelo: 'modelo3'
}

larguraPensamento(){
  if(this.pensamento.conteudo.length > 256){
    return 'pensamento-g'
  }else{
    return 'pensamento-p'
  }

}
}
