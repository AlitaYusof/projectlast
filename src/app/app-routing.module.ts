import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './account/login/login.module#LoginPageModule' },
  { path: 'firstapp', loadChildren: './account/firstapp/firstapp.module#FirstappPageModule' },
  { path: 'register', loadChildren: './account/register/register.module#RegisterPageModule' },
  { path: 'comfermjob', loadChildren: './user/comfermjob/comfermjob.module#ComfermjobPageModule' },
  { path: 'markmap', loadChildren: './user/markmap/markmap.module#MarkmapPageModule' },
  { path: 'markmap1', loadChildren: './user/markmap1/markmap1.module#Markmap1PageModule' },
  { path: 'receive', loadChildren: './driver/receive/receive.module#ReceivePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'showprofile', loadChildren: './showprofile/showprofile.module#ShowprofilePageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
