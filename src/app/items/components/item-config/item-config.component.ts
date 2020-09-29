import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-config',
  templateUrl: './item-config.component.html',
  styleUrls: ['./item-config.component.css'],
})
export class ItemConfigComponent implements OnInit {
  title = 'Configure Item';
  item: any;
  items: any[] = [];
  index: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.index = this.route.snapshot.paramMap.get('index'); // Se obtiene el index por la url
    this.obtenerItems();
  }

  obtenerItems(): void {
    this.items = JSON.parse(localStorage.getItem('items'));
    if (this.index !== 'new') {
      this.item = this.items[this.index];
    } else {
      this.item = {};
    }
  }

  /**
   * Método para guardar el item.
   * @param form formulario con la información del item
   */
  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    if (this.index === 'new') {
      this.items.push(this.item);
    } else {
      this.items.splice(Number(this.index), 1, this.item);
    }
    this.guardarEnLocal();
    this.goToBack();
  } // end onSubmit

  goToBack(): void {
    this.router.navigate(['/itemsModule/items']);
  }

  guardarEnLocal(): void {
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}
