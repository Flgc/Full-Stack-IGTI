import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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

  constructor(private _data: DataService) {}

  //Inicializa a interface
  ngOnInit() {
    this.itemCount = this.objetivos.length;
    //Faz a resposta recebida através do campo no array
    this._data.objetivo.subscribe((res) => (this.objetivos = res));
    //Altera o valor do array
    this._data.changeGoal(this.objetivos);
  }

  addItem() {
    this.objetivos.push(this.objetivoText);
    this.objetivoText = ''; //Limpa o campo após adição antes de efetuar a contagem
    this.itemCount = this.objetivos.length;
    this._data.changeGoal(this.objetivos);
  }

  removeItem(i: any) {
    this.objetivos.splice(i, 1);
    this._data.changeGoal(this.objetivos);
  }
}
