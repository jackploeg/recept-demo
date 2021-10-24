import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client.model'

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  @Input()
  public client : Client;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  createPrescription() {
    this.router.navigate(['prescription', this.client.clientNumber]);
  }
}
