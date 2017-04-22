import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  showModal = false;
  
  constructor() { }

  onSubmit(formData:any){
    this.showModal = false;
    console.log("Contact form data=> Name: " + formData.firstname + " Surname: " + formData.surname + " Message: " + formData.message)
  }
}