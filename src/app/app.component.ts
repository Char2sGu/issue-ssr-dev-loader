import { Component } from '@angular/core';
import module from '@material-symbols/svg-500/outlined/add.svg';
import local from './add.svg';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly local = local;
  readonly module = module;
  constructor() {
    console.log({ local, module });
  }
}
