import { Component, OnInit } from '@angular/core';
import { VideoPlayer, VideoOptions } from '@awesome-cordova-plugins/video-player/ngx';
// @ts-ignore
import fluidPlayer from 'fluid-player'; 



@Component({
  selector: 'app-science',
  templateUrl: './science.page.html',
  styleUrls: ['./science.page.scss'],
})
export class SciencePage  {
  
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
