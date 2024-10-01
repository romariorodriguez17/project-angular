import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output, } from '@angular/core';



@Component({
  selector: 'app-add-character',
  templateUrl: 'character.component.html'
})

export class CharacterComponent {


  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };

  }
}
