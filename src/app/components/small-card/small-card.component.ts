import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dadosFalsos} from '../../data/dadosFalsos-Noticias';

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
  @Input() id:string =''
  private Id: string | null = '' 

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (value) => this.Id = value.get('id') );

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const dados = dadosFalsos.filter( (article) => article.id == id )[0];

    this.cardTitle = dados.title;
    this.photoCover = dados.photo;
    this.photoAltText = dados.altPhotoText;
  }
}
