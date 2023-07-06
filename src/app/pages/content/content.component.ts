import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dadosFalsos} from '../../data/dadosFalsos-Noticias';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  //PROPRIEDADES DA CONTENT PAGE
  photoCover:string = ''
  photoAltText:string=''
  contentTitle:string=''
  contentText:string=''
  contentMore:string = ''
  dataPostagem:string=''
  private id:string | null= "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (value) => this.id = value.get('id') );

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const dados = dadosFalsos.filter( (article) => article.id == id )[0];

    this.photoCover = dados.photo;
    this.photoAltText = dados.altPhotoText;
    this.contentMore = dados.moreUrl;
    this.contentTitle = dados.title;
    this.contentText = dados.descricao;
    this.dataPostagem = dados.dataPostagem;
  }
}
