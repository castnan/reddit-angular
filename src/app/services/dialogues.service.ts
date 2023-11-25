import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetalhesService {
  private detalheUrl: string | undefined;

  setDetalheUrl(url: string): void {
    this.detalheUrl = url;
  }

  getDetalheUrl(): string {
    return this.detalheUrl;
  }
}
