import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  itemCount = 4;
  btnText = 'Adicione uma tarefa';
  objetivoText = 'Objetivos de vida';
  objetivos: string[] = []; //Corrigido para evitar incompatibilidade de tipo

  constructor() {}

  //Inicializa a interface
  ngOnInit() {
    this.itemCount = this.objetivos.length;
  }

  addItem() {
    this.objetivos.push(this.objetivoText);
    this.objetivoText = ''; //Limpa o campo após adição antes de efetuar a contagem
    this.itemCount = this.objetivos.length;
  }
}
