import { Component, OnInit } from '@angular/core';
// @ts-ignore
import fluidPlayer from 'fluid-player'; 


@Component({
  selector: 'app-spanish',
  templateUrl: './spanish.page.html',
  styleUrls: ['./spanish.page.scss'],
})
export class SpanishPage{

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



ioViewDidLoad(){
  var player = fluidPlayer('fp_docs_player_1', {
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
