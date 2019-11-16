import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject("This is default data declared in shared service file")

  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // TODO create method changeMessage() method that passes in a string

}
