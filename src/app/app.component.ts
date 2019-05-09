import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 task :String = "";
 tasks : Array<String> = [
   "Tarefa 1",
   "Tarefa 2",
   'Tarefa 3'
 ];

 addTask(){
   this.tasks.push(this.task);
   this.task="";
 }
}
