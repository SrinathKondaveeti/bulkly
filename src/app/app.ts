import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./commons/header/header";
import { Footer } from "./commons/footer/footer";

@Component({
  selector: 'bulkly-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('bulkly');
}
