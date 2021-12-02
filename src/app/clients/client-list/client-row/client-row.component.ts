import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Client } from '../../client.model'

@Component({
  selector: 'app-client-row',
  templateUrl: './client-row.component.html',
  styleUrls: ['./client-row.component.scss']
})
export class ClientRowComponent implements OnInit {

  @Input()
  public client: Client;

  @Output()
  clientSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  selectClient() {
    this.clientSelected.emit();
  }
}
