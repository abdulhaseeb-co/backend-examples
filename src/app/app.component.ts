import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:"<div></div>",
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tail-ng';
  message = "Silience";
  editmsg = "I am read only";
   canEdit = false;
  sayHello() {
    alert(this.message);
  };
onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
