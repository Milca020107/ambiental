import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
  
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Tu viaje', url: '/contact', icon: 'airplane' },
    { title: 'Clases', url: '/tutorial', icon: 'library' },
    { title: 'Tu proyecto', url: '/prim', icon: 'nutrition' },
    { title: 'Derechos', url: '/rights', icon: 'heart' },
    { title: 'Muro de la fama', url: '/fame', icon: 'star-half' },
    

  ];
  public labels = ['Amor propio', 'Esfuerzo', 'Perseverancia', 'Sigue tus sueños', 'Compasión', 'Paciencia'];
  constructor() {}
}
