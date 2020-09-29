import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Para trabajar con peticciones http
import { FormsModule } from '@angular/forms';

// Modulos PrimeNG
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';

// Componentes
import { ItemsComponent } from './components/items/items.component';
import { ItemConfigComponent } from './components/item-config/item-config.component';

@NgModule({
  declarations: [ItemsComponent, ItemConfigComponent],
  providers: [ConfirmationService],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    TableModule,
    DropdownModule,
    RadioButtonModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
  ],
})
export class ItemsModule {}
