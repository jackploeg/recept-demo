import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { CLIENTS } from '../../mock-data/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  getClients() : Client[] {
    return CLIENTS;
  }
}
