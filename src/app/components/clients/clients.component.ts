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
  totalOwed: number;


  constructor(private clientService: ClientService) { } //Setting ClientService

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {  // Using callback function to get clients
      // console.log(clients)
      this.clients = clients;
      this.getTotalOwed();
    })
  }

  getTotalOwed() { // Grabbing all values in totalOwed Column
    let total = 0; // First set empty total
    for (let i = 0; i < this.clients.length; i++) { //loop through all clients
      total += parseFloat(this.clients[i].balance); //grab individual balances
    }
    this.totalOwed = total;
    console.log(total)
  }

}
