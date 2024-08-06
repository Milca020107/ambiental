import { Component, OnInit } from '@angular/core';
// @ts-ignore
import fluidPlayer from 'fluid-player'; 
@Component({
  selector: 'app-concordagrama',
  templateUrl: './concordagrama.page.html',
  styleUrls: ['./concordagrama.page.scss'],
})
export class ConcordagramaPage  {
  selected_option:string;


  constructor() { }

  ionViewDidLoad(){
    var player = fluidPlayer('fp_docs_player_0', {
      layoutControls:{
        primaryColor: "#28B8ED",
        allowDownload: true,
       
      miniPlayer: {
        enabled:true,
        width: 400,
        height: 225,
        widthMobile: 40,
        placeHolderText: 'Playing in miniPlayer',
        position: 'bottom right',
        autoToggle: false,
  
      }
      } })
  
  }

}
