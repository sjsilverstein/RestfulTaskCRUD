import { Injectable } from '@angular/core';
//Dependency Injection
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  tasks=[];
  constructor(private _http: HttpClient){
      this.getTasks();
  }

  getTasks(){
    // our http response is an Observable, store it in a variable
    return  this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    
 }
 getTaskBy(id){
   let tempObservable = this._http.get('/tasks/'+id);

   tempObservable.subscribe(data => console.log("Got task _id: "+id, data))
 }
 //Creating a New Task and Adding it to Mongo DB.
 createTask(newTaskData){
  return this._http.post('/tasks', newTaskData);
 }
 deleteTask(id){
   return this._http.delete('/tasks/'+id);
 }
 updateTask(data){
   return this._http.put('/tasks/edit/'+data._id, data);
 }
  
}


