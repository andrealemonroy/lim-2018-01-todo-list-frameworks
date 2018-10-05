import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodolistComponent implements OnInit {
  task = {
   title: '',
   description: ''
  };
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.task.title !== '' && this.task.description !== '') {
      this.firebaseService.addIngredientdb(this.task);
      this.task.title = '';
      this.task.description = '';
    }
  }

}
