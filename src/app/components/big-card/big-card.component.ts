import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
              './big-card.component.css',
              './big-card-responsive.component.css'
            ]
})
export class BigCardComponent implements OnInit {

  //PROPRIEDADES INPUTÁVEIS DO BIG-CARD
  @Input() photoCover:string = ''
  @Input() photoAltText:string=''
  @Input() cardTitle:string=''
  @Input() cardDescricao:string=''
  @Input() cardUrl:string=''
  @Input() dataPublicacao = 'default';
  @Input() id:string='0'

  constructor() { }

  ngOnInit(): void {
  }

}
