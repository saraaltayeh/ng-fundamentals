import { Component } from "@angular/core";
import { Router} from "@angular/router";

@Component({
  template: `
  <h1>new event</h1>
  <hr\>
  <div class="col-md-6">
    <h3> [create event form will go here]</h3>
    <br>
    <br>
    <button type="submit" class="btn-btn-primary">save</button>
    <button type="button" class="btn-btn-default" (click)="cancel()">cancel</button>
  </div>
  `
})
export class CreateEventComponentv{
  constructor(private route: Router){

  }

  cancel() {
    this.route.navigate(['/events'])
  }
}
