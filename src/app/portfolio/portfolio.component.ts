import { Component, ElementRef, ViewChild } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { ImgPortfolio } from '../img-portfolio';
import { RecommendationComponent } from "../recommendation/recommendation.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent, RecommendationComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  images:ImgPortfolio[]=[
    {img:'./assets/image/images1.png'},
    {img:'./assets/image/images2.png'},
    {img:'./assets/image/images3.png'},
    {img:'./assets/image/images1.png'},
    {img:'./assets/image/images2.png'},
    {img:'./assets/image/images3.png'}
    
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
