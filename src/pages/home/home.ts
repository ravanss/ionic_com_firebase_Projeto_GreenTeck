import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private teste_69708;

  constructor(
    public navCtrl: NavController,
    public dbService: FirebaseServiceProvider
    ) {
     this.teste_69708 =  this.dbService.getall();

  }

}
