import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class ContextService {
  constructor(private localStorage: LocalStorageService) {}

  set(token:string):any {
    return this.localStorage.set('token',token)
  }

  get():string {
    return this.localStorage.get('token')
  }

  clear() {
    return this.localStorage.remove('token')
  }
}
