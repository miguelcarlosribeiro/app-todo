import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { ToDoButtonDeleteAllComponent } from './components/to-do-button-delete-all/to-do-button-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
//Page
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ToDoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
