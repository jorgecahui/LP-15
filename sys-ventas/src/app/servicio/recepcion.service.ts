import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Recepcion } from '../modelo/Recepcion';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepcionService extends GenericService<Recepcion> {

  private entidadSubject = new BehaviorSubject<Recepcion[]>([]);
  private messageChange: Subject<string> = new Subject<string>();

  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/api/recepciones`);
  }

  setEntidadChange(data: Recepcion[]) {
    this.entidadSubject.next(data);
  }

  getEntidadChange() {
    return this.entidadSubject.asObservable();
  }

  setMessageChange(data: string) {
    this.messageChange.next(data);
  }

  getMessageChange() {
    return this.messageChange.asObservable();
  }
}
