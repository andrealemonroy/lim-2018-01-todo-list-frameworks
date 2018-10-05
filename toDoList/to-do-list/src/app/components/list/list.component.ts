import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks: any;
  task: any;
  constructor(private _FirebaseService: FirebaseService) {
    this._FirebaseService.getTasks().subscribe(data => {
      this.tasks = data;
      this.task = data;
    });
  }

  ngOnInit() {

  }
  // ingredientDone(i) {
  //   this._FirebaseService.addIngredientdb(i);
  // }
  // deleteIngredient(tasks) {
  //   this._FirebaseService.deleteIngredientdb(tasks);
  // }
  // updateTask(idTask) {
  //   this.currentTask = idTask;
  // }

}
