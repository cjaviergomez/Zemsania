import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'itemsModule', pathMatch: 'full' },
  {
    path: 'itemsModule',
    loadChildren: () =>
      import('./items/items.module').then((m) => m.ItemsModule),
  },
  { path: '**', redirectTo: 'itemsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
