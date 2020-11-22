import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss']
  styles: [
    `
      p {
        font-weight: bold;
      }
      div {
        color: gray;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Tarefas';
}
