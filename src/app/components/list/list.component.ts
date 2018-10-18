import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { element } from '../../../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  task: any;
  tasks: any;
  constructor(private _FirebaseService: FirebaseService) {
    this._FirebaseService.getTasks().subscribe(data => {
      console.log(data);
      // elem.forEach(dat => {
        // elem.forEach(element => {
          this.tasks = data;
        // });
        // console.log(elem);
        // });

      // this.tasks = data;
      //     this.task = data;
      // this.tasks = data;
      /* this.task = data; */
    });
  }
  ngOnInit() {

  }
  // ingredientDone(i) {
  //   this._FirebaseService.addIngredientdb(i);
  // }
  deleteIngredient(id) {
    this._FirebaseService.deleteIngredientdb(id);
  }

  check(id) {
  this._FirebaseService.check(id);
  }
  // updateTask(idTask) {
  //   this.currentTask = idTask;
  // }

}
