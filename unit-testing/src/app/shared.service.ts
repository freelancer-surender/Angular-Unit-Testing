import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    // console.log("A HTTP Call");
   }

  mySharedFunction() {
    // console.log("My shared function is called");
  }
}
