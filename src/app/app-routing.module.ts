import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-form',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login-form', loadChildren: './login-form/login-form.module#LoginFormPageModule' },
  { path: 'register-form', loadChildren: './register-form/register-form.module#RegisterFormPageModule' },
  { path: 'club', loadChildren: './adherer-club/adherer-club.module#AdhererClubPageModule' },
  { path: 'evaluation', loadChildren: './evaluation/evaluation.module#EvaluationPageModule' },
  //{ path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'cadeaux', loadChildren: './cadeaux/cadeaux.module#CadeauxPageModule' },
  { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenancePageModule' },
  { path: 'wash', loadChildren: './wash/wash.module#WashPageModule' },
  { path: 'rdv', loadChildren: './rdv/rdv.module#RdvPageModule' },
  { path: 'chat-room', loadChildren: './chat-room/chat-room.module#ChatRoomPageModule' },
  { path: 'station', loadChildren: './station/station.module#StationPageModule' },
  { path: 'jeux', loadChildren: './jeux/jeux.module#JeuxPageModule' },
  { path: 'post', loadChildren: './post/post.module#PostPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
