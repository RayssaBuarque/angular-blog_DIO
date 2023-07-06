import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
              './small-card.component.css',
              './small-card-responsive.component.css'
            ]
})
export class SmallCardComponent implements OnInit {

  //PROPRIEDADES INPUTÁVEIS DO SMALL-CARD
  @Input() photoCover:string = ''
  @Input() photoAltText:string=''
  @Input() cardTitle:string=''
  @Input() cardUrl:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
