import { Component } from '@angular/core';
import { Storage, LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: Storage, useClass: LocalStorageService }
  ],
})
export class AppComponent {
  constructor(storage: Storage) { }
}
