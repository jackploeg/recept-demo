import { Component } from '@angular/core';
import pkg from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public version: string = pkg.version;
  public currentYear: number = new Date().getFullYear();
  public title = 'recept-demo';
}
