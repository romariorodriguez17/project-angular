import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../service/dbz.service';


@Component({
  selector: 'app-dbz-page',
  templateUrl: 'main-page.component.html'
})

export class DbzPageComponent {
  constructor(private dbzService: DbzService) { }

  get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(Character: Character): void {
    this.dbzService.addCharacter(Character)
  }

}
