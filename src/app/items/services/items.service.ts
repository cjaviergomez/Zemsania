import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private url_items = 'https://datos.gob.es/apidata/catalog/distribution';
  constructor(public http: HttpClient) {}

  /**
   * Método para obtener todos los items almacenados en la base de datos
   */
  obtenerItems() {
    return this.http.get(this.url_items).pipe(map((resp: any) => resp.result));
  }
}
