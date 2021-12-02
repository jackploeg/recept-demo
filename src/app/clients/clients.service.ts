import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './client.model';
import { CLIENTS } from '../../mock-data/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  getClientData(): Observable<Client[]> {
    return of(CLIENTS);
  }

}
