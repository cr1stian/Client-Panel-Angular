import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientsComponent implements OnInit {
  clients: any[];


  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      console.log(clients)
    })
  }


}
