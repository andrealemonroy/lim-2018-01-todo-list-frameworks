import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public ingredients = {};
  constructor(public db: AngularFireDatabase) {
  }

  addIngredientdb(ingredient) {
    const date = new Date().getTime();
    return new Promise((resolve) => {
      this.db.database.ref('ingredient/' + date)
        .set({
          ingredient,
          id: date
        });
      resolve(true);
    });
  }
  getTasks() {
    return this.db.list('ingredient').valueChanges();
  }
  deleteIngredientdb(id) {
    const item = this.db.object('ingredient/' + id);
    item.remove();
  }

}
