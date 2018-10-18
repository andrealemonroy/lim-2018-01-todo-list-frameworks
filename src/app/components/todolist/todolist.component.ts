import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodolistComponent implements OnInit {
  task: any;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.task !== '') {
      this.firebaseService.addIngredientdb(this.task);
      this.task = '';
      // this.task.description = '';
    }
  }

}
