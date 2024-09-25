import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  public heroName: string[] = ['ironman', 'Spiderman', 'Thor', 'Hulk', 'Captain America'];

  public deleteHero?: string = '';

  removeHero(): void {
    this.deleteHero = this.heroName.pop();
  }
}
