import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Client } from '../client.model'

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients : Client[] = [];

  @Output()
  clientSelectionChanged = new EventEmitter<Client>();

  private selectedClientNumber : number;

  constructor(private clientsService : ClientsService) { }

  ngOnInit(): void {
    this.clients = this.clientsService.getClients();
  }

  onClientSelected(client: Client) {
    this.selectedClientNumber = client.clientNumber;
    this.clientSelectionChanged.emit(client);
  }

  isSelected(client : Client) {
    return this.selectedClientNumber == client.clientNumber;
  }
}
