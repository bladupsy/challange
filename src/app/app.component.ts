import { Component } from '@angular/core';

export interface Small {
  category: string,
  title: string,
  description: string,
  price: number,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challange';

  smallCard: Array<Small> = [{category: 'PERFUME', title: 'Gabrielle Essence Eau De Parfum', description: 'A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL', price: 149.99}]
}
