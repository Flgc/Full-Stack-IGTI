import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class DataService {
  private objetivos = new BehaviorSubject<any>([
    'Objetivo de vida Inicial',
    'Outro objetivo de vida',
  ]);

  objetivo = this.objetivos.asObservable();

  constructor() {}

  changeGoal(objetivo: any) {
    this.objetivos.next(objetivo);
  }
}
