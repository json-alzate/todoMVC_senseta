import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';

import { TodoDataService } from '../../../services/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: any;
  filter: string;

  constructor( public _dataService: TodoDataService,  private store: Store<AppState> ) { }

  ngOnInit() {

    // init listener for get todos of user
    this._dataService.initTodosListener();

    this.store.subscribe( state => {
      this.todos =  state.todos.todos;
      this.filter = state.filter;
    });

  }// end ngOnInit

}// end class
