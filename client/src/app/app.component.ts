import { Component } from '@angular/core';
//Import Services you'd like to subscribe to.
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'MEAN';
  tasks : any[];
  newtask = {title: "", description: ""}

  constructor(private _httpService: HttpService){
    console.log("Did the thing!")
    this.tasks = [ {title: 'bob', description: 'rob', completed: false},
            {title: 'bob', description: 'rob', completed: false},
            {title: 'bob', description: 'rob', completed: false},
            {title: 'bob', description: 'rob', completed: false}]
  }
  getTasks(){
    console.log('Go get all the Tasks.')
    //Go call the service's method you'd like to run...
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      console.log("I am subscribed...");
      console.log();
      console.log(this.tasks);
      console.log("Got our tasks!", data)
      this.tasks = data['tasks'];
      console.log(this.tasks);
    });
  }
  newTaskForm(){
    let tempObservable= this._httpService.createTask(this.newtask);
    tempObservable.subscribe(data=>{
      console.log("Subscribed to createTask Observable...");
      this.getTasks();
    });
  }
  deleteTask(id){
    console.log("We're going to Delete something!")
    let tempObservable = this._httpService.deleteTask(id);
    tempObservable.subscribe(data=>{
      console.log("Subscribe the delete by ID Observable!")
      this.getTasks();
    });
  }
  updateTask(){

  }
}
