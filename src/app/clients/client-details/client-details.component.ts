import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client.model'
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  @Input()
  public client : Client;

  constructor() { }

  ngOnInit(): void {
  }

}
