import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// MODULOS
import { ConfirmationService, Message, SelectItem } from 'primeng/api';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  // Variables relacionadas a la tabla
  paginador: number;
  paginas: SelectItem[];
  pageSize: number;
  totalRecords: number;

  // Datos
  items: any[] = [];

  loading: boolean = true; // Variables para mostrar el loading en la tabla de perfiles

  msgs: Message[] = [];

  constructor(
    private itemsService: ItemsService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pageSize = 5; // Se inicializa Tamaño de la pagina
    this.paginador = 1; // Se incializa el paginador de la tabla
    this.totalRecords = 0; // Se inicializa total de registros
    // Inicializamos numero de paginación
    this.paginas = [
      { label: '10', value: '10' },
      { label: '20', value: '20' },
      { label: '50', value: '50' },
      { label: '100', value: '100' },
    ];
    this.getItems();
  }

  /**
   * Método para obtener los items desde la API
   */
  getItems(): void {
    this.itemsService.obtenerItems().subscribe(
      (data) => {
        if (data) {
          this.guardarEnLocal(data.items);
        } else {
          this.items = [];
        }
      },
      (error) => {
        console.log('Error al obtener', error);
      }
    );
  }

  /**
   * Método para obtener los items del LocalStorage
   */
  getItemsLocal(): void {
    const data = JSON.parse(localStorage.getItem('items'));
    if (data) {
      this.items = data;
      this.loading = false;
    } else {
      this.items = [];
      this.loading = false;
    }
  }

  /**
   * Método para eliminar un item
   * @param index index del item a eliminar
   */
  deleteItem(index): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this item?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.items.splice(index, 1);
        this.msgs = [
          { severity: 'info', summary: 'Confirmed', detail: 'Item deleted' },
        ];
        setTimeout(() => {
          this.msgs = [];
        }, 4000);
        this.guardarEnLocal(this.items, 'delete');
      },
      reject: () => {},
    });
  }

  editItem(index): void {
    this.router.navigate(['/itemsModule/item-config', index]);
  }

  guardarEnLocal(items, flag?: string): void {
    this.loading = true;
    const data = JSON.parse(localStorage.getItem('items'));
    if (!data || data.length === 0 || flag === 'delete') {
      localStorage.setItem('items', JSON.stringify(items));
      this.loading = false;
    }

    this.getItemsLocal();
  }

  nuevoItem(): void {
    this.router.navigate(['/itemsModule/item-config', 'new']);
  }
}
