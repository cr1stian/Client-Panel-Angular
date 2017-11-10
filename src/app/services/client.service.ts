import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {

  clientsRef: AngularFireList<any>;     //Declaring properties to Reference Firebase data
  clients: Observable<any[]>;
  client: Observable<any>;

  constructor(private db: AngularFireDatabase) { //Injecting Database
    this.clientsRef = this.db.list('clients');   //Settinng our property to our database collectionn
    this.clients = this.clientsRef.snapshotChanges().map(changes => { //maps through database and grabs key
      return changes.map( c => ({key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  getClients(){  // Setting up Callback Function to retrieve clients
    return this.clients;
  }

}
