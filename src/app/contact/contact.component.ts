import { Component, ElementRef, ViewChild } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  
  preventEvent(event: SubmitEvent):void{
    event.preventDefault();
  }
 

}
