import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3> Contador {{contador}} </h3>
  <button (click)="this.increaseCounter(+1)"> +1 </button>
  <button (click)="this.increaseCounter(-1)"> -1 </button>
  <button (click)="this.handleReset()"> Reset </button>`
})
export class CounterComponent {
  public contador: number = 15
  increaseCounter(value: number): void {
    this.contador += value;
  }
  handleReset(): void {
    this.contador = 10;
  }
}
