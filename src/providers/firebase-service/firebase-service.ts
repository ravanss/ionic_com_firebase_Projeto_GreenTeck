import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public db: AngularFireDatabase) {}

  getall(){
    return this.db.list('teste-69708').valueChanges();
  }

  save(course: any){
    this.db.list('teste-69708')
    .push(course)
    .then(r => console.log(r));
  }

}
