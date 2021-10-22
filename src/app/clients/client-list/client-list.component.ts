import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Client } from '../client.model'

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients = [
    { clientNumber: 12345,
      firstName: "Jantien",
      lastName: "Bakker",
      birthDate: new Date("2002-10-08"),
      gender: "",
    },
    { clientNumber: 12346,
      firstName: "Gerard",
      lastName: "Jansen",
      birthDate: new Date("1992-09-12"),
      gender: "",
    },
    { clientNumber: 12347,
      firstName: "Laura",
      lastName: "Mulder",
      birthDate: new Date("1986-12-18"),
      gender: "",
    },
    { clientNumber: 12348,
      firstName: "Willem",
      lastName: "Smit",
      birthDate: new Date("1994-01-14"),
      gender: "",
    },
    { clientNumber: 12349,
      firstName: "Petra",
      lastName: "Vos",
      birthDate: new Date("1999-08-03"),
      gender: "",
    },
    { clientNumber: 12350,
      firstName: "Albert-Jan",
      lastName: "Dekker",
      birthDate: new Date("1975-03-28"),
      gender: "",
    },
  ];

  @Output()
  clientSelectionChanged = new EventEmitter<Client>();

  private selectedClientNumber : number;

  constructor() { }

  ngOnInit(): void {
  }

  onClientSelected(client: Client) {
    this.selectedClientNumber = client.clientNumber;
    this.clientSelectionChanged.emit(client);
  }

  isSelected(client : Client) {
    return this.selectedClientNumber == client.clientNumber;
  }
}
