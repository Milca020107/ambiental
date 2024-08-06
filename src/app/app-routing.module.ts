import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'rights',
    loadChildren: () => import('./rights/rights.module').then( m => m.RightsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'fame',
    loadChildren: () => import('./fame/fame.module').then( m => m.FamePageModule)
  },
  {
    path: 'science',
    loadChildren: () => import('./science/science.module').then( m => m.SciencePageModule)
  },
  {
    path: 'spanish',
    loadChildren: () => import('./spanish/spanish.module').then( m => m.SpanishPageModule)
  },
 
  {
    path: 'ethics',
    loadChildren: () => import('./ethics/ethics.module').then( m => m.EthicsPageModule)
  },
  {
    path: 'english',
    loadChildren: () => import('./english/english.module').then( m => m.EnglishPageModule)
  },
  {
    path: 'prim',
    loadChildren: () => import('./prim/prim.module').then( m => m.PrimPageModule)
  },
  {
    path: 'espanol',
    loadChildren: () => import('./espanol/espanol.module').then( m => m.EspanolPageModule)
  },
  
  {
    path: 'ciencia',
    loadChildren: () => import('./ciencia/ciencia.module').then( m => m.CienciaPageModule)
  },
  {
    path: 'civic',
    loadChildren: () => import('./civic/civic.module').then( m => m.CivicPageModule)
  },
  {
    path: 'tp',
    loadChildren: () => import('./tp/tp.module').then( m => m.TpPageModule)
  },
  {
    path: 'to',
    loadChildren: () => import('./to/to.module').then( m => m.ToPageModule)
  },
  {
    path: 'tv',
    loadChildren: () => import('./tv/tv.module').then( m => m.TvPageModule)
  },
  {
    path: 'mc',
    loadChildren: () => import('./mc/mc.module').then( m => m.McPageModule)
  },
  {
    path: 'sp',
    loadChildren: () => import('./sp/sp.module').then( m => m.SpPageModule)
  },
  {
    path: 's',
    loadChildren: () => import('./s/s.module').then( m => m.SPageModule)
  },
  {
    path: 'fi',
    loadChildren: () => import('./fi/fi.module').then( m => m.FiPageModule)
  },
  {
    path: 'foi',
    loadChildren: () => import('./foi/foi.module').then( m => m.FoiPageModule)
  },
  {
    path: 'cl',
    loadChildren: () => import('./cl/cl.module').then( m => m.ClPageModule)
  },
  {
    path: 'e',
    loadChildren: () => import('./e/e.module').then( m => m.EPageModule)
  },
  {
    path: 'i',
    loadChildren: () => import('./i/i.module').then( m => m.IPageModule)
  },
  {
    path: 'pt',
    loadChildren: () => import('./pt/pt.module').then( m => m.PtPageModule)
  },
  {
    path: 'ee',
    loadChildren: () => import('./ee/ee.module').then( m => m.EePageModule)
  },
  {
    path: 'r',
    loadChildren: () => import('./r/r.module').then( m => m.RPageModule)
  },
  {
    path: 'ap',
    loadChildren: () => import('./ap/ap.module').then( m => m.ApPageModule)
  },
  {
    path: 'oh',
    loadChildren: () => import('./oh/oh.module').then( m => m.OhPageModule)
  },
  {
    path: 'tipos-texto',
    loadChildren: () => import('./tipos-texto/tipos-texto.module').then( m => m.TiposTextoPageModule)
  },
  {
    path: 'textosin',
    loadChildren: () => import('./textosin/textosin.module').then( m => m.TextosinPageModule)
  },
  {
    path: 'tiempo',
    loadChildren: () => import('./tiempo/tiempo.module').then( m => m.TiempoPageModule)
  },
  {
    path: 'organizador',
    loadChildren: () => import('./organizador/organizador.module').then( m => m.OrganizadorPageModule)
  },
 
 
 
  {
    path: 'ecos',
    loadChildren: () => import('./ecos/ecos.module').then( m => m.EcosPageModule)
  },
 
  {
    path: 'tlc',
    loadChildren: () => import('./tlc/tlc.module').then( m => m.TlcPageModule)
  },

  
  
  

 
 
 

 
  {
    path: 'concordagrama',
    loadChildren: () => import('./concordagrama/concordagrama.module').then( m => m.ConcordagramaPageModule)
  },
 
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
