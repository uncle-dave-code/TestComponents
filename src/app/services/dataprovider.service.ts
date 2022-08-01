import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  public reportSubject : Subject<any> = new Subject();
  constructor() { }

  refreshReport() {
    //Operación que quieras hacer y el resultado lo envias a reportSubject
    this.reportSubject.next("RESULTADO DE LA OPERACION - " + this.getRandomInt(1, 100));
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
