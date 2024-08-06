import { Component, OnInit } from '@angular/core';
// @ts-ignore
import fluidPlayer from 'fluid-player'; 
@Component({
  selector: 'app-textosin',
  templateUrl: './textosin.page.html',
  styleUrls: ['./textosin.page.scss'],
})
export class TextosinPage  {
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
