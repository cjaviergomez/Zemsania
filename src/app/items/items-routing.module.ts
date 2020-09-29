import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ItemsComponent } from './components/items/items.component';
import { ItemConfigComponent } from './components/item-config/item-config.component';

const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'item-config/:index', component: ItemConfigComponent },
  { path: '**', component: ItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
