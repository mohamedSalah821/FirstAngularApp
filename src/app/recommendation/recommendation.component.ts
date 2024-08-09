import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImgPortfolio } from '../img-portfolio';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent {

  images:ImgPortfolio[]=[
    {img:'./assets/image/seafood-1.jpg'},
    {img:'./assets/image/seafood-2.jpg'},
    {img:'./assets/image/seafood-3.jpg'}
    
  ]
  @ViewChild('popUpElement') popUpElement!: ElementRef;
  popUpImage:string ="";
  getPopUp(event: string):void{
    this.popUpElement.nativeElement.classList.add('d-flex')
    this.popUpImage = event;
  }
  closePopUp(event: MouseEvent):void{
    if(event.currentTarget == event.target){
      this.popUpElement.nativeElement.classList.remove('d-flex')
      this.popUpImage = "";
    }
  }
}
