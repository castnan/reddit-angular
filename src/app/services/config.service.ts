import { Injectable } from '@angular/core';
import { config } from '../../config/config.dev';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  getConfig() {
    return config;
  }
}
